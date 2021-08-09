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
  time: string;
  status: 'completo' | 'pendente';
  onPress: () => void;
}

export function PlayCourses({
  discipline,
  classes,
  time,
  status,
  onPress,
  ...rest
}: Props) {
  return (
    <Container>
      <Card onPress={onPress}>
        <Title>{discipline}</Title>
        <ClassData>
          <ClassText>{classes}</ClassText>

          <ClassTime>
            <IconTime name="clock" />
            <ClassText>{time}</ClassText>
          </ClassTime>

          <Status>
            <StatusText>
              {status === 'completo' ? 'Completo' : 'Pendente'}
            </StatusText>
          </Status>
        </ClassData>
      </Card>

      <Play>
        <Icon name="play-circle" />
      </Play>
    </Container>
  );
}
