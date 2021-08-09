import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

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

export const Form = styled.View`
  margin-top: ${RFValue(-100)}px;
  width: 100%;
`;

export const Fields = styled.View`
  margin-right: 20px;
  margin-left: 20px;
`;
