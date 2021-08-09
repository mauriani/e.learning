import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 50%;
`;

export const ImageFront = styled.Image`
  margin-top: 100px;
  margin-left: 36px;
  height: ${RFValue(304)}px;
`;
