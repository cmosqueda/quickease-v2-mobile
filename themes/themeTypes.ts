type RGB = `rgb(${number}, ${number}, ${number})` | `#${string}`;

export type CustomTheme = {
  tokens: {
    colors: {
      [key: string]: RGB;
    };
    space?: {
      [key: string]: number | string;
    };
    radii?: {
      [key: string]: number | string;
    };
    borderWidths?: {
      [key: string]: number | string;
    };
    // Optional additional tokens
    shadows?: {
      [key: string]: string;
    };
    blur?: {
      [key: string]: string;
    };
    zIndices?: {
      [key: string]: number;
    };
  };
};
