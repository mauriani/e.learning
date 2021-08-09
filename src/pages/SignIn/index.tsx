import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import LogoBackground from '../../assets/e.learning.png';
import Person from '../../assets/person.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Form/Button';

import { Container, Background, ImageFront, Form, Fields } from './styles';

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
      <Form>
        <Fields>
          <Input icon="user" placeholder="Matrícula" />
          <Input icon="user" placeholder="Senha" />

          <Button title="Entrar" onPress={handleNavigate} />
        </Fields>
      </Form>
    </Container>
  );
}
