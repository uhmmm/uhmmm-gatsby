import React from 'react'

import styles from './Showcase.module.css'

import Title from '../Title/Title'

export default () => (
  <div className={styles.container} id="about">
    <div className={styles.titleContainer}>
      <Title name="Digital environments where academia, journalism & society meets" />
    </div>
    <div className={styles.textContainer}>
      <p className={styles.text}>
        We are a small collective that research, design, and code digital
        environments. Our projects are on the intersection between academia,
        journalism, and society.
      </p>
      <p className={styles.text}>
        Most of our projects are self-initiated, but we don't like to build
        alone. We are always on the lookout for collaborations. If you have an
        idea on your mind, drop us a mail at
        <a className={styles.text} href="mailto:info@uhmmm.net">
          info@uhmmm.net
        </a>
      </p>
      <p className={styles.text}>
        In our work, we value inclusive perspectives and creativity. Whatever it
        is, we try to get there with our partners. Together we create new
        digital environments.
      </p>
    </div>
  </div>
)
