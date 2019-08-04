import React from 'react'
import cx from 'classnames'
import MediaQuery from 'react-responsive'

import styles from './Person.module.css'

export default ({ person }) => (
  <div className={styles.container}>
    <MediaQuery query="(min-width: 1100px)">
      <img className={styles.image} src={person.image} alt="profile" />
    </MediaQuery>
    <ul className={styles.details}>
      <li className={styles.text}>{person.name}</li>
      <li className={cx(styles.text, styles.email)}>{person.email}</li>
    </ul>
  </div>
)
