import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { colorSchema } from "../assets/styleSchema";
import useThemeToggle from "../hooks/ThemeToggleHook";
import { contextProviderProps } from "./types";

type themeType = "dark" | "light";

type contextType = {
  theme: themeType;
  toggleAppTheme: () => void;
};

///////////////////////////////

///////////////////////////////
///////////////////////////////
export const ThemeContext = createContext<contextType | null>(null);

export default function ThemeContextProvider({
  children,
}: contextProviderProps) {
  const { theme, toggleAppTheme } = useThemeToggle();

  const colorTheme = colorSchema[theme];
  //? ThemeProvider provides theme access for 'styled-components' lib
  return (
    <ThemeContext.Provider value={{ theme, toggleAppTheme }}>
      <ThemeProvider theme={colorTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
