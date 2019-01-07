import React from 'react'
import bgtop from './bar2x.png'

import styles from './Bar.module.css'

export default ({ type }) => (
  <div className={styles.container}>
    <div className={styles.bgtopGrid}>
      <img className={styles.bgtop} src={bgtop} />
    </div>
  </div>
)
