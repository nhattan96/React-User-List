import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css'
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    console.log(nameInputRef.current?.value,'nameInputRef');

    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHander = event => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }

        // if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        //     setError({
        //         title: 'Invalid input',
        //         message: 'Please enter a valid name and age (non-empty values).'
        //     })
        //     return
        // }

        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (non-empty values'
            })
            return
        }
        // console.log(enteredUserName, enteredAge);

        props.onAddUser(enteredName, enteredUserAge)
        // setEnteredUserName('')
        // setEnteredAge('')

        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const usernameChangeHandler = event => {
        // setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = event => {
        // setEnteredAge(event.target.value)
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
                    <input
                        // value={enteredUserName}
                        onChange={usernameChangeHandler}
                        type="text"
                        id="username"
                        ref={nameInputRef}
                    />

                    <label
                        htmlFor="age">Age (Years)</label>
                    <input
                        // value={enteredAge}
                        onChange={ageChangeHandler}
                        type="number"
                        id="age"
                        ref={ageInputRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser