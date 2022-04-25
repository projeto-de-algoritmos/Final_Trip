import React, { useState } from 'react';
import { Body, Container, Footer, ModalBackground, TitleCloseBtn } from './styles';
import api from '../../services/api';
import Slider from '@mui/material/Slider';

const ReasultModal = ({ visible, setVisible, starting, destiny}) => {

  const [culture, setCulture] = useState(5); 
  const [fun, setFun] = useState(5); 
  const [nature, setNature] = useState(5);
  const [loading, setLoading] = useState(false);
  const [recomendations, setRecomendation] = useState([]);

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
      .then(({data}) => console.log(data))
      .catch(() => alert('Ocorreu um erro ao tentar gerar a recomendação')) 
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
      <div style={{width: '80%', alignSelf: 'center'}}>
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
      </div>
      <p>
        Diversão
      </p>
      <div style={{width: '80%', alignSelf: 'center'}}>
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
      </div>
      <p>
        Natureza
      </p>
      <div style={{width: '80%', alignSelf: 'center'}}>
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
      </div>
    </Body>
  );

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
        {renderForm()}
        <Footer>
          <button onClick={() => getReacomendation()}>
            Recomendar
          </button>
        </Footer>
      </Container>
    </ModalBackground>
  );
}
export default ReasultModal;