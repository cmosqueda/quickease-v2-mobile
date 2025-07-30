"use client";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider } from "../gluestack-ui-provider";

// theme type
type Theme = "light" | "dark";

// theme contxt type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// theme context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// theme provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    (async () => {
      const savedTheme = (await AsyncStorage.getItem("theme")) as Theme | "light";
      if (savedTheme) {
        setTheme(savedTheme);
        AsyncStorage.setItem("theme", savedTheme);
        // logs saved theme
        console.log(savedTheme);
      }
    })();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    AsyncStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <SafeAreaProvider>
          <SafeAreaView className="flex-1" edges={["right", "bottom", "left"]}>
            <GluestackUIProvider>{children}</GluestackUIProvider>
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeContext.Provider>
    </>
  );
};
