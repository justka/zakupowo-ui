import { DATA_TEST_ID } from "constants/dataTestId";
import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("<Checkbox />", () => {
  const defaultProps = {
    id: "test-checkbox",
    label: <span>Test Label</span>,
  };

  describe("Basic rendering", () => {
    it("Should render without errors", () => {
      // Arrange

      // Act
      render(<Checkbox {...defaultProps} />);

      // Assert
      expect(screen.getByTestId(DATA_TEST_ID.CHECKBOX)).toBeInTheDocument();
    });

    it("Should render with label", () => {
      // Arrange

      // Act
      render(<Checkbox {...defaultProps} />);

      // Assert
      expect(screen.getByText("Test Label")).toBeInTheDocument();
    });

    it("Should render checkbox input with correct id", () => {
      // Arrange

      // Act
      render(<Checkbox {...defaultProps} />);

      // Assert
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("id", "test-checkbox");
    });

    it("Should render with complex label content", () => {
      // Arrange
      const complexLabel = (
        <div>
          <span>Complex</span>
          <strong>Label</strong>
          <em>Content</em>
        </div>
      );

      // Act
      render(
        <Checkbox
          {...defaultProps}
          label={complexLabel}
        />
      );

      // Assert
      expect(screen.getByText("Complex")).toBeInTheDocument();
      expect(screen.getByText("Label")).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("Should have correct CSS class names", () => {
      // Arrange

      // Act
      render(<Checkbox {...defaultProps} />);

      // Assert
      const label = screen.getByTestId(DATA_TEST_ID.LABEL);
      const checkbox = screen.getByTestId(DATA_TEST_ID.CHECKBOX);
      const checkmark = screen.getByTestId(DATA_TEST_ID.CHECKMARK);

      expect(label).toHaveClass("checkbox__label");
      expect(checkbox).toHaveClass("checkbox__checkbox");
      expect(checkmark).toHaveClass("checkbox__checkmark");
    });
  });

  describe("Event handlers", () => {
    it("Should call onChange when checkbox is clicked", () => {
      // Arrange
      const mockOnChange = jest.fn();

      // Act
      render(
        <Checkbox
          {...defaultProps}
          onChange={mockOnChange}
        />
      );

      // Assert
      const checkbox = screen.getByRole("checkbox");
      fireEvent.click(checkbox);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it("Should call onFocus when checkbox receives focus", () => {
      // Arrange
      const mockOnFocus = jest.fn();

      // Act
      render(
        <Checkbox
          {...defaultProps}
          onFocus={mockOnFocus}
        />
      );

      // Assert
      const checkbox = screen.getByRole("checkbox");
      fireEvent.focus(checkbox);
      expect(mockOnFocus).toHaveBeenCalledTimes(1);
    });

    it("Should call onBlur when checkbox loses focus", () => {
      // Arrange
      const mockOnBlur = jest.fn();

      // Act
      render(
        <Checkbox
          {...defaultProps}
          onBlur={mockOnBlur}
        />
      );

      // Assert
      const checkbox = screen.getByRole("checkbox");
      fireEvent.blur(checkbox);
      expect(mockOnBlur).toHaveBeenCalledTimes(1);
    });

    it("Should not throw error when clicked without onClick handler", () => {
      // Arrange

      // Act
      render(<Checkbox {...defaultProps} />);

      // Assert
      const checkbox = screen.getByRole("checkbox");
      expect(() => fireEvent.click(checkbox)).not.toThrow();
    });

    it("Should not throw error when focused without onFocus handler", () => {
      // Arrange

      // Act
      render(<Checkbox {...defaultProps} />);

      // Assert
      const checkbox = screen.getByRole("checkbox");
      expect(() => fireEvent.focus(checkbox)).not.toThrow();
    });

    it("Should not throw error when blurred without onBlur handler", () => {
      // Arrange

      // Act
      render(<Checkbox {...defaultProps} />);

      // Assert
      const checkbox = screen.getByRole("checkbox");
      expect(() => fireEvent.blur(checkbox)).not.toThrow();
    });
  });

  describe("Accessibility", () => {
    it("Should be focusable", () => {
      // Arrange

      // Act
      render(<Checkbox {...defaultProps} />);

      // Assert
      const checkbox = screen.getByRole("checkbox");
      checkbox.focus();
      expect(checkbox).toHaveFocus();
    });
  });
});
