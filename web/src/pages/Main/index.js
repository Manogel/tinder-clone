import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom'

import { 
Container,
List,
Item,
Buttons,
Empty
} from './styles';
import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import api from '../../services/api';

export default function Main({ match }) {
  useEffect(() => {
    async function loadUsers(){
      const { data } = await api.get('/devs', {
        headers: { user: match.params.id}
      })
      console.log(data)
      setDevs(data)
    }
    loadUsers();
  }, [match.params.id])

  const [devs, setDevs] = useState([]);

  async function likeUser(id){
    await api.post(`/devs/${id}/likes`, null, {
      headers:{ user: match.params.id}
    })
    setDevs(devs.filter(user => user._id !== id))
  }

  async function dislikeUser(id){
    await api.post(`/devs/${id}/deslikes`, null, {
      headers:{ user: match.params.id}
    })
    setDevs(devs.filter(user => user._id !== id))
  }

  return (
    <Container>
      <Link to="/">  
      <img src={logo} alt="TinDev" />
      </Link>
      
        { devs.length > 0 ? (
          devs.map( user => (
            <List>
            <Item key= {user._id} >
              <img src={user.avatar} alt="profile" />
              <footer>
                <strong> {user.name} </strong>
                <p> {user.bio} </p>
              </footer>
              <Buttons>
                <button type="button" onClick={() => dislikeUser(user._id)} > 
                  <img src={dislike} alt="Dislike" /> 
                </button>
                <button type="button" onClick={() => likeUser(user._id)} > 
                  <img src={like} alt="like" /> 
                </button>
              </Buttons>
            </Item>
      </List>
            ))
        ) : (
          <Empty> Acabou :(</Empty>
        )}

    </Container>

  );
}
