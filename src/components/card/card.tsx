import React from "react";
import { Avatar, Box, Card as MUICard, CardHeader } from "@mui/material";
import styled from "styled-components";
import { AvatarProfile } from "../svg/avatarProfile";
import { TCandidate } from "../../context/candidateContext";

const StyledCard = styled(MUICard)`
  width: 200px;
  padding-bottom: 25px;
  cursor: pointer;
  margin:5px;
  text-transform:capitalize ;
`;

const Circle = styled(Avatar)`
  && {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Card: React.FC<TCandidate> = ({ name, stage }) => {
  
  const [firstName, lastName] = name.split(" ")
  const initials = firstName[0] || '' + lastName[0] || ''
  return (
    <StyledCard>
      <CardHeader avatar={<Circle>{initials}</Circle>} title={name} subheader={stage} />
      <Box textAlign={"center"} m="auto" mb={0} width="35%">
        <AvatarProfile />
      </Box>
    </StyledCard>
  );
};
