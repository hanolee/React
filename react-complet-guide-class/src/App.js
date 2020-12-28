import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium , {StyleRoot} from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key = {person.id}><Person 
            click = {() => this.deletePersonHandler(index)}
            name = {person.name} 
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)}/></ErrorBoundary>
          })}
        </div> 
      );
      style.backgroundColor = 'green';
      style[":hover"] = {
        backgroundColor : "lightBlue",
        color : "white"
      }
    }

    //const classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length<= 2){
      classes.push('red');
    }
    if (this.state.persons.length<= 1){
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
