import React from 'react';

import { Container, TopoCourses, Title, Description } from './styles';

interface Props {
  title: string;
  description?: string;
}

export function ContainerCoursesTopo({ title, description }: Props) {
  return (
    <Container>
      <TopoCourses>
        <Title>{title}</Title>

        <Description>{description}</Description>
      </TopoCourses>
    </Container>
  );
}
