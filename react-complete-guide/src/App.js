import logo from './logo.svg';
import './App.css';
import React, { createElement } from 'react'

class App extends React.Component{

  render(){
    return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work now?'));
  }

}

export default App;