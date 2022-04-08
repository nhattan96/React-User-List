import React from "react";

const AddUser = (props) => {

    const addUserHander = event => {
        event.preventDefault()
    }

    return (
        <form onSubmit={addUserHander}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" />

            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser