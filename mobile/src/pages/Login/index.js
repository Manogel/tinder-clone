import React, {useState, useEffect} from 'react';

import {Container, Logo, Input, Button, TextButton} from './styles';
import logo from '~/assets/logo.png';
import api from '~/services/api';
import {ActivityIndicator} from 'react-native';
import store from '~/services/storage';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const {data} = await api.post('/devs', {username});
    await store.save('User', data._id);
    navigation.navigate('Main', {id: data._id});
  }

  return (
    <Container>
      <Logo source={logo} />

      <Input
        value={username}
        onChangeText={setUsername}
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
