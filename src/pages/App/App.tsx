import React, { useEffect, useState } from "react";
import { Button } from "../../components/button/button";
import { Card } from "../../components/card/card";
import { recruiterStages, useCandidates } from "../../context/candidateContext";
import {
  Input,
  Select,
  ClearInput,
  InputWrapper,
  FlexWrapper,
} from "./AppStyle";

export const App: React.FC = () => {
  const candidates = useCandidates();
  const [searchWord, setSearchWord] = useState("");
  const [selectedStage, setSelectedStage] = useState<string | undefined>(
    undefined
  );
  const [searchCandidates, setSearchCandidates] = useState(candidates);

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
      <InputWrapper isSearch={searchWord.length > 0}>
        <Input
          id="search"
          name="search"
          placeholder="SEARCH"
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
        <ClearInput fontSize="small" onClick={() => setSelectedStage(" ")} />
      </InputWrapper>
      {/* <Link to="/add">
        <h1>APP</h1>
      </Link> */}
      <FlexWrapper>
        {searchCandidates.map((candidate) => (
          <Card {...candidate}></Card>
        ))}
      </FlexWrapper>

      <Button buttontype="secondary" onClick={() => console.log('click')}>Add new</Button>
    </>
  );
};

// NO DEFAULT EXPORT
// export default App;
