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
      timeToRead: postEdge.node.timeToRead,
      id: postEdge.node.id
    })
  })
  return postList
}

const ImageSection = ({ post }) => {
  return (
    <div className={styles.imgSection}>
      <img
        className={styles.img__under}
        src={post.projectImages[0].publicURL}
        alt=""
      />
      <img
        className={styles.img__over}
        src={post.projectImages[1].publicURL}
        alt=""
      />
    </div>
  )
}

const ListItem = ({ post }) => {
  return (
    <div className={styles.post}>
      <ImageSection post={post} />
      <div className={styles.detailsSection}>
        <div className={styles.tags}>
          {post.tags &&
            post.tags.map(tag => <Chip key={tag} text={tag} color="pink" />)}
        </div>

        <Link to={post.slug}>
          <h1 className={styles.title}>{post.title}</h1>
          <p>{post.description}</p>
        </Link>
      </div>
    </div>
  )
}

const ProjectList = ({ postEdges }) => {
  const postList = getPostList(postEdges)
  return (
    <div className={styles.outer} id="projects">
      <div className={styles.container}>
        {postList.map(post => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
