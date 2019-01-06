import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

import styles from './PostTags.module.css'

class PostTags extends Component {
  render() {
    const { tags } = this.props
    return (
      <div className={styles.tags}>
        {tags &&
          tags.map(tag => (
            <Link
              className={styles.link}
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button className={styles.container}>{tag}</button>
            </Link>
          ))}
      </div>
    )
  }
}

export default PostTags
