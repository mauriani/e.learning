import React from 'react';

import { Container, Topo, Image, LogoutButton, Icon, Rsearch } from './styles';

import { Input } from '../Input';

import logo from '../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <Topo>
        <Image source={logo} />
        <LogoutButton onPress={() => {}}>
          <Icon name="power" />
        </LogoutButton>
      </Topo>
      <Rsearch>
        <Input placeholder="Busque um curso" icon="search" />
      </Rsearch>
    </Container>
  );
}
