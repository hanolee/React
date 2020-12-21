import logo from './logo.svg';
import './App.css';
import React, { createElement } from 'react'
import Person from './Person/Person';

class App extends React.Component{

  state = {
    persons : [
      {name : 'Max', age : 28}
      {name : 'Manu', age : 23}
      {name : 'Stephanie', age : 28}
    ]
    
  }

  render(){
    return (
      <div className = "App">
        <h1>title</h1>
        <p>this is really working!</p>
        <button>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[0].age}>My hobbies : Racing</Person>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
      </div>
    )
  }

}

export default App;