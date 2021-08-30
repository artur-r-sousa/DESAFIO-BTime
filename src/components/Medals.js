import React from 'react';
import { StyledItem } from '../styles';


export function getNumberOfMedals(country) {
    function renderMedals(gold, silver, bronze) {
      return (
        <StyledItem>
          {gold > 0 ? <p>Gold {gold}</p> : ''}
          {silver > 0 ? <p>Silver {silver}</p> : ''}
          {bronze > 0 ? <p>Bronze {bronze}</p> : ''}
        </StyledItem>
      )
    }
    const data = a[country];
    let gold = 0;
    let silver = 0;
    let bronze = 0;
    data.map((entry) => {
      switch(entry.medal) {
        case 'Gold':
          gold++;
          break;
        case 'Silver':
          silver++;
          break;
        case 'Bronze':
          bronze++;
          break;
        default: 
          console.error('unexpected behavior');
      }     
    }) 
    return renderMedals(gold, silver, bronze); 
  }