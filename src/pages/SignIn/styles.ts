import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #6548a3;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 50%;
`;

export const ImageFront = styled.Image`
  margin-top: 100px;
  margin-left: 36px;
  height: 304px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #ff6680;
  font-family: Rubik-Regular;
  margin-left: 40px;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #edebf5;
  font-family: Roboto-Regular;
  margin-left: 40px;
  margin-right: 40px;
  line-height: 25px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ff6680;
  height: 50px;
  border-radius: 50px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-family: Roboto-Regular;
  font-size: 15px;
`;
