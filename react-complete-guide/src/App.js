import logo from './logo.svg';
import './App.css';
import React, { createElement } from 'react'
import Person from './Person/Person';

class App extends React.Component{

  render(){
    return (
      <div className = "App">
        <h1>title</h1>
        <p>this is really working!</p>
        <Person/>
        <Person/>
        <Person/>
      </div>
    )
  }

}

export default App;