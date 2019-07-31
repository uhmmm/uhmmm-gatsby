import React from 'react'
import cx from 'classnames'

import styles from './Showcase.module.css'

import bgback from './bg-back2x.png'
import bgfront from './bg-front2x.png'
import Title from '../Title/Title'

export default () => (
  <div className={cx(styles.container)}>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <img className={styles.bgback} src={bgback} />
    </div>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <img className={styles.bgfront} src={bgfront} />
    </div>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <div className={styles.titleContainer}>
        <Title name="Digital Documentaries and Tools for (civil) Society" />
      </div>
    </div>
    <div className={cx(styles.grid, styles.showcase)}>
      <div className={styles.text}>
        <p>
          Uhmmm is a small collective that creates tools and narratives for a
          better (civil) society
        </p>
        <p>
          If you are looking for collaboration please contact us at
          info@uhmmm.net
        </p>
      </div>
    </div>
  </div>
)
