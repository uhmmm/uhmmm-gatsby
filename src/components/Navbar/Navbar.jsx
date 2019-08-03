import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoText}>
          uhmmm
        </Link>
      </div>
      <Link to="/#about" className={cx(styles.link, styles.linkAbout)}>
        about
      </Link>
      <Link to="/#projects" className={cx(styles.link, styles.linkProject)}>
        projects
      </Link>

      <Link to="/#contact" className={cx(styles.link, styles.linkContact)}>
        contact
      </Link>
    </nav>
  )
}

export default Navbar
