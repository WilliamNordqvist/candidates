import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div<{ isSearch: boolean }>`
  display: flex;
  margin: 6% auto;
  width: 90%;
  max-width: 700px;
  border-bottom: 2px solid
    ${({ theme, isSearch }) => (isSearch ? theme.secondary : theme.primary)};
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  ::placeholder {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Select = styled.select`
  width: 30%;
  background: transparent;
  border: none;
  font-family: Raleway;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  font-size: 16px;
`;

export const ClearInput = styled(ClearIcon)`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  margin-left: 5px;
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
