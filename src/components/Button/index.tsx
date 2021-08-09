import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Icon, Title } from './styles';

interface Props extends RectButtonProps {
  type: 'previous' | 'next';
  icon: string;
  title: string;
}

export function Button({ type, icon, title }: Props) {
  return (
    <Container type={type}>
      {icon == 'arrow-left' && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
      {icon == 'arrow-right' && <Icon name={icon} type={type} />}
    </Container>
  );
}
