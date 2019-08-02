import React from 'react'
import { Link } from 'gatsby'
import Chip from '../Chip/Chip'

import styles from './ProjectList.module.css'

const getPostList = postEdges => {
  const postList = []
  postEdges.forEach(postEdge => {
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

const PostListing = ({ postEdges }) => {
  const postList = getPostList(postEdges)
  return (
    <div className={styles.outer} id="projects">
      <div className={styles.container}>
        {postList.map(post => (
          <div className={styles.post} key={post.title}>
            <div className={styles.post__section}>
              <img className={styles.post__img} src={bgfront} alt="" />
            </div>

            <div className={styles.post__section}>
              <div className={styles.tags}>
                {post.tags &&
                  post.tags.map(tag => (
                    <Chip key={tag} text={tag} color="pink" />
                  ))}
              </div>
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

export default PostListing
