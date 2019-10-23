import React, { useEffect, useState } from "react";
import io from 'socket.io-client'
import { Link } from "react-router-dom";

import { Container, List, Item, Buttons, Empty, MacthContainer } from "./styles";
import logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import itsamatch from "../../assets/itsamatch.png";
import api from "../../services/api";

export default function Main({ match }) {
  const [devs, setDevs] = useState([]);
  const [devMatch, setDevMatch] = useState(null)


  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get("/devs", {
        headers: { user: match.params.id }
      });
      //console.log(data);
      setDevs(data);
    }
    loadUsers();
  }, [match.params.id]);

  useEffect(()=>{
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id}
    })

    socket.on('match', dev => {
      console.log(dev)
      setDevMatch(dev)
    })

        
    /* setTimeout(() => {
      socket.emit('hello', {
        message: 'Ola Mundo!'
      })
    }, 3000); */

  }, [match.params.id])

  

  async function likeUser(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });
    setDevs(devs.filter(user => user._id !== id));
  }

  async function dislikeUser(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });
    setDevs(devs.filter(user => user._id !== id));
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="TinDev" />
      </Link>

      {devs.length > 0 ? (
        <List>
          {devs.map(user => (
            <Item key={user._id}>
              <img src={user.avatar} alt="profile" />
              <footer>
                <strong> {user.name} </strong>
                <p> {user.bio} </p>
              </footer>
              <Buttons>
                <button type="button" onClick={() => dislikeUser(user._id)}>
                  <img src={dislike} alt="Dislike" />
                </button>
                <button type="button" onClick={() => likeUser(user._id)}>
                  <img src={like} alt="like" />
                </button>
              </Buttons>
            </Item>
          ))}
        </List>
      ) : (
        <Empty> Acabou :(</Empty>
      )}
      { devMatch && (<MacthContainer>
        <img src={itsamatch} alt="it's a match" />
        <img className="avatar" src = {devMatch.avatar} atl={devMatch.name} />
        <strong>{devMatch.name}</strong>
        <p>{devMatch.bio}</p>
        <button type="button" onClick={() => setDevMatch(null)} > FECHAR </button>

      </MacthContainer>)}

    </Container>
  );
}
