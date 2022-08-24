import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
//https://coolors.co/palette/006d77-83c5be-edf6f9-ffddd2-e29578



const color = {
    primary:'#006D77',
    secondary:'#E29578',
    background:'#EDF6F9',
    primaryLight:'#83C5BE',
    secondaryLight:'#FFDDD2',
}

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider
      theme={color}
    >
      {children}
    </ThemeProvider>
  );
};
