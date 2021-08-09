import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Topo, GoBack, Image, ButtonFavorite, Icon } from './styles';

import logo from '../../assets/logo.png';
import { useState } from 'react';

export function HeaderFavorite() {
  const [save, setSave] = useState(false);
  const { goBack } = useNavigation();

  const handleNavigate = useCallback(() => {
    goBack();
  }, [goBack]);

  function handleSaveCourses() {}

  return (
    <Container>
      <Topo>
        <GoBack onPress={handleNavigate}>
          <Icon name="arrow-back" />
        </GoBack>

        <Image source={logo} />
        <ButtonFavorite onPress={handleSaveCourses}>
          {save == true ? <Icon name="heart" /> : <Icon name="heart-outline" />}
        </ButtonFavorite>
      </Topo>
    </Container>
  );
}
