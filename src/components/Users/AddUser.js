import React, {useState} from 'react'
import classes from "./AddUser.module.css"

const AddUser = props => {

    const [enteredEmail,setEnteredEmail] = useState('')
    const [enteredAge,setEnteredAge] = useState('')
  
    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()
        // console.log(enteredEmail, enteredAge);
        props.addUser(enteredEmail, enteredAge)
        setEnteredEmail('')
        setEnteredAge('')
    }  

    return (
        <div className={classes['add-user']}>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input type="text" value={enteredEmail} onChange={emailChangeHandler} placeholder='Enter Email ...'/>

                <label htmlFor="age">Age</label>
                <input type="number" value={enteredAge} onChange={ageChangeHandler} />

                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUser