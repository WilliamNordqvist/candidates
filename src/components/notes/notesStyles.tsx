import styled from "styled-components";

export const NotesContainer = styled.div`
  width: 100%;
  height: 80%;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextOutputContainer = styled.div`
  width: 100%;
  height: 90%;
  padding: 1%;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  overflow: scroll;
  margin-bottom: 2%;
`;

export const TextField = styled.textarea`
  width: 100%;
  max-width: 800px;
  height: 15%;
  border: 2px solid ${({ theme }) => theme.primary};
`;

export const P = styled.p`
text-transform:capitalize ;
margin:0;
`
