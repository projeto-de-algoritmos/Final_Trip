import React from 'react';
import { PointContainer, Image, Container, Separator } from './styles'

const TouristPoint = ({ item }) => {
  return (
    <Container>
      <h2>{item.name}</h2>
      <PointContainer>
        <Image src={item.image} alt="Imagem do ponto turistico"/>
        <h4>{item.desc}</h4>
      </PointContainer>
      <Separator />
    </Container>
  )
}
export default TouristPoint;