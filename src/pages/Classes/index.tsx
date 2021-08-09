import React, { useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { HeaderFavorite } from '../../components/HeaderFavorite';
import { PlayCourses } from '../../components/PlayCourses';

import {
  Container,
  ContainerClasses,
  TopoCourses,
  Title,
  Description,
  PlayVideo,
} from './styles';

interface RouteParams {
  classes: string;
  discipline: string;
}

export function Classes() {
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('ViewClass');
  }, [navigate]);

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
        <PlayCourses
          discipline="Introdução à teoria matemática"
          classes="Aula 01"
          time="5min"
          status="completo"
          onPress={handleNavigate}
        />
      </PlayVideo>
    </Container>
  );
}
