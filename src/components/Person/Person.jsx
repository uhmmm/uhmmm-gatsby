import React from 'react'
import cx from 'classnames'
import MediaQuery from 'react-responsive'
import Img from 'gatsby-image'

import styles from './Person.module.css'

export default ({ person }) => (
  <div className={styles.container}>
    <MediaQuery query="(min-width: 1100px)">
      <Img
        className={styles.image}
        fluid={person.image.childImageSharp.fluid}
        alt="profile"
      />
    </MediaQuery>
    <ul className={styles.details}>
      <li className={styles.text}>{person.name}</li>
      <li className={cx(styles.text, styles.email)}>{person.email}</li>
    </ul>
  </div>
)
