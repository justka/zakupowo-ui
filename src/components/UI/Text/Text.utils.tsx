import { DATA_TEST_ID } from "constants/dataTestId";
import React from "react";

export function prepareText(text: React.ReactNode, variant: string) {
  const tagProps = { "data-testid": DATA_TEST_ID.TEXT };
  switch (variant) {
    case "h1": {
      return <h1 {...tagProps}>{text}</h1>;
    }
    case "p": {
      return <p {...tagProps}>{text}</p>;
    }
    default: {
      return <span {...tagProps}>{text}</span>;
    }
  }
}
