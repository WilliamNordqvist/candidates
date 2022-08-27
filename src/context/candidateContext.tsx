import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
  age: number | string;
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
  addCandidate: () => undefined,
}) as React.Context<{
  candidates?: TCandidate[];
  addCandidate: ((candidate: TCandidate) => void )| (() => void);
}>;

const mockedData = data as TCandidate[];
export const CandidateContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [candidates, setCandidates] = useState<TCandidate[] | undefined>();

  useEffect(() => {
    setCandidates(mockedData);
  }, []);

  const addCandidate = (candidate:TCandidate) => {
    setCandidates([
      ...candidates || [],
      candidate
    ])
  }

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        addCandidate
  
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export const useCandidates = () => {
  const store = useContext(CandidatesContext);
  return store;
};
