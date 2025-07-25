import { CustomTheme } from "./themeTypes";

export const rushTheme: CustomTheme = {
  tokens: {
    colors: {
      "base-100": "rgb(239, 246, 255)",
      "base-200": "rgb(218, 233, 254)",
      "base-300": "rgb(189, 218, 254)",
      "base-content": "rgb(26, 54, 139)",

      primary: "rgb(19, 91, 249)",
      "primary-content": "rgb(255, 255, 255)",

      secondary: "rgb(140, 79, 255)",
      "secondary-content": "rgb(242, 240, 252)",

      accent: "rgb(78, 160, 255)",
      "accent-content": "rgb(255, 255, 255)",

      neutral: "rgb(42, 126, 255)",
      "neutral-content": "rgb(239, 246, 255)",

      info: "rgb(0, 186, 254)",
      "info-content": "rgb(4, 46, 73)",

      success: "rgb(1, 223, 114)",
      "success-content": "rgb(2, 45, 20)",

      warning: "rgb(249, 151, 0)",
      "warning-content": "rgb(66, 17, 4)",

      error: "rgb(255, 98, 102)",
      "error-content": "rgb(68, 6, 7)",
    },
    space: {
      "size-selector": "4px",
      "size-field": "4px",
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
