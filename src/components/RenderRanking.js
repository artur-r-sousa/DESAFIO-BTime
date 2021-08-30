import React from 'react';
import { StyledList, StyledItem } from '../styles';
import { useSelector } from 'react-redux';
import getNumberOfMedals from './Medals';

export function RenderRanking() {
    const people = useSelector((state) => state.person);
    let a = {}
    people.map((value) => {
        return typeof a[value.country] !== 'undefined' ? a[value.country] = [...Object.values(a[value.country]), value] : a[value.country] = [value];
    });
    let b = [];
    b = Object.entries(a);
    b.sort((a, b) => (b[1].length - a[1].length));
    return b.map((value)=>{
        return <StyledList>
                    <StyledItem>{value[0]}</StyledItem> 
                    <StyledItem> {getNumberOfMedals(value[0])}</StyledItem>                 
                </StyledList> 

    });
}