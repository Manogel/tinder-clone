import React, {useState} from 'react';

import {Container, Logo, Form, Input, Button, TextButton} from './styles';
import logo from '~/assets/logo.png';
import api from '~/services/api';
import {ActivityIndicator} from 'react-native';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const {data} = await api.post('/devs', {username});
    navigation.navigate('Main', {id: data._id});
  }

  return (
    <Container>
      <Logo source={logo} />

      <Input
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="Informe seu usuário Git"
      />
      <Button onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <TextButton>Entrar</TextButton>
        )}
      </Button>
    </Container>
  );
}
