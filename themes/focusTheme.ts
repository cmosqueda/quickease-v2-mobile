import { CustomTheme } from "./themeTypes";

export const focusTheme: CustomTheme = {
  tokens: {
    colors: {
      "base-100": "rgb(237, 247, 253)",
      "base-200": "rgb(223, 242, 254)",
      "base-300": "rgb(184, 230, 254)",
      "base-content": "rgb(1, 74, 112)",
      primary: "rgb(0, 208, 239)",
      "primary-content": "rgb(239, 246, 255)",
      secondary: "rgb(255, 159, 160)",
      "secondary-content": "rgb(68, 6, 7)",
      accent: "rgb(0, 130, 206)",
      "accent-content": "rgb(235, 253, 254)",
      neutral: "rgb(1, 74, 112)",
      "neutral-content": "rgb(237, 247, 253)",
      info: "rgb(0, 186, 254)",
      "info-content": "rgb(5, 51, 68)",
      success: "rgb(1, 223, 114)",
      "success-content": "rgb(2, 45, 20)",
      warning: "rgb(252, 183, 0)",
      "warning-content": "rgb(67, 23, 0)",
      error: "rgb(254, 28, 85)",
      "error-content": "rgb(77, 2, 24)",
    },
    space: {
      sizeSelector: "4px",
      sizeField: "4px",
    },
    radii: {
      selector: "16px",
      field: "16px",
      box: "16px",
    },
    borderWidths: {
      DEFAULT: "1px",
    },
  },
};
