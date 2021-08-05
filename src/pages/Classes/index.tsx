import React from 'react';

import { HeaderFavorite } from '../../components/HeaderFavorite';

import {
  Container,
  ContainerClasses,
  TopoCourses,
  Title,
  Description,
  Card,
  TitleClasses,
} from './styles';

export function Classes() {
  return (
    <Container>
      <HeaderFavorite />
      <ContainerClasses>
        <TopoCourses>
          <Title>Matemática</Title>
          <Description>16 Aulas</Description>
        </TopoCourses>
      </ContainerClasses>

      <Card>
        <TitleClasses>Introdução à teoria matemática</TitleClasses>
      </Card>
    </Container>
  );
}
