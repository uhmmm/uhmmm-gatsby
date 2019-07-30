import React from 'react'
import cx from 'classnames'

import styles from './Chip.module.css'

export default ({ children, color }) => (
  <div className={cx(styles.container, styles[color])}>
    <span>{children}</span>
  </div>
)
