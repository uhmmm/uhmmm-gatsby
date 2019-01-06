import React from 'react'
import { Link } from 'gatsby'

import styles from './Navbar.module.css'

export default () => (
  <div className={styles.outer}>
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoText}>
          uhmmm.io
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          about
        </Link>
        <Link to="/" className={styles.link}>
          projects
        </Link>
        <Link to="/" className={styles.link}>
          contact
        </Link>
      </div>
    </nav>
  </div>
)
