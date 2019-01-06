import React from 'react'

import styles from './Navbar.module.css'

export default () => (
  <div className={styles.outer}>
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h3 className={styles.logoText}>uhmmm.io</h3>
      </div>
      <div className={styles.links}>
        <h3 className={styles.link}>about</h3>
        <h3 className={styles.link}>projects</h3>
        <h3 className={styles.link}>contact</h3>
      </div>
    </nav>
  </div>
)
