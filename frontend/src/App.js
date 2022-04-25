import { VectorMap } from '@south-paw/react-vector-maps';
import React, { useState } from 'react';
import BrMap from './map/brMap';
import { Container, Map, MapContainer } from './styles';
import Sidebar from './components/SideBar';
import ReasultModal from './components/ResultModal';

const App = () => {

  const [focused, setFocused] = useState('None');
  const [starting, setStarting] = useState('None');
  const [destiny, setDestiny] = useState('None');
  const [modal, setModal] = useState(false);

  const layerProps = {
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onClick: ({ target }) => {
      const id = target.attributes.id.value;

      if (starting === 'None') {
        setStarting(id);
      } else if (destiny === 'None') {
        setDestiny(id);
      } else {
        setStarting(id);
        setDestiny('None');
      }
    }
  };

  const openModal = () => {
    if(starting === 'None' || destiny === 'None'){
      alert('Selecione os países');
      return;
    }
    setModal(true);
  }

  return (
    <Container>
      {modal && <ReasultModal 
        visible={modal}
        setVisible={setModal}
        starting={starting}
        destiny={destiny}
      />}
      <Sidebar
        starting={starting}
        setStarting={setStarting}
        destiny={destiny}
        setDestiny={setDestiny}
        openModal={openModal}
      />
      <MapContainer>
        <Map>
          <VectorMap {...BrMap} layerProps={layerProps} checkedLayers={[starting, destiny]} />
        </Map>
      </MapContainer>
    </Container >
  );
}

export default App;
