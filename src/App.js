import React from 'react';
import medalists from './assets/medalists';
import { addPerson } from './redux/actions/person.actions';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RenderRanking from './components/RenderRanking';
import MedalistInfoByCountry from './components/MedalistInfoByCountry';
import { StyledRanking, StyledRankingTitle, StyledItem, StyledBackground, StyleImg } from './styles';
import bannerImg from './assets/banner_olympics_logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
 
function App() {
  const people = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState('Choose a Country');
  //start data in redux
  useEffect(() => {
    medalists.map((value) => {
        dispatch(addPerson(value));
        return value;
    });
  });
  //order data based on countries...
  let a = {}
  people.map((value) => {
      return typeof a[value.country] !== 'undefined' ? a[value.country] = [...Object.values(a[value.country]), value] : a[value.country] = [value];
  });

  //...then sort them based on total number of medals won
  let b = [];
  b = Object.entries(a);
  b.sort((a, b) => (b[1].length - a[1].length));
  return (
    <StyledBackground className="App">
      <header className="App-header">
        <StyleImg alt='logo' src={bannerImg}></StyleImg>
      </header>
      <div style={{ display: 'block', 
                    width: 700, 
                    padding: 30 }}>
        <Dropdown>
          <Dropdown.Toggle variant="success">
            {selectedCountry}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='#' onClick={() => {setSelectedCountry('Choose a Country')}}>Back</Dropdown.Item>
          {b.map((value) => {
              return <div>
                        <Dropdown.Item href='#' onClick={() => {setSelectedCountry(value[0])}}>
                          {value[0]}
                        </Dropdown.Item>
                      </div>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <ul>
        {selectedCountry === 'Choose a Country' ? 
          <section>
            <StyledRankingTitle>
              Ranking de Medalhas
            </StyledRankingTitle>
            <RenderRanking b={b}></RenderRanking>
            
          </section>
          :
          <h1>
            Medalhas ganhas por {selectedCountry} 
            <MedalistInfoByCountry country={a[selectedCountry]}/>
          </h1>
        }
        </ul>
        
      </div>
      
    </StyledBackground> 
  );
}

export default App;
