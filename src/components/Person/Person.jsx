import React from 'react'

import styles from './Person.module.css'

export default ({ person }) => (
  <div className={styles.container}>
    <img className={styles.image} src={person.image} alt="profile" />
    <ul className={styles.details}>
      <li className={styles.name}>{person.name}</li>
      <li className={styles.function}>{person.email}</li>
    </ul>
  </div>
)
