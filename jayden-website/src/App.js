import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Main() {
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}




export default Main;
