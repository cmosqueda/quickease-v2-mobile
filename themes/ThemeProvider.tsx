// lazy loading

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import type { ThemeName } from "@/hooks/useTheme";
import { useThemeStore } from "@/hooks/useTheme";
import { vars } from "nativewind";
import { useEffect } from "react";
import { themeRegistry } from "./themeRegistry";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore((state) => state.theme) as ThemeName;

  useEffect(() => {
    // fallback
    const fallbackTheme = "rush";
    const selectedTheme = themeRegistry[theme] ?? themeRegistry[fallbackTheme];
    vars(selectedTheme);
  }, [theme]);

  //   use gluestack provider
  return (
    <>
      <GluestackUIProvider>{children}</GluestackUIProvider>
    </>
  );
};
