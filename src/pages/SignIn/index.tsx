import React from 'react';

import {
  Container,
  Background,
  ImageFront,
  Title,
  Description,
  Button,
  ButtonText,
} from './styles';

import LogoBackground from '../../assets/e.learning.png';
import Person from '../../assets/person.png';

import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <Container>
      <Background source={LogoBackground} resizeMode="cover">
        <ImageFront source={Person} resizeMode="cover" />
      </Background>

      <Title>Aprenda da melhor forma</Title>
      <Description>
        Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
      </Description>
      <Button onPress={handleNavigate}>
        <ButtonText>Começar os estudos</ButtonText>
      </Button>
    </Container>
  );
};

export default SignIn;
