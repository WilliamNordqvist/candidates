import React, { ReactNode } from "react";
import { Button as MUIButton } from "@mui/material";
import styled, { css } from "styled-components";

type TButton = {
  onClick: () => void;
  buttontype?: "primary" | "secondary" | "delete";
  children: ReactNode;
};

const StyledButton = styled(MUIButton)<{
  buttontype: "primary" | "secondary" | "delete";
}>`
  && {
    width:250px;
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
    /* ${({ buttontype, theme }) =>
      buttontype === "delete" &&
      css`
        background: ${theme.color.deleteButtonColor};
        color: ${theme.color.deleteButtonTextColor};
        &:hover {
          background: ${theme.color.deleteButtonColor};
          color: ${theme.color.deleteButtonTextColor};
        }
      `} */
  }
`;

export const Button: React.FC<TButton> = ({
  children,
  onClick,
  buttontype = "primary",
}) => {
  return (
    <StyledButton
      buttontype={buttontype}
      onClick={onClick}
      fullWidth
      variant="contained"
    >
      {children}
    </StyledButton>
  );
};
