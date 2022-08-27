import React, { ReactNode } from "react";
import { Button as MUIButton } from "@mui/material";
import styled, { css } from "styled-components";

type TButton = {
  onClick: () => void;
  buttontype?: "primary" | "secondary" | "icon";
  children: ReactNode;
  disabled?: boolean;
};

const StyledButton = styled(MUIButton)<{
  buttontype: "primary" | "secondary" | "icon";
}>`
  && {
    width: 250px;
    ${({ buttontype, theme }) =>
      buttontype === "primary" &&
      css`
        background: ${theme.primary};
        color: ${theme.background};
        &:hover {
          background: ${theme.primary};
          color: ${theme.background};
        }
      `}
    ${({ buttontype, theme }) =>
      buttontype === "secondary" &&
      css`
        background: ${theme.secondary};
        color: ${theme.background};
        &:hover {
          background: ${theme.secondary};
          color: ${theme.background};
        }
      `}
    ${({ buttontype, theme, disabled }) =>
      buttontype === "icon" &&
      css`
        width: auto;
        box-shadow: none;
        border: none;
        background: transparent;
        &:hover {
          background: transparent;
          box-shadow: none;
        }
        svg {
          color: ${disabled ? theme.primaryLight : theme.primary};
        }
      `}
      @media only screen and (max-width: 600px) {
      width: 100px;
    }
  }
`;

export const Button: React.FC<TButton> = ({
  children,
  onClick,
  buttontype = "primary",
  disabled = false,
}) => {
  return (
    <StyledButton
      buttontype={buttontype}
      onClick={onClick}
      fullWidth
      variant="contained"
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
