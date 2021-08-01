import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(267)}px;
`;

export const Topo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + RFValue(14)}px;

  padding: 24px;
  margin-bottom: 24px;
`;

export const Image = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(23)}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Rsearch = styled.View`
  flex: 1;
  width: 100%;

  padding-left: 21px;
  padding-right: 21px;
`;
