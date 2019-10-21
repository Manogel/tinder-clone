import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  margin-top: 30px;
`;

export const CardContainer = styled.View`
  flex: 1;
  max-height: 500px;
  justify-content: center;
  align-self: stretch;
`;

export const Card = styled.View`
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Footer = styled.View`
  background: #fff;
  margin: 15px 20px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Bio = styled.Text.attrs({
  numberOflines: 3,
})`
  font-size: 14px;
  line-height: 18px;
  margin-top: 5px;
  color: #999;
`;

export const Actions = styled.View``;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const ButtonImage = styled.Image`
  border-radius: 25px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  elevation: 2px;
  /* shadowColor: #000;
  shadowOpacity: 0.05;
  shadowRadius: 2;
  shadowOffset: {
    width: 0,
    height: 2
  }; */
`;
