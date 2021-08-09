import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const AreaVideo = styled.View`
  height: ${RFValue(210)}px;
  background-color: ${({ theme }) => theme.colors.title};
`;

export const InfoClass = styled.ScrollView`
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  padding-left: 24px;
  padding-top: 24px;

  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Details = styled.View`
  margin-top: 17px;

  flex-direction: row;

  padding-left: 24px;
`;
export const NumberClassText = styled.Text`
  color: ${({ theme }) => theme.colors.inputs};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const TimeClass = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 18px;
`;

export const Icon = styled(Feather)`
  margin-right: 5px;
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.inputs};
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.colors.inputs};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Information = styled.Text`
  color: ${({ theme }) => theme.colors.base};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.robotoRegular};

  margin-top: 25px;

  padding-left: 25px;
  padding-right: 25px;

  line-height: 25px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 30px;

  margin-left: 24px;
  margin-right: 24px;
`;
