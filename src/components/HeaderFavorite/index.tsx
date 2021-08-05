import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Topo, GoBack, Image, ButtonFavorite, Icon } from './styles';

import logo from '../../assets/logo.png';

export function HeaderFavorite() {
  const { goBack } = useNavigation();

  const handleNavigate = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Topo>
        <GoBack onPress={handleNavigate}>
          <Icon name="arrow-back" />
        </GoBack>

        <Image source={logo} />
        <ButtonFavorite onPress={() => {}}>
          <Icon name="heart-outline" />
        </ButtonFavorite>
      </Topo>
    </Container>
  );
}
