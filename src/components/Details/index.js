import React, { Component } from 'react';

import {
  Container,
  TypeTitle,
  TyperDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from './styles'

import uberx from '../../assets/uberx.png'

export default class Details extends Component {
  render(){
    return <Container>
      <TypeTitle>Popular</TypeTitle>
      <TyperDescription>Viagens baratas para o dia a dia</TyperDescription>

      <TypeImage source={uberx} />
      <TypeTitle>UberX</TypeTitle>
      <TyperDescription>R$6,00</TyperDescription>

      <RequestButton onPress={() => {}}>
        <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
      </RequestButton>
    </Container>
  }
}