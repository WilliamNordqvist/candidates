import React from "react";
import { TCandidate } from "../../context/candidateContext";
import { Form, FormContainer, Input } from "./formStyles";

export const CandidateForm: React.FC<{
  candidate: TCandidate;
  onInput: (key: string, value: string | number) => void;
  onSubmit: () => void;
  title:string;
}> = ({ candidate, onInput, onSubmit, title }) => {
  return (
    <FormContainer>
      <h1>{title}</h1>
      <Form onSubmit={onSubmit}>
        <Input
          autoFocus={true}
          onChange={(e) => onInput("name", e.target.value)}
          value={candidate.name}
          placeholder="Namn"
          required
        ></Input>
        <Input
          onChange={(e) => onInput("age", e.target.value)}
          value={candidate.age}
          placeholder="Ålder"
        ></Input>
        <Input
          onChange={(e) => onInput("email", e.target.value)}
          value={candidate.email}
          placeholder="Email"
        ></Input>
        <Input
          onChange={(e) => onInput("address", e.target.value)}
          value={candidate.address}
          placeholder="Address"
        ></Input>
      </Form>
    </FormContainer>
  );
};
