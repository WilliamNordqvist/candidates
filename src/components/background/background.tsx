import React, { ReactNode } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

const FullPage = styled(Box)`
  background: ${({ theme }) => theme.background};
  height: 100vh;
  width: 100vw;
  overflow: auto;
  padding: 20px;
`;

const CenterPage = styled.div`
  height: 100%;
  margin: auto;
  max-width: 1200px;
`;

export const Background: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <FullPage>
      <CenterPage>{children}</CenterPage>
    </FullPage>
  );
};
