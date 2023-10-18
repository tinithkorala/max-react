import React, { useState } from 'react'
import Card from '../UI/Card';

import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) => {


  const [enteredUsername, setEnterdUsername] = useState('');
  const [enteredAge, setEnterdAge] = useState('');

  console.log(":DDDDDDDDDDDDDDD", enteredUsername, enteredAge);


  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if(+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    // setEnterdUsername('');
    // setEnterdAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnterdUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnterdAge(event.target.value);
  }

  return (
    <div>
      <ErrorModal 
        title='Normla error'
        message='Something went wrong'
      />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
          <Button
            type='submit'
          >Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUsers