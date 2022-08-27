import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Button } from "../../components/button/button";
import { Card } from "../../components/card/card";
import { recruiterStages, useCandidates } from "../../context/candidateContext";
import {
  Input,
  Select,
  ClearInput,
  InputWrapper,
  FlexWrapper,
  PageWrapper,
} from "./AppStyle";

export const App: React.FC = () => {
  const { candidates } = useCandidates();
  const [searchWord, setSearchWord] = useState("");
  const [selectedStage, setSelectedStage] = useState<string | undefined>(
    undefined
  );
  const [searchCandidates, setSearchCandidates] = useState(candidates);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchWord.length <= 0 && !selectedStage) {
      setSearchCandidates(candidates);
      setSelectedStage(" ");
      return;
    }
    if (selectedStage === " ") {
      const searchResult = candidates?.filter((candidate) =>
        candidate.name
          .toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase())
      );
      setSearchCandidates(searchResult);
      return;
    }

    const searchResult = candidates
      ?.filter((candidate) =>
        candidate.name
          .toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase())
      )
      .filter((candidate) => candidate.stage === selectedStage);
    setSearchCandidates(searchResult);
    return;
  }, [candidates, searchWord, selectedStage]);

  if (!searchCandidates) {
    return <p>Loading</p>;
  }
  return (
    <>
      <PageWrapper>
        <Box width="100%">
          <InputWrapper isSearch={searchWord.length > 0}>
            <Input
              id="search"
              name="search"
              placeholder="SÖK"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />

            <Select
              onChange={(e) => setSelectedStage(e.target.value)}
              value={selectedStage}
              name="Stage"
              id="Stage"
            >
              <option hidden selected>
                FILTER
              </option>
              {recruiterStages.map((step) => (
                <option value={step}>{step}</option>
              ))}
            </Select>
            <ClearInput
              fontSize="small"
              onClick={() => setSelectedStage(" ")}
            />
          </InputWrapper>
          <FlexWrapper>
            {searchCandidates
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((candidate) => (
                <Link to={`/${candidate.id}`}>
                  <Card key={candidate.id} {...candidate} />
                </Link>
              ))}
          </FlexWrapper>
        </Box>
        <Box mt={10}>
          <Button onClick={() => navigate("/add")} buttontype="secondary">
            Lägg till
          </Button>
        </Box>
      </PageWrapper>
    </>
  );
};

// NO DEFAULT EXPORT
// export default App;
