import { ArrowBack } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button/button";
import { CandidateForm } from "../../components/form/form";
import { TCandidate, useCandidates } from "../../context/candidateContext";
import { FlexWrapper } from "../Add/Add";

export const Edit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { candidates, updateCandidate, deleteCandidate } = useCandidates();

  const [candidate, setCandidate] = useState<TCandidate>();

  useEffect(() => {
    if (candidates) {
      const match = candidates.find(
        (person) => Number(person.id) === Number(id)
      );
      match ? setCandidate(match) : navigate("../");
    }
  }, [candidates, id, navigate]);

  if (!candidate) return <p>Loading...</p>;

  const onInput = (key: string, value: string | number) => {
    setCandidate({
      ...candidate,
      [key]: value,
    });
  };

  const onSubmit = () => {
    updateCandidate(candidate);
    navigate(`/${id}`);
  };

  return (
    <>
      <Box position="absolute" top="10px" left="0">
        <Button buttontype="icon" onClick={() => navigate(`/${id}`)}>
          <ArrowBack />
        </Button>
      </Box>
      <FlexWrapper>
        <CandidateForm
          title="Redigera"
          onSubmit={onSubmit}
          onInput={onInput}
          candidate={candidate}
        />
        <Box display='flex'>
          <Button onClick={onSubmit}>Spara</Button>
          <Box component="span" width="10px" />
          <Button
            buttontype="secondary"
            onClick={() => deleteCandidate(candidate)}
          >
            Radera
          </Button>
        </Box>
      </FlexWrapper>
    </>
  );
};
