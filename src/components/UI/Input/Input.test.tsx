import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("<Input />", () => {
  const defaultProps = {
    id: "test-input",
    label: "Test Label",
  };

  describe("Basic rendering", () => {
    it("Should render without errors", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    });

    it("Should render with label", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      expect(screen.getByText("Test Label")).toBeInTheDocument();
    });

    it("Should render input with correct id", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("id", "test-input");
    });

    it("Should render input with correct type", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "text");
    });

    it("Should render input with password type", () => {
      // Arrange

      // Act
      render(
        <Input
          {...defaultProps}
          type="password"
        />
      );

      // Assert
      const input = screen.getByLabelText("Test Label");
      expect(input).toHaveAttribute("type", "password");
    });

    it("Should render input with value", () => {
      // Arrange
      const value = "test value";
      const mockOnChange = jest.fn();

      // Act
      render(
        <Input
          {...defaultProps}
          onChange={mockOnChange}
          value={value}
        />
      );

      // Assert
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue(value);
    });

    it("Should have correct CSS class names", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      const container = screen.getByText("Test Label").closest("div");
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Test Label");

      expect(container).toHaveClass("input__container");
      expect(input).toHaveClass("input__input");
      expect(label).toHaveClass("input__label");
    });

    it("Should associate label with input using htmlFor", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      const label = screen.getByText("Test Label");
      expect(label).toHaveAttribute("for", "test-input");
    });
  });

  describe("Event handlers", () => {
    it("Should call onChange when input value changes", () => {
      // Arrange
      const mockOnChange = jest.fn();

      // Act
      render(
        <Input
          {...defaultProps}
          onChange={mockOnChange}
        />
      );
      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "new value" } });

      // Assert
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it("Should call onFocus when input receives focus", () => {
      // Arrange
      const mockOnFocus = jest.fn();

      // Act
      render(
        <Input
          {...defaultProps}
          onFocus={mockOnFocus}
        />
      );
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

      // Assert
      expect(mockOnFocus).toHaveBeenCalledTimes(1);
    });

    it("Should call onBlur when input loses focus", () => {
      // Arrange
      const mockOnBlur = jest.fn();

      // Act
      render(
        <Input
          {...defaultProps}
          onBlur={mockOnBlur}
        />
      );
      const input = screen.getByRole("textbox");
      fireEvent.blur(input);

      // Assert
      expect(mockOnBlur).toHaveBeenCalledTimes(1);
    });

    it("Should not throw error when changed without onChange handler", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);
      const input = screen.getByRole("textbox");

      // Assert
      expect(() =>
        fireEvent.change(input, { target: { value: "new value" } })
      ).not.toThrow();
    });

    it("Should not throw error when focused without onFocus handler", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);
      const input = screen.getByRole("textbox");

      // Assert
      expect(() => fireEvent.focus(input)).not.toThrow();
    });

    it("Should not throw error when blurred without onBlur handler", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);
      const input = screen.getByRole("textbox");

      // Assert
      expect(() => fireEvent.blur(input)).not.toThrow();
    });
  });

  describe("Accessibility", () => {
    it("Should be focusable", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      const input = screen.getByRole("textbox");
      input.focus();
      expect(input).toHaveFocus();
    });

    it("Should be accessible by label", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      const input = screen.getByLabelText("Test Label");
      expect(input).toBeInTheDocument();
    });

    it("Should have proper label association", () => {
      // Arrange

      // Act
      render(<Input {...defaultProps} />);

      // Assert
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Test Label");
      expect(label).toHaveAttribute("for", input.id);
    });
  });

  describe("Edge cases", () => {
    it("Should render with empty value", () => {
      // Arrange
      const mockOnChange = jest.fn();

      // Act
      render(
        <Input
          {...defaultProps}
          onChange={mockOnChange}
          value=""
        />
      );

      // Assert
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue("");
    });

    it("Should render with long label text", () => {
      // Arrange
      const longLabel =
        "This is a very long label text that should be rendered properly by the Input component";

      // Act
      render(
        <Input
          {...defaultProps}
          label={longLabel}
        />
      );

      // Assert
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it("Should render with special characters in label", () => {
      // Arrange
      const specialLabel = "Label with special chars: !@#$%^&*()";

      // Act
      render(
        <Input
          {...defaultProps}
          label={specialLabel}
        />
      );

      // Assert
      expect(screen.getByText(specialLabel)).toBeInTheDocument();
    });

    it("Should render with numeric id", () => {
      // Arrange
      const numericId = "12345";

      // Act
      render(
        <Input
          {...defaultProps}
          id={numericId}
        />
      );

      // Assert
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("id", numericId);
    });
  });
});
