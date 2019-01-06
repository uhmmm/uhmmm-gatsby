import React from 'react'

import styles from './Post.module.css'

export default ({ post, postNode }) => (
  <div className={styles.outer}>
    <div className={styles.grid}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: postNode.html }}
      />
    </div>
  </div>
)
