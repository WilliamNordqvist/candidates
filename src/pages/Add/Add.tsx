import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${({ theme }) => theme.main};
`;

export const Add: React.FC = () => {
  return (
    <div>
      <H1>ADD PAGE</H1>
      <Button variant="contained">Contained</Button>
    </div>
  );
};
