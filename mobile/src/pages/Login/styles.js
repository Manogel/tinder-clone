import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
export const Logo = styled.Image``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  height: 46px;
  background-color: #fff;
  align-self: stretch;
  border-radius: 4px;
  border-width: 1;
  border-color: #ddd;
  margin-top: 20px;
  padding: 0 15px;
`;
export const Button = styled.TouchableOpacity`
  height: 46px;
  background-color: #df4723;
  align-self: stretch;
  border-width: 1;
  border-radius: 4px;
  border-color: #ddd;
  margin-top: 10px;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
