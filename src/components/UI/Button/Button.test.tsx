import { DATA_TEST_ID } from "constants/dataTestId";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

const renderWrapped = (componentToWrap: React.ReactElement) => {
  return render(<BrowserRouter>{componentToWrap}</BrowserRouter>);
};

describe("<Button />", () => {
  describe("Basic rendering", () => {
    it("Should render without errors", () => {
      // Arrange

      // Act
      renderWrapped(<Button text="" />);

      // Assert
      expect(screen.getByTestId(DATA_TEST_ID.BUTTON)).toBeInTheDocument();
    });

    it("Should render with text", () => {
      // Arrange
      const text = "Click me";

      // Act
      renderWrapped(<Button text={text} />);

      // Assert
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    it("Should render button with default type", () => {
      // Arrange

      // Act
      renderWrapped(<Button text="Click me" />);

      // Assert
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "button");
    });

    it("Should render button with custom type", () => {
      // Arrange
      const type = "submit";

      // Act
      renderWrapped(
        <Button
          text="Submit"
          type={type}
        />
      );

      // Assert
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", type);
    });

    it("Should have correct CSS class name", () => {
      // Arrange

      // Act
      renderWrapped(<Button text="Click me" />);

      // Assert
      const button = screen.getByRole("button");
      expect(button).toHaveClass("button__button");
    });
  });

  describe("Click Handler", () => {
    it("Should call onClick when clicked", () => {
      // Arrange
      const mockOnClick = jest.fn();

      // Act
      renderWrapped(
        <Button
          onClick={mockOnClick}
          text="Click me"
        />
      );

      // Assert
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("Should not throw error when clicked without onClick handler", () => {
      // Arrange

      // Act
      renderWrapped(<Button text="Click me" />);

      // Assert
      const button = screen.getByRole("button");
      expect(() => fireEvent.click(button)).not.toThrow();
    });
  });

  describe("Link Wrapping", () => {
    it("Should render Link when target is provided", () => {
      // Arrange
      const target = "/some-page";

      // Act
      renderWrapped(
        <Button
          target={target}
          text="Go to page"
        />
      );

      // Assert
      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", target);
    });

    it("Should not render Link when target is empty", () => {
      // Arrange

      // Act
      renderWrapped(
        <Button
          target=""
          text="Click me"
        />
      );

      // Assert
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("Should not render Link when target is not provided", () => {
      // Arrange

      // Act
      renderWrapped(<Button text="Click me" />);

      // Assert
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("Should wrap button content in Link when target is provided", () => {
      // Arrange
      const text = "Go to page";

      // Act
      renderWrapped(
        <Button
          target="/some-page"
          text={text}
        />
      );

      // Assert
      const link = screen.getByRole("link");
      const button = screen.getByRole("button");
      expect(link).toContainElement(button);
      expect(button).toHaveTextContent(text);
    });
  });

  describe("Accessibility", () => {
    it("Should be focusable", () => {
      // Arrange

      // Act
      renderWrapped(<Button text="Click me" />);

      // Assert
      const button = screen.getByRole("button");
      button.focus();
      expect(button).toHaveFocus();
    });
  });
});
