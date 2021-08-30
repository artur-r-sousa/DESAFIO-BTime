import React from "react";
import { StyleRankingFrame, StyledItem } from '../styles';

function MedalistInfoByCountry({ country }) {

  return (
    <StyleRankingFrame>
      {country.map((value)=>{
        return (
          <StyleRankingFrame>
            <StyledItem>{value.athlete}, {value.event}, {value.medal}</StyledItem>
          </StyleRankingFrame>
        )
      })}
    </StyleRankingFrame>
  )
}

export default MedalistInfoByCountry;

