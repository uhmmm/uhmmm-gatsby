import React from 'react'
import cx from 'classnames'

import styles from './Showcase.module.css'

import bgback from './bg-back2x.png'
import bgfront from './bg-front-hq.png'
import Title from '../Title/Title'

export default () => (
  <div className={cx(styles.container)}>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <img className={styles.bgback} src={bgback} alt="" />
    </div>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <img className={styles.bgfront} src={bgfront} alt="" />
    </div>
    <div className={cx(styles.grid, styles.positionedGrid)}>
      <div className={styles.titleContainer}>
        <Title name="Digital Environments where academia, journalism & society meets" />
      </div>
    </div>
    <div className={styles.grid}>
      <div className={styles.text}>
        <p>
          Uhmmm is commited to develop digital environments for academic,
          journalists and the public. Some of our projects have been
          self-initiated, while others have been made in partnership or blabla.
        </p>
        <p>
          If you are looking for collaboration please contact us at
          info@uhmmm.io
        </p>
        <p>
          If you are looking for collaboration please contact us at
          info@uhmmm.net
        </p>
        <p>
          Daarnaast moet hier nog een paragraaf komen omdat er anders een hele
          vreemde open ruimte ontstaat en RJ daardoor gaat zeggen dat dingen
          niet in balans zijn.
        </p>
      </div>
    </div>
  </div>
)
