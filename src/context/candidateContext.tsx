import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import data from "../db.json";

export enum RecruiterStage {
  CONTACT = "kontakt",
  DIALOGUE = "dialog",
  INTERVIEW = "intervju",
  OFFER = "erbjudande",
  COMPLETED = "avslutad",
}
export type TNotes = {
  text:string,
  date:number,
  stage:RecruiterStage
}

export type TCandidate = {
  name: string;
  age: number | string;
  email: string;
  address: string;
  stage: RecruiterStage;
  notes: TNotes[] | null;
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
  updateCandidate: () => undefined,
  deleteCandidate: () => undefined,
}) as React.Context<{
  candidates?: TCandidate[];
  addCandidate: ((candidate: TCandidate) => void) | (() => void);
  updateCandidate: ((candidate: TCandidate) => void) | (() => void);
  deleteCandidate: ((candidate: TCandidate) => void) | (() => void);
}>;

const mockedData = data as TCandidate[];
export const CandidateContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [candidates, setCandidates] = useState<TCandidate[] | undefined>();
  const navigate = useNavigate()

  useEffect(() => {
    setCandidates(mockedData);
  }, []);

  const addCandidate = (candidate: TCandidate) => {
    setCandidates([...(candidates || []), candidate]);
  };
  const updateCandidate = (candidate: TCandidate) => {
    if (candidates) {
      const newArr = candidates.filter((can) => can.id !== candidate.id);
      setCandidates([...newArr, candidate]);
    }
  };
  const deleteCandidate = (candidate: TCandidate) => {
    if (candidates) {
      const newArr = candidates.filter((can) => can.id !== candidate.id);
      setCandidates([...newArr]);
      navigate('/')
    }
  };

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        addCandidate,
        updateCandidate,
        deleteCandidate,
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
