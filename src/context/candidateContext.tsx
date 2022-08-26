import React, { createContext, ReactNode, useContext } from "react";
import data from "../db.json";

export enum RecruiterStage {
  CONTACT = "kontakt",
  DIALOGUE = "dialog",
  INTERVIEW = "intervju",
  OFFER = "erbjudande",
  COMPLETED = "avslutad",
}

export type TCandidate = {
  name: string;
  age: number;
  email: string;
  address: string;
  stage: RecruiterStage;
  id: number;
};

export const recruiterStages: RecruiterStage[] = [
  RecruiterStage.CONTACT,
  RecruiterStage.DIALOGUE,
  RecruiterStage.INTERVIEW,
  RecruiterStage.OFFER,
  RecruiterStage.COMPLETED,
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
