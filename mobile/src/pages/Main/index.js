import React, {useEffect, useState} from 'react';
import {
  Container,
  Logo,
  CardContainer,
  Card,
  Avatar,
  Footer,
  Name,
  Bio,
  Actions,
  Button,
  ButtonImage,
  Empyt,
} from './styles';

import {TouchableOpacity} from 'react-native';
import logo from '~/assets/logo.png';
import like from '~/assets/like.png';
import dislike from '~/assets/dislike.png';
import api from '~/services/api';
import store from '~/services/storage';

export default function Main({navigation}) {
  const user = navigation.getParam('id');
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const {data} = await api.get('/devs', {
        headers: {user},
      });
      //console.log(data);
      setDevs(data);
    }
    loadUsers();
  }, []); //eslint-disable-line

  async function likeUser() {
    const [devTarget, ...rest] = devs;
    await api.post(`/devs/${devTarget._id}/likes`, null, {
      headers: {user},
    });
    setDevs(rest);
  }

  async function dislikeUser() {
    const [devTarget, ...rest] = devs;
    await api.post(`/devs/${devTarget._id}/dislikes`, null, {
      headers: {user},
    });
    setDevs(rest);
  }

  async function logout() {
    await store.delete('User');
    navigation.navigate('Login');
  }

  return (
    <Container>
      <TouchableOpacity onPress={logout}>
        <Logo source={logo} />
      </TouchableOpacity>
      <CardContainer>
        {devs.length === 0 ? (
          <Empyt>Acabou :(</Empyt>
        ) : (
          devs.map(({id, avatar, name, bio}) => (
            <Card key={id}>
              <Avatar
                source={{
                  uri: avatar,
                }}
              />
              <Footer>
                <Name>{name}</Name>
                <Bio>{bio}</Bio>
              </Footer>
            </Card>
          ))
        )}
      </CardContainer>
      <Actions>
        {devs.length > 0 && (
          <>
            <Button onPress={likeUser}>
              <ButtonImage source={dislike} />
            </Button>
            <Button onPress={dislike}>
              <ButtonImage source={like} />
            </Button>
          </>
        )}
      </Actions>
    </Container>
  );
}
