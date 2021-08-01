import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  position: absolute;
  margin-top: ${RFPercentage(32)}px;

  background-color: ${({ theme }) => theme.colors.background};

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const TopoCourses = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 24px 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Description = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.details};
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
`;
