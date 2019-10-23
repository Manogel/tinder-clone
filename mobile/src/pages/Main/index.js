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
  MatchContainer,
  MatchLogo,
  MatchAvatar,
  MatchName,
  MatchBio,
  CloseButton,
  MatchClose,
} from './styles';

import {TouchableOpacity, StyleSheet} from 'react-native';
import logo from '~/assets/logo.png';
import like from '~/assets/like.png';
import itsamatch from '~/assets/itsamatch.png';
import dislike from '~/assets/dislike.png';
import api from '~/services/api';
import io from 'socket.io-client';
import store from '~/services/storage';

export default function Main({navigation}) {
  const user = navigation.getParam('id');
  const [devs, setDevs] = useState([]);
  const [devMatch, setDevMatch] = useState(null);

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

  useEffect(() => {
    const socket = io('http://192.168.1.132:3333', {
      query: {user},
    });

    socket.on('match', dev => {
      console.log(dev);
      setDevMatch(dev);
    });

    /* setTimeout(() => {
      socket.emit('hello', {
        message: 'Ola Mundo!'
      })
    }, 3000); */
  }, [user]);

  async function likeUser() {
    const [devTarget, ...rest] = devs;
    await api.post(`/devs/${devTarget._id}/likes`, null, {
      headers: {user},
    });
    console.log(devTarget);
    console.log(rest);
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
          devs.map((users, index) => (
            <Card key={users._id} style={[{}, {zIndex: devs.length - index}]}>
              <Avatar
                source={{
                  uri: users.avatar,
                }}
              />
              <Footer>
                <Name>{users.name}</Name>
                <Bio>{users.bio}</Bio>
              </Footer>
            </Card>
          ))
        )}
      </CardContainer>
      <Actions>
        {devs.length > 0 && !devMatch && (
          <>
            <Button onPress={dislikeUser}>
              <ButtonImage source={dislike} />
            </Button>
            <Button onPress={likeUser}>
              <ButtonImage source={like} />
            </Button>
          </>
        )}
      </Actions>

      {devMatch && (
        <MatchContainer style={{...StyleSheet.absoluteFillObject}}>
          <MatchLogo source={itsamatch} />
          <MatchAvatar
            source={{
              uri: devMatch.avatar,
            }}
          />
          <MatchName>{devMatch.name}</MatchName>
          <MatchBio>{devMatch.bio}</MatchBio>

          <CloseButton onPress={() => setDevMatch(null)}>
            <MatchClose> FECHAR </MatchClose>
          </CloseButton>
        </MatchContainer>
      )}
    </Container>
  );
}
