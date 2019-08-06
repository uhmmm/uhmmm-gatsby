import React from 'react'
import styled from '@emotion/styled'

import cx from 'classnames'
import Img from 'gatsby-image'

import styles from './Person.module.css'

export default ({ person }) => (
  <div className={styles.container}>
    <Img
      className={styles.image}
      fluid={person.image.childImageSharp.fluid}
      alt="profile"
    />
    <ul className={styles.details}>
      <li className={styles.text}>{person.name}</li>
      <li className={cx(styles.text, styles.email)}>{person.email}</li>
    </ul>
  </div>
)
