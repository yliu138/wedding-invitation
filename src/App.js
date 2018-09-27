import React from 'react';
import {
  Container,
} from 'reactstrap';
// import logo from './logo.svg';
import './App.css';
import Screen from './Screen';
import config from './config';
// <Screen.Gallery config={config} />

export default function App() {
  return (
    <Container className="app">
      <Screen.Header config={config} />
      <Screen.Place config={config} />
      <Screen.Profile config={config} />
      <Screen.Gallery config={config} />
      <Screen.Footer />
    </Container>
  );
}
