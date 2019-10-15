import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
// import { Container } from './styles';
import Login from './pages/Login'
import Main from './pages/Main'

export default function src() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}  />
      <Route exact path="/dev/:id" component={Main}  />
    </BrowserRouter>
  );
}
