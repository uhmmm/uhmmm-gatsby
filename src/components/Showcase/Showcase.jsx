import React from 'react'

import styles from './Showcase.module.css'

import Title from '../Title/Title'

export default () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <Title name="Digital environments where academia, journalism & society meets" />
    </div>
    <div className={styles.textContainerLeft}>
      <p className={styles.text}>
        Uhmmm is commited to develop digital environments for academic,
        journalists and the public.
      </p>
      <p className={styles.text}>
        Some of our projects have been self-initiated, while others have been
        made in partnership or blabla.
      </p>
      <p className={styles.text}>
        If you are looking for collaboration please contact us at info@uhmmm.io
      </p>
    </div>
    <div className={styles.textContainerRight}>
      <p className={styles.text}>
        If you are looking for collaboration please contact us at info@uhmmm.net
      </p>
      <p className={styles.text}>
        Daarnaast moet hier nog een paragraaf komen omdat er anders een hele
        vreemde open ruimte ontstaat en RJ daardoor gaat zeggen dat dingen niet
        in balans zijn.
      </p>
    </div>
  </div>
)
