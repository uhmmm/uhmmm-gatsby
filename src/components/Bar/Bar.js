import React from 'react'
import bgtop from './bar2x.png'

import styles from './Bar.module.css'

export default ({ type }) => {
  console.log(type)
  return (
    <div className={styles.container}>
      <div className={styles.bgtopGrid}>
        <img className={styles.bgtop} src={bgtop} />
      </div>
    </div>
  )
}
