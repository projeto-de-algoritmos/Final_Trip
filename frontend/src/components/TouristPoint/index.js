import React from 'react';
import { PointContainer, Image, Container, Separator } from './styles'

const TouristPoint = ({ item, location}) => {
  return (
    <Container>
      <h2>{item.name} - {location}</h2>
      <PointContainer>
        <Image src={item.image} alt="Imagem do ponto turistico"/>
        <div style={{width: '80%'}}>
          <p>{item.desc}</p>
        </div>
      </PointContainer>
      <Separator />
    </Container>
  )
}
export default TouristPoint;