import React, { useState } from "react";
import {
  recruiterSteps,
  useCandidates,
} from "../../context/candidateContext";
import { Input, Select, ClearInput, InputWrapper } from "./AppStyle";

export const App: React.FC = () => {
  const candidates = useCandidates();
  const [searchWord, setSearchWord] = useState("");
  const [selectedStage, setSelectedStage] = useState("");

  if(!candidates){
    return <p>Loading</p>
  }

  return (
    <div>
      <InputWrapper>
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
          {recruiterSteps.map((step) => (
            <option value={step}>{step}</option>
          ))}
        </Select>
        <ClearInput fontSize="small" onClick={() => setSelectedStage(" ")}/>
      </InputWrapper>
      {/* <Link to="/add">
        <h1>APP</h1>
      </Link> */}
    </div>
  );
};

// NO DEFAULT EXPORT
// export default App;
