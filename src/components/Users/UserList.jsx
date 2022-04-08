import React from 'react'
import Card from '../UI/Card'
import styles from './UserList.module.css'

const UserList = (props) => {

  const user = (
    props.users.map(user => (
      <li key={user.id}>
        {user.name} ({user.age} years old)
      </li>
    ))
  )


  return (
    <Card className={styles.users}>
      <ul>
        {user}
      </ul>
    </Card>
  )
}

export default UserList