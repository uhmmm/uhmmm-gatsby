import React from 'react'
import { Link } from 'gatsby'
import styles from './Navbar.module.css'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const Navbar = ({ navRefs }) => {
  return (
    <div className={styles.outer}>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoText}>
            uhmmm
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
}

export default Navbar
