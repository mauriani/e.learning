import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

interface ContainerProps {
  type: 'previous' | 'next';
}

export const Container = styled(RectButton)<ContainerProps>`
  width: ${RFValue(163)}px;
  height: ${RFValue(56)}px;

  flex-direction: row;
  justify-content: center;

  align-items: center;

  ${({ type }) =>
    type === 'next' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `}

  ${({ type }) =>
    type === 'previous' &&
    css`
      background-color: ${({ theme }) => theme.colors.background};
    `}

    border-radius: 40px;
`;

export const Title = styled.Text<ContainerProps>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.robotoRegular};

  ${({ type }) =>
    type === 'next' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}

  ${({ type }) =>
    type === 'previous' &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}

    padding: 18px;
`;

export const Icon = styled(Feather)<ContainerProps>`
  font-size: ${RFValue(20)}px;

  ${({ type }) =>
    type === 'next' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}

  ${({ type }) =>
    type === 'previous' &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}
`;
