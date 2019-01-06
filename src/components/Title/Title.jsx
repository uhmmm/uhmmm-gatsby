import React from 'react'

import title from './title2x.png'

import styles from './Title.module.css'

export default ({ name }) => {
  console.log(name)
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <img className={styles.title} src={title} />
      </div>
    </div>
  )
}
