import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider
      theme={{
        main: "green",
      }}
    >
      {children}
    </ThemeProvider>
  );
};
