import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${RFValue(56)}px;

  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};

  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
`;
