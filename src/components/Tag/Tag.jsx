import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

import styles from './Tag.module.css'

import Chip from '../Chip/Chip'

export default ({ tag }) => (
  <Link
    className={styles.link}
    key={tag}
    style={{ textDecoration: 'none' }}
    to={`/tags/${_.kebabCase(tag)}`}
  >
    <Chip color="pink" className={styles.container}>
      {tag}
    </Chip>
  </Link>
)
