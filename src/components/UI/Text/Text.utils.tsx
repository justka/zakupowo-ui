import React from "react";

export function prepareText(text: React.ReactNode, variant: string) {
  switch (variant) {
    case "h1": {
      return <h1>{text}</h1>;
    }
    case "p": {
      return <p>{text}</p>;
    }
    default: {
      return <span>{text}</span>;
    }
  }
}
