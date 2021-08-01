import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputText, Icon } from './styles';

interface Props extends TextInputProps {
  icon: string;
}

export function Input({ icon, ...rest }: Props) {
  return (
    <Container>
      <Icon name={icon} />
      <InputText {...rest} />
    </Container>
  );
}
