import React from "react";
import { TNotes } from "../../context/candidateContext";
import { NotesContainer, P, TextField, TextOutputContainer } from "./notesStyles";
import { format } from 'date-fns'

type NoteComponen = {
    notes: TNotes[] | null,
    onChange:(e:string) => void;
    value:string;
}

export const Notes: React.FC<NoteComponen> = ({ notes, onChange, value }) => {  
  return (
    <NotesContainer>
      <TextOutputContainer>
        {notes &&
          notes.map(({ date, stage, text }, index) => (
            <div key={index}>
              <P>
                <b>{format(date, 'yyyy-MM-dd')}</b>
              </P>
              <P>{stage}</P>
              <p>{text}</p>
            </div>
          ))}
      </TextOutputContainer>
      <TextField value={value} onChange={(e) => onChange(e.target.value)} />
    </NotesContainer>
  );
};
