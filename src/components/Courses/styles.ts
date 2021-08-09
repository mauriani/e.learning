import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const Card = styled(RectButton)`
  width: ${RFValue(156)}px;
  height: ${RFValue(172)}px;

  border-radius: 16px;
  background: ${({ theme }) => theme.colors.shape};

  padding: 25px;
  margin-bottom: 18px;

  flex-direction: row;
  justify-content: space-between;

  margin: ${RFValue(4)}px; ;
`;

export const CardInfo = styled.View``;

export const RemoveButton = styled.View``;

export const Remove = styled(Feather)`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.inputs};
`;

export const Image = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.base};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;

  margin-top: 25px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.inputs};
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: ${RFValue(10)}px;

  margin-top: 4px;
`;
