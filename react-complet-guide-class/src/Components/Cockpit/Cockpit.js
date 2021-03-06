import React from 'react'
import classes from'./Cockpit.css'
    



const cockpit = (props) => {

    let btnClass = ''
    if (props.showPersons){
        btnClass = classes.Red;
    }
    const assignedclasses = [];
    if (props.persons.length<= 2){
        assignedclasses.push(classes.Red);
    }
    if (props.persons.length<= 1){
        assignedclasses.push(classes.bold);
    }
    return(
        <div className={classes.cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedclasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit