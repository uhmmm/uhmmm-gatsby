import React from 'react'
import { Link } from 'gatsby'
import Tag from '../Tag/Tag'

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
        description: postEdge.node.frontmatter.description,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }

  render() {
    const postList = this.getPostList()
    return (
      <div className={styles.outer}>
        <div className={styles.container}>
          {/* Your post list here. */
            postList.map(post => (
              <div className={styles.post} key={post.title}>
                <div className={styles.tags}>
                  {post.tags && post.tags.map(tag => <Tag key={tag} tag={tag} />)}
                </div>
                <Link to={post.path}>
                  <h1 className={styles.title}>{post.title}</h1>
                  <p>{post.description}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default PostListing
