import React from 'react'

import Project from '../Project/Project'

import styles from './ProjectList.module.css'

const getPostList = postEdges => {
  const postList = []
  postEdges.forEach(postEdge => {
    postList.push({
      ...postEdge.node.frontmatter,
      ...postEdge.node.fields,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
      id: postEdge.node.id
    })
  })
  return postList
}

const ProjectList = ({ postEdges }) => {
  const postList = getPostList(postEdges)
  return (
    <div className={styles.outer} id="projects">
      <div className={styles.listHeader}>
        <h2 className={styles.subtitle}>projects</h2>
        <div className={styles.listHeader__decoration} />
      </div>
      <div className={styles.listContainer}>
        {postList.map((post, index) => (
          <Project key={post.id} post={post} index={index} />
        ))}
      </div>
      <div className={styles.listHeader}>
        <div className={styles.listFooter__decoration} />
      </div>
    </div>
  )
}

export default ProjectList
