import React from 'react'

import styles from './Showcase.module.css'

import Title from '../Title/Title'

export default () => (
  <div className={styles.container}>
    <Title name="Digital environments where academia, journalism & society meets" />
    <div className={styles.textContainer}>
      <div>
        <p>
          Uhmmm is commited to develop digital environments for academic,
          journalists and the public. Some of our projects have been
          self-initiated, while others have been made in partnership or blabla.
        </p>
        <p>
          If you are looking for collaboration please contact us at
          info@uhmmm.io
        </p>
      </div>
      <div>
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
