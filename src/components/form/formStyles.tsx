import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 60%;
  background: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  margin-bottom: 35px;

  ::placeholder {
    color: ${({ theme }) => theme.primary};
  }
`;
