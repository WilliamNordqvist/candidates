import styled from "styled-components";
import { Stepper as MUIStepper } from "@mui/material";

export const Stepper = styled(MUIStepper)`
  && {
    circle {
      color: ${({ theme }) => theme.secondary};
    }
    .Mui-completed {
      color: ${({ theme }) => theme.primary};
    }
    text-transform: capitalize;
  }
`;

export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;
