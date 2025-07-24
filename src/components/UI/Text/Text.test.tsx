import { DATA_TEST_ID } from "constants/dataTestId";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("<Text />", () => {
  describe("Basic rendering", () => {
    it("Should render without errors", () => {
      // Arrange

      // Act
      render(<Text text="Test text" />);

      // Assert
      expect(screen.getByText("Test text")).toBeInTheDocument();
    });

    it("Should render text with default span variant", () => {
      // Arrange
      const testText = "Hello World";

      // Act
      render(<Text text={testText} />);

      // Assert
      const textElement = screen.getByText(testText);
      expect(textElement).toBeInTheDocument();
      expect(textElement.tagName).toBe("SPAN");
    });

    it("Should render text with h1 variant", () => {
      // Arrange
      const testText = "Main Heading";

      // Act
      render(
        <Text
          text={testText}
          variant="h1"
        />
      );

      // Assert
      const headingElement = screen.getByText(testText);
      expect(headingElement).toBeInTheDocument();
      expect(headingElement.tagName).toBe("H1");
    });

    it("Should render text with p variant", () => {
      // Arrange
      const testText = "This is a paragraph";

      // Act
      render(
        <Text
          text={testText}
          variant="p"
        />
      );

      // Assert
      const paragraphElement = screen.getByText(testText);
      expect(paragraphElement).toBeInTheDocument();
      expect(paragraphElement.tagName).toBe("P");
    });

    it("Should render text with span variant explicitly", () => {
      // Arrange
      const testText = "Span text";

      // Act
      render(
        <Text
          text={testText}
          variant="span"
        />
      );

      // Assert
      const spanElement = screen.getByText(testText);
      expect(spanElement).toBeInTheDocument();
      expect(spanElement.tagName).toBe("SPAN");
    });
  });

  describe("Edge cases", () => {
    it("Should render empty string text", () => {
      // Arrange

      // Act
      render(<Text text="" />);

      // Assert
      const textElement = screen.getByTestId(DATA_TEST_ID.TEXT);
      expect(textElement).toBeInTheDocument();
      expect(textElement.tagName).toBe("SPAN");
    });

    it("Should render text with special characters", () => {
      // Arrange
      const testText = "Text with special chars: !@#$%^&*()";

      // Act
      render(<Text text={testText} />);

      // Assert
      const textElement = screen.getByText(testText);
      expect(textElement).toBeInTheDocument();
      expect(textElement.tagName).toBe("SPAN");
    });

    it("Should render text with numbers", () => {
      // Arrange
      const testText = "12345";

      // Act
      render(<Text text={testText} />);

      // Assert
      const textElement = screen.getByText(testText);
      expect(textElement).toBeInTheDocument();
      expect(textElement.tagName).toBe("SPAN");
    });

    it("Should render text with long content", () => {
      // Arrange
      const longText =
        "This is a very long text that should be rendered properly by the Text component. It contains multiple sentences and should test the component's ability to handle longer content without any issues.";

      // Act
      render(
        <Text
          text={longText}
          variant="p"
        />
      );

      // Assert
      const paragraphElement = screen.getByText(longText);
      expect(paragraphElement).toBeInTheDocument();
      expect(paragraphElement.tagName).toBe("P");
    });
  });

  describe("Multiple components", () => {
    it("Should render multiple Text components with different variants", () => {
      // Arrange

      // Act
      render(
        <div>
          <Text
            text="Heading"
            variant="h1"
          />
          <Text
            text="Paragraph"
            variant="p"
          />
          <Text
            text="Span"
            variant="span"
          />
        </div>
      );

      // Assert
      expect(screen.getByText("Heading").tagName).toBe("H1");
      expect(screen.getByText("Paragraph").tagName).toBe("P");
      expect(screen.getByText("Span").tagName).toBe("SPAN");
    });
  });
});
