import React from 'react'
import cx from 'classnames'

import styles from './Showcase.module.css'

import bgback from './bg-back2x.png'
import bgfront from './bg-front2x.png'
import title from './title2x.png'

export default () => (
  <div className={cx(styles.container)}>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <img className={styles.bgback} src={bgback} />
    </div>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <img className={styles.bgfront} src={bgfront} />
    </div>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <img className={styles.title} src={title} />
    </div>
    <div className={cx(styles.grid, styles.showcase)}>
      <div className={styles.text}>
        <p>
          Uhmmm develops digital tools for journalists and academics to aid them
          in their research.
        </p>
        <p>
          Some of our projects have been self-initiated, while others have been
          made in partnership.
        </p>
        <p>
          If you are looking for collaboration please contact us at
          info@uhmmm.io
        </p>
      </div>
    </div>
  </div>
)
