import './App.css';
import React, {useState} from 'react'
import Person from './Person/Person';

const App = (props) => {

  const [personsState, setPersonsState] = useState({
    persons : [
      {name : 'Max', age : 28},
      {name : 'Manu', age : 23},
      {name : 'Stephanie', age : 28}
    ]
  });
const [otherState, setOtherState] = useState('some other value');

console.log(personsState, otherState)

  const switchNameHandler = () => {
    //console.log('Was Clicked');
    //Don't to this - this.state.persons[0].name = 'hano';
    setPersonsState({persons: [
      {name : 'Hano', age : 24},
      {name : 'Jieun', age : 26},
      {name : 'Hanoo', age : 22}
    ],
    otherState : personsState.otherState
  })
  }


  
    return (
      <div className = "App">
        <h1>title</h1>
        <p>this is really working!</p>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person 
        name = {personsState.persons[0].name} 
        age = {personsState.persons[0].age}/>
        <Person 
        name = {personsState.persons[1].name} 
        age = {personsState.persons[1].age}>My hobbies : Racing</Person>
        <Person 
        name = {personsState.persons[2].name} 
        age = {personsState.persons[2].age}/>
      </div>
    );
  

}

export default App;
