import React, { useState } from 'react';
import { 
  Body, Container, Footer, ModalBackground, TitleCloseBtn,
  SliderContainer,
} from './styles';
import api from '../../services/api';
import Slider from '@mui/material/Slider';
import TouristPoint from '../TouristPoint';

const ReasultModal = ({ visible, setVisible, starting, destiny}) => {

  const [culture, setCulture] = useState(5); 
  const [fun, setFun] = useState(5); 
  const [nature, setNature] = useState(5);
  const [loading, setLoading] = useState(false);
  const [recomendations, setRecomendations] = useState([]);

  const closeModal = () => {
    setRecomendations([]);
    setVisible(false);
  }

  const handleChangeCulture = (event, newValue) => {
    setCulture(newValue);
  };

  const handleChangeFun = (event, newValue) => {
    setFun(newValue);
  };

  const handleChangeNature = (event, newValue) => {
    setNature(newValue);
  };

  const getReacomendation = async () => {
    setLoading(true);
    let arr = [
      {id: 1, value: culture },
      {id: 2, value: nature},
      {id: 3, value: fun }
    ];
    arr = arr.sort((a, b) => a.value - b.value)
    const data = {
      origin:  starting,
      destiny: destiny,
      recomendation: {1: arr[2].id, 2: arr[1].id, 3: arr[0].id} 
    }

    await api.post('recomendation', data)
      .then(({data}) => {
        console.log(data)
        setRecomendations(data.result)
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert('Ocorreu um erro ao tentar gerar a recomendação')
      }) 
  }

  const renderForm = () => (
    <Body>
      <p>
        O Trip irá te recomendar alguns pontos turísticos das capitais que você passará para alcançar o seu destino,
        para que você possa visitar durante a sua viagem. Para isso, precisamos que você pontue de 0 a 10, o quão
        essas características são importantes na hora de você considerar um ponto turístico para visitar.
      </p>
      <p>
        Cultura
      </p>
      <SliderContainer>
        <Slider
          aria-label="Cultura"
          onChange={handleChangeCulture}
          value={culture}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
        />
      </SliderContainer>
      <p>
        Diversão
      </p>
      <SliderContainer>
        <Slider
          aria-label="Diversão"
          onChange={handleChangeFun}
          value={fun}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
        />
      </SliderContainer>
      <p>
        Natureza
      </p>
      <SliderContainer>
        <Slider
          aria-label="Natureza"
          onChange={handleChangeNature}
          value={nature}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
        />
      </SliderContainer>
    </Body>
  );

  const renderRecomendation = () => (
    <Body>
      {recomendations.map((item) => 
        <TouristPoint 
          location={item[0]}
          item={item[1]}
          key={item.id}
        />
    ) }
    </Body>
  )

  return(
    <ModalBackground>
      <Container>
        <TitleCloseBtn>
        <button
            onClick={() => {
              closeModal();
            }}
          >
            X
          </button>
        </TitleCloseBtn>
        <h1>Recomendações de pontos turísticos</h1>
        {recomendations.length === 0 ? renderForm(): renderRecomendation()}
        {recomendations.length === 0 && <Footer>
          <button onClick={() => getReacomendation()}>
            Recomendar
          </button>
        </Footer>}
      </Container>
    </ModalBackground>
  );
}
export default ReasultModal;