import { ThemeContext } from "@/components/ui/ThemeProvider/ThemeProvider";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
};
