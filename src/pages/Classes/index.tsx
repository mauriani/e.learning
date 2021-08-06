import React from 'react';
import { useRoute } from '@react-navigation/native';
import { HeaderFavorite } from '../../components/HeaderFavorite';

import {
  Container,
  ContainerClasses,
  TopoCourses,
  Title,
  Description,
  PlayVideo,
} from './styles';
import { PlayCourses } from '../../components/PlayCourses';

interface RouteParams {
  classes: string;
  discipline: string;
}

export function Classes() {
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  return (
    <Container>
      <HeaderFavorite />
      <ContainerClasses>
        <TopoCourses>
          <Title>{routeParams.discipline}</Title>
          <Description>{routeParams.classes}</Description>
        </TopoCourses>
      </ContainerClasses>

      <PlayVideo>
        <PlayCourses />
        <PlayCourses />
        <PlayCourses />
        <PlayCourses />
      </PlayVideo>
    </Container>
  );
}
