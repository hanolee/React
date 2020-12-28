import React, { Component } from 'react';
import './App.css';
import Cockpit from '../Components/Cockpit/Cockpit'
import Radium , {StyleRoot} from 'radium';
import Persons from '../Components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id : "asdas1",name: 'Max', age: 28 },
      { id : "asdsa2",name: 'Manu', age: 29 },
      { id : "dfadd3",name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };


  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id ;
    });
    const person = {...this.state.persons[personIndex]}

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doewShow = this.state.showPersons;
    this.setState({
      showPersons : !doewShow
    });
  }

  deletePersonHandler = (personindex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personindex,1);
    this.setState({persons : persons})
  }

  render() {

    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blud',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor : 'yellow',
        color : 'white'
      }
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
    }



    return (
      <StyleRoot>
        <div className="App">
            <Cockpit
              showPersons = {this.state.showPersons}
              persons = {this.state.persons}
              clicked = {this.togglePersonsHandler}/>
            {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
