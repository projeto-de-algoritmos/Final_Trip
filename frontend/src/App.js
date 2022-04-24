import { VectorMap } from '@south-paw/react-vector-maps';
import React, { useEffect, useState } from 'react';
import BrMap from './map/brMap';
import { Container, Map, MapContainer } from './styles';
import Solution from './graph/Solution';
import Sidebar from './components/SideBar';
import ReasultModal from './components/ResultModal';

const App = () => {

  const [focused, setFocused] = useState('None');
  const [output, setOutput] = useState('None');
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

  useEffect(() => {
    if(starting === 'None' && destiny === 'None'){
      setOutput('Selecione os estados');
      return;
    }
    if (starting && destiny) {
      try {
        const result = Solution.question(starting, destiny);
        setOutput(result);
      } catch {}
    }

  }, [starting, destiny]);

  return (
    <Container>
      {modal && <ReasultModal 
        visible={modal}
        setVisible={setModal}
        output={output}
      />}
      <Sidebar
        starting={starting}
        setStarting={setStarting}
        destiny={destiny}
        setDestiny={setDestiny}
        openModal={() => setModal(true)}
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
