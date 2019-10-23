import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
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
  padding: 15px 20px;
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

export const Actions = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  elevation: 5px;
  /* shadowColor: #000;
  shadowOpacity: 0.05;
  shadowRadius: 2;
  shadowOffset: {
    width: 0,
    height: 2
  }; */
`;

export const ButtonImage = styled.Image``;

export const Empyt = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #666;
  text-align: center;
`;

export const MatchContainer = styled.View.attrs({

})`
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const MatchLogo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 60px;
`;

export const MatchAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 5px;
  border-color: #fff;
  margin: 30px 0;
`;

export const MatchName = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

export const MatchBio = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 10px;
  line-height: 24px;
  text-align: center;
  padding: 0 30px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const MatchClose = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  margin-top: 30px;
  text-align: center;
`;
