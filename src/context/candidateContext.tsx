import React, { createContext, ReactNode, useContext } from "react";

enum RecruiterStep {
  CONTACT = "kontakt",
  DIALOGUE = "dialog",
  INTERVIEW = "intervju",
  OFFER = "erbjudande",
  COMPLETED = "avslutad",
}

type TCandidate = {
  name: string;
  age: number;
  email: string;
  address: string;
  step: RecruiterStep;
};

const CandidatesContext = createContext({
  candidates: undefined,
}) as React.Context<{ candidates?: TCandidate[] }>;

export const CandidateContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <CandidatesContext.Provider
      value={{
        candidates: [{
          name:'name',
          age:32,
          email:'email',
          address:'address',
          step:RecruiterStep.COMPLETED
        }],
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export const useCandidates = () => {
  const { candidates } = useContext(CandidatesContext);
  return candidates;
};
