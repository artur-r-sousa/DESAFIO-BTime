import React from "react";
import { StyleRankingFrame, StyledItem, StyledRanking } from '../styles';

function MedalistInfoByCountry({ country }) {
  return (
    <StyleRankingFrame>
      {country.map((value)=>{
        return <StyledItem>{value.athlete}, {value.event}, {value.medal}</StyledItem>         
      })}
    </StyleRankingFrame>
  )
}

export default MedalistInfoByCountry;

