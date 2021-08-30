import styled from 'styled-components';
import blurry from './assets/blurry.svg';

export const StyleRankingFrame = styled.div`
    margin-bottom: 30px;
`

export const StyledBackground = styled.div`
    color: black;
    height: fit-content;
    width: 100vw;
` 
export const StyledList = styled.li`
    border-width: 5px;
    list-style-type: none;
    width: 30vw;
    display: block;
    border-style: solid;
    border-color: antiquewhite;
    border-width: 1px;
    border-radius: 15px;
    padding-top: 25px;
    padding-left: 25px;  
`

export const StyledItem = styled.p`
    font-size: medium;
    font-weight: 400;
    padding: 0px;
    margin-bottom: 10px;
    margin-right: 50px;
`

export const StyledRanking = styled.p`
    display: grid;
    position: relative;
    justify-items: center;
    flex-direction: row;
    margin-left: 50px;
    margin-bottom: 50px;
    grid-template-rows: 200px 200px 200px 200px;
    grid-row-gap: 50px;
    grid-template-columns: 2fr 2fr;
    width: 80vw;  
`

export const StyledRankingTitle = styled.section`
    margin-top: 3vh;
    margin-bottom: 3vh;
`
export const StyleImg = styled.img`
    width: 90vw;
    align-self: center;
    position: fixed;
`
