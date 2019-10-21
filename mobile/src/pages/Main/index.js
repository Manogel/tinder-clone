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
} from './styles';

import logo from '~/assets/logo.png';
import like from '~/assets/like.png';
import dislike from '~/assets/dislike.png';
import api from '~/services/api';

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

  async function likeUser(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: {user},
    });
    setDevs(devs.filter(user => user._id !== id));
  }

  async function dislikeUser(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: {user},
    });
    setDevs(devs.filter(user => user._id !== id));
  }

  return (
    <Container>
      <Logo source={logo} />
      <CardContainer>
        <Card>
          <Avatar
            source={{
              uri: 'https://avatars1.githubusercontent.com/u/38564520?v=4',
            }}
          />
          <Footer>
            <Name>Manoel Gomes</Name>
            <Bio>Uma referencia aq</Bio>
          </Footer>
        </Card>
      </CardContainer>
      <Actions>
        <Button onPress={() => {}}>
          <ButtonImage source={dislike} />
        </Button>
        <Button onPress={() => {}}>
          <ButtonImage source={like} />
        </Button>
      </Actions>
    </Container>
  );
}
