import React from 'react'

import styles from './Title.module.css'

export default ({ name }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{name}</h1>
    {/* <img className={styles.title} src={title} /> */}
  </div>
)
