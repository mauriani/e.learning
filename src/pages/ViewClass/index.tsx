import React from 'react';
import theme from '../../global/styles/theme';
import { HeaderFavorite } from '../../components/HeaderFavorite';
import { Button } from '../../components/Button';

import {
  Container,
  AreaVideo,
  InfoClass,
  Title,
  Details,
  NumberClassText,
  TimeClass,
  Icon,
  TimeText,
  Information,
  ContainerButtons,
} from './styles';

export function ViewClass() {
  return (
    <Container>
      <HeaderFavorite />

      <AreaVideo />

      <InfoClass>
        <Title>Introdução à teoria matemática</Title>

        <Details>
          <NumberClassText>Aula 01</NumberClassText>
          <TimeClass>
            <Icon name="clock" />
            <TimeText>5min</TimeText>
          </TimeClass>
        </Details>

        <Information>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus
          condimentum gravida. Aenean condimentum vehicula sapien, eleifend
          metus congue vel. Suspendisse vitae tellus eu lacus facilisis auctor
          nec tristique eros.
        </Information>

        <ContainerButtons>
          <Button type="previous" icon="arrow-left" title="Aula anterior" />
          <Button type="next" icon="arrow-right" title="Proxima aula" />
        </ContainerButtons>
      </InfoClass>
    </Container>
  );
}
