import { Box, Step, StepLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  RecruiterStage,
  recruiterStages,
  TCandidate,
  useCandidates,
} from "../../context/candidateContext";
import { PageWrapper, Stepper, Title } from "./CandidateStyles";
import {
  ArrowBackIosNew as Back,
  ArrowForwardIos as Forward,
} from "@mui/icons-material";
import { Button } from "../../components/button/button";
import { ArrowBack, Settings } from "@mui/icons-material";
import { Notes } from "../../components/notes/notes";

export const Candidate: React.FC = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState<TCandidate>();
  const [newNote, setNewNote] = useState("");
  const { candidates, updateCandidate, deleteCandidate } = useCandidates();
  const navigate = useNavigate();

  useEffect(() => {
    if (candidates) {
      const matchedCandidate = candidates?.find(
        (person) => Number(person.id) === Number(id)
      );
      matchedCandidate ? setCandidate(matchedCandidate) : navigate("/");
    }
  }, [candidates, id, navigate]);
  if (!candidate) {
    return <p>LOADING</p>;
  }

  const currentStageIndex = recruiterStages.indexOf(candidate.stage);
  const isLastStage = candidate.stage === RecruiterStage.COMPLETED;
  const isFirstStage = candidate.stage === RecruiterStage.CONTACT;

  const stageModifier = (modifier: number) => {
    setCandidate({
      ...candidate,
      stage: recruiterStages[currentStageIndex + modifier],
    });
  };
  const onSave = () => {
    if (newNote !== "") {
      const { notes, stage } = candidate;
      updateCandidate({
        ...candidate,
        notes: notes
          ? [{ date: Date.now(), stage, text: newNote }, ...notes]
          : [{ date: Date.now(), stage, text: newNote }],
      });
      setNewNote("");
    } else {
      updateCandidate(candidate);
    }
  };
  return (
    <PageWrapper>
      <Box position="absolute" top="10px" left="0">
        <Button buttontype="icon" onClick={() => navigate("/")}>
          <ArrowBack />
        </Button>
      </Box>

      <Box position="absolute" top="10px" right="0">
        <Button buttontype="icon" onClick={() => navigate("edit")}>
          <Settings />
        </Button>
      </Box>

      <Box mt={3}>
        <Stepper activeStep={currentStageIndex + 1} alternativeLabel>
          {recruiterStages.map((stage) => (
            <Step key={stage}>
              <StepLabel>{stage}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Title>{candidate.name}</Title>

      <Notes
        value={newNote}
        onChange={(e) => setNewNote(e)}
        notes={candidate.notes}
      />

      <Box display="flex" justifyContent="space-between">
        <Button
          buttontype="icon"
          disabled={isFirstStage}
          onClick={() => stageModifier(-1)}
        >
          <Back fontSize="large" />
        </Button>
        <Box display="flex">
          <Button onClick={onSave}> SPARA </Button>
          {isLastStage && (
            <>
              <Box component="span" width="10px" />
              <Button
                buttontype="secondary"
                onClick={() => deleteCandidate(candidate)}
              >
                RADERA
              </Button>
            </>
          )}
        </Box>
        <Button
          buttontype="icon"
          disabled={isLastStage}
          onClick={() => stageModifier(+1)}
        >
          <Forward fontSize="large" />
        </Button>
      </Box>
    </PageWrapper>
  );
};
