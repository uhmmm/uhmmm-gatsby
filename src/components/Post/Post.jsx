import React from 'react'

import styles from './Post.module.css'

const Post = ({ postNode }) => (
  <div className={styles.outer}>
    <div className={styles.grid}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: postNode.html }}
      />
    </div>
  </div>
)

export default Post
