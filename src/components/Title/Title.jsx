import React from 'react'

import title from './title2x.png'

import styles from './Title.module.css'

export default ({ name }) => (
  <div className={styles.outer}>
    <div className={styles.container}>
      <div className={styles.title}>{name}</div>
      {/* <img className={styles.title} src={title} /> */}
    </div>
  </div>
)
