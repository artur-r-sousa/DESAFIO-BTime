import React from 'react';
import { StyledList, StyledItem } from '../styles';

import GetNumberOfMedals from './Medals';

export default function RenderRanking({ b }) { 
    return b.map((value)=>{
        return <StyledList>
                    <StyledItem>{value[0]}</StyledItem> 
                    <GetNumberOfMedals country={value[1]}/>                 
                </StyledList> 
    });
}