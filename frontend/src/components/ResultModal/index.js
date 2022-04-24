import React, { useEffect, useState } from 'react';
import { Body, Container, Footer, ModalBackground, TitleCloseBtn } from './styles';
import Slider from '@mui/material/Slider';

const ReasultModal = ({ visible, setVisible, output}) => {

  const [culture, setCulture] = useState(5); 

  const handleChange = (event, newValue) => {
    setCulture(newValue);
  };

  useEffect(()=> { console.log(culture)}, [culture])

  return(
    <ModalBackground>
      <Container>
        <TitleCloseBtn>
        <button
            onClick={() => {
              setVisible(false);
            }}
          >
            X
          </button>
        </TitleCloseBtn>
        <h1>Recomendações de pontos turísticos</h1>
        <Body>
          <p>
            O Trip irá te recomendar alguns pontos turísticos das capitais que você passará para alcançar o seu destino,
            para que você possa visitar durante a sua viagem. Para isso, precisamos que você pontue de 0 a 10, o quão
            essas características são importantes na hora de você considerar um ponto turístico para visitar.
          </p>
          <p>
            Cultura
          </p>
          <div style={{width: '80%', alignSelf: 'center'}}>
            <Slider
              aria-label="Temperature"
              onChange={handleChange}
              value={culture}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
            />
          </div>
          <p>
            Diversão
          </p>
          <p>
            Natureza
          </p>

        </Body>
        <Footer>
        <button
            onClick={() => {
              setVisible(false);
            }}
            id="cancelBtn"
          >
            Fechar
          </button>
        </Footer>
      </Container>
    </ModalBackground>
  );
}
export default ReasultModal;