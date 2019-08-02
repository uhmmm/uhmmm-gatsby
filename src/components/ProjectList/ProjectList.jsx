import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

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

const ImageSection = ({ post, position }) => {
  return (
    <div
      className={cx(
        styles.imgSection,
        position !== 'imgfirst' && styles.imgSectionRight
      )}
    >
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

const ListItem = ({ post, index }) => {
  const position = (index + 1) % 2 ? 'imgfirst' : 'detailsfirst'
  return (
    <div className={styles.post}>
      {position === 'imgfirst' && (
        <ImageSection post={post} position={position} />
      )}

      <div
        className={cx(
          styles.detailsSection,
          position === 'imgfirst' && styles.detailsSectionRight
        )}
      >
        <div className={styles.tags}>
          {post.tags &&
            post.tags.map(tag => <Chip key={tag} text={tag} color="pink" />)}
        </div>

        <Link to={post.slug}>
          <h1 className={styles.title}>{post.title}</h1>
          <p>{post.description}</p>
        </Link>
      </div>

      {position !== 'imgfirst' && (
        <ImageSection post={post} position={position} />
      )}
    </div>
  )
}

const ProjectList = ({ postEdges }) => {
  const postList = getPostList(postEdges)
  return (
    <div className={styles.outer} id="projects">
      <div className={styles.container}>
        {postList.map((post, index) => (
          <ListItem key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
