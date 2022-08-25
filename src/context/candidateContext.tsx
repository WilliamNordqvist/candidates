import React, { createContext, ReactNode, useContext } from "react";
import data from "../db.json";

export enum RecruiterStep {
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
  id: number;
};

export const recruiterSteps: RecruiterStep[] = [
  RecruiterStep.CONTACT,
  RecruiterStep.DIALOGUE,
  RecruiterStep.INTERVIEW,
  RecruiterStep.OFFER,
  RecruiterStep.COMPLETED,
];

const CandidatesContext = createContext({
  candidates: undefined,
}) as React.Context<{ candidates?: TCandidate[] }>;

const mockedData = data as TCandidate[];
export const CandidateContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <CandidatesContext.Provider
      value={{
        candidates: mockedData,
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
