import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => [
      { name: userName, age: userAge, id: Math.random().toString() },
      ...prevUserList
    ])
  }

  return (
    // <div>
    //   <AddUser onAddUser={addUserHandler}></AddUser>
    //   <UserList users={usersList} ></UserList>
    // </div>

    //Use <> </>
    <>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList} ></UserList>
    </>

    //Use React.Fragment
    // <React.Fragment>
    //   <AddUser onAddUser={addUserHandler}></AddUser>
    //   <UserList users={usersList} ></UserList>
    // </React.Fragment>
  );
}

export default App;
