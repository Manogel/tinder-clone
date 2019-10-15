import React, {useState} from 'react';
import logo from '../../assets/logo.svg'

import { Container, Logo, Form} from './styles';
import api from '../../services/api';

export default function Login({history}) {
  const [username, setUsername] = useState('')

  async function handleSubmit(e){
    e.preventDefault();
    //console.log(username)
    const {data} = await api.post("/devs", {username})
    const { _id } = data;

    history.push(`/dev/${_id}`);
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
      <Logo src={logo} alt="TinDev" />
        <input 
          placeholder= "Informe seu usuário git"
          value={username}
          onInput={ (e) => setUsername(e.target.value)}
        />
        <button type="submit">
          Cadastrar  
        </button> 
      </Form>
    </Container>
  );
}
