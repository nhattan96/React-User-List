import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css'
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHander = event => {
        event.preventDefault()

        if (enteredUserName.length === 0 || enteredAge.length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (non-empty values'
            })
            return
        }
        console.log(enteredUserName, enteredAge);

        props.onAddUser(enteredUserName, enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
    }

    const usernameChangeHandler = event => {
        setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const errorHandle = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandle}></ErrorModal>}
            <Card>
                <form className={styles.input} onSubmit={addUserHander}>
                    <label htmlFor="username">Username</label>
                    <input value={enteredUserName} onChange={usernameChangeHandler} type="text" id="username" />

                    <label htmlFor="age">Age (Years)</label>
                    <input value={enteredAge} onChange={ageChangeHandler} type="number" id="age" />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser