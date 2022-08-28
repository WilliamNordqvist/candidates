import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/button/button";
import { CandidateForm } from "../../components/form/form";
import {
  RecruiterStage,
  TCandidate,
  useCandidates,
} from "../../context/candidateContext";
import { Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const Add: React.FC = () => {
  const [candidate, setCandidate] = useState<TCandidate>({
    name: "",
    age: "",
    email: "",
    address: "",
    stage: RecruiterStage.CONTACT,
    notes: null,
    id: new Date().getTime(),
  });
  const navigate = useNavigate();
  const { addCandidate } = useCandidates();

  const onInput = (key: string, value: string | number) => {
    setCandidate({
      ...candidate,
      [key]: value,
    });
  };

  const onSubmit = () => {
    addCandidate(candidate);
    navigate("/");
  };

  return (
    <Box height={"100%"}>
      <Box position="absolute" top="10px" left="0">
        <Button buttontype="icon" onClick={() => navigate("/")}>
          <ArrowBack />
        </Button>
      </Box>
      <FlexWrapper>
        <CandidateForm
          title="Lägg till"
          onSubmit={onSubmit}
          onInput={onInput}
          candidate={candidate}
        />
        <Button disabled={!candidate.name} onClick={onSubmit}>
          Lägg till
        </Button>
      </FlexWrapper>
    </Box>
  );
};
