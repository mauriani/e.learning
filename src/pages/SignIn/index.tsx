import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import LogoBackground from '../../assets/e.learning.png';
import Person from '../../assets/person.png';
import { Input } from '../../components/Input';

import { Container, Background, ImageFront } from './styles';

export function SignIn() {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <Container>
      <Background source={LogoBackground} resizeMode="cover">
        <ImageFront source={Person} resizeMode="cover" />
      </Background>

      <Input icon="user" />
      <Input icon="user" />
    </Container>
  );
}
