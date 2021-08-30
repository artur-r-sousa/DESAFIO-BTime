import  medalists  from './assets/medalists';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from './redux/actions/person.actions';
import { StyleRankingFrame, StyledRanking, StyledRankingTitle, StyledList, StyledItem, StyledBackground, StyleImg } from './styles';
import bannerImg from './assets/banner_olympics_logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {

  const dispatch = useDispatch();
  const people = useSelector((state) => state.person);
  const [selectedCountry, setSelectedCountry] = useState('Choose a Country');
  //start data in redux
  useEffect(() => {
    medalists.map((value) => {
      dispatch(addPerson(value));
      return value;
    })
  })

  //order data based on countries...
  let a = {}
  people.map((value) => {
    return typeof a[value.country] !== 'undefined' ? a[value.country] = [...Object.values(a[value.country]), value] : a[value.country] = [value];
  });
  //...then sort them based on total number of medals won
  let b = [];
  b = Object.entries(a);
  b.sort((a, b) => (b[1].length - a[1].length));

  function getMedalistInfoByCountry(country){
    const data = a[country];
    return (
      <StyleRankingFrame>
        {data.map((value)=>{
          return (
            <StyleRankingFrame>
              <StyledItem>{value.athlete}, {value.event}, {value.medal}</StyledItem>
            </StyleRankingFrame>
          )
        })}
      </StyleRankingFrame>
    )
  }


  function getNumberOfMedals(country) {
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

  function renderRanking() {
    return b.map((value)=>{
      return <StyledList>
                <StyledItem>{value[0]}</StyledItem> 
                <StyledItem> {getNumberOfMedals(value[0])}</StyledItem>                 
              </StyledList>

      })
  }
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
            <StyledRanking>{renderRanking()}</StyledRanking>
            
          </section>
          :
          <h1>
            Medalhas ganhas por {selectedCountry} 
            <h5>{getMedalistInfoByCountry(selectedCountry)}</h5>
          </h1>
        }
        </ul>
        
      </div>
      
    </StyledBackground> 
  );
}

export default App;
