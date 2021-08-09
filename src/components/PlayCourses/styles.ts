import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(326)}px;
  height: ${RFValue(100)}px;

  margin-left: 24px;
  margin-right: 24px;

  margin-bottom: 16px;
`;

export const Card = styled(RectButton)`
  flex: 1;
  width: ${RFValue(290)}px;
  height: ${RFValue(100)}px;
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 16px;

  position: absolute;
  margin-left: 36px;
`;

export const Title = styled.Text`
  padding: 16px 31px 16px 29px;

  margin-left: 24px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.base};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ClassData = styled.View`
  flex-direction: row;
  margin-left: 24px;

  padding-left: 24px;
`;

export const ClassText = styled.Text`
  color: ${({ theme }) => theme.colors.inputs};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ClassTime = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 17px;
`;

export const IconTime = styled(Feather)`
  margin-right: 5px;
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.inputs};
`;

export const Status = styled.View`
  align-items: center;
  justify-content: center;

  width: ${RFValue(63)}px;
  height: ${RFValue(16)}px;

  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 12px;
  margin-left: 66px;
`;
export const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: ${RFValue(10)}px;
`;

export const Play = styled.View`
  width: ${RFValue(68)}px;
  height: ${RFValue(68)}px;
  background-color: ${({ theme }) => theme.colors.tertiary};

  border-radius: 16px;

  margin-top: 16px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(34)}px;
  color: ${({ theme }) => theme.colors.shape};

  padding: 18px;
`;
