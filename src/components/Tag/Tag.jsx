import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

import styles from './Tag.module.css'

export default ({ tag }) => (
  <Link
    className={styles.link}
    key={tag}
    style={{ textDecoration: 'none' }}
    to={`/tags/${_.kebabCase(tag)}`}
  >
    <button className={styles.container}>{tag}</button>
  </Link>
)
