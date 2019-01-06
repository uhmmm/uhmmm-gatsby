import React from 'react'
import { Link } from 'gatsby'

import styles from './PostListing.module.css'

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }

  render() {
    console.log(styles)
    const postList = this.getPostList()
    return (
      <div className={styles.container}>
        {/* Your post list here. */
        postList.map(post => (
          <div className={styles.post} key={post.title}>
            <Link to={post.path}>
              <h1>{post.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default PostListing
