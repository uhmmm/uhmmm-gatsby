import React from 'react'
import { Link } from 'gatsby'
import Chip from '../Chip/Chip'

import styles from './ProjectList.module.css'

const getPostList = postEdges => {
  const postList = []
  postEdges.forEach(postEdge => {
    postList.push({
      ...postEdge.node.frontmatter,
      ...postEdge.node.fields,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    })
  })
  return postList
}

const ProjectList = ({ postEdges }) => {
  const postList = getPostList(postEdges)
  return (
    <div className={styles.outer} id="projects">
      <div className={styles.container}>
        {postList.map(post => (
          <div className={styles.post} key={post.title}>
            <div className={styles.post__section}>
              <img className={styles.post__img} src="bgfront" alt="" />
            </div>

            <div className={styles.post__section}>
              <div className={styles.tags}>
                {post.tags &&
                  post.tags.map(tag => (
                    <Chip key={tag} text={tag} color="pink" />
                  ))}
              </div>
            </div>

            <Link to={post.slug}>
              <h1 className={styles.title}>{post.title}</h1>
              <p>{post.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
