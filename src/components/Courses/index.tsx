import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  Container,
  Card,
  CardInfo,
  RemoveButton,
  Remove,
  Image,
  Title,
  SubTitle,
} from './styles';

type PropsImage = ImageSourcePropType;

export interface PropsCourses {
  discipline: string;
  classes: string;
  imageDiscipline: PropsImage;
  icon?: string;
}

interface Props {
  data: PropsCourses;
  onPress: () => void;
}

export function Courses({ onPress, data }: Props) {
  return (
    <Container>
      <Card onPress={onPress}>
        <CardInfo>
          <Image source={data.imageDiscipline} />
          <Title>{data.discipline}</Title>
          <SubTitle>{data.classes}</SubTitle>
        </CardInfo>

        {data.icon && (
          <RemoveButton>
            <Remove name={data.icon} />
          </RemoveButton>
        )}
      </Card>
    </Container>
  );
}
