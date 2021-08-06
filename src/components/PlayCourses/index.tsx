import React from 'react';
import {
  Container,
  Card,
  ClassData,
  ClassText,
  ClassTime,
  Status,
  StatusText,
  Title,
  Play,
  Icon,
  IconTime,
} from './styles';

interface Props {
  discipline: string;
  classes: string;
}

export function PlayCourses() {
  return (
    <Container>
      <Card>
        <Title>Introdução à teoria matemática</Title>
        <ClassData>
          <ClassText>Aula 01</ClassText>

          <ClassTime>
            <IconTime name="clock" />
            <ClassText>5min</ClassText>
          </ClassTime>

          <Status>
            <StatusText>Completo!</StatusText>
          </Status>
        </ClassData>
      </Card>

      <Play>
        <Icon name="play-circle" />
      </Play>
    </Container>
  );
}
