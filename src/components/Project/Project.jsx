import React from 'react'
import cx from 'classnames'
import Media from 'react-media'
import Img from 'gatsby-image'

import Chip from '../Chip/Chip'

import styles from './Project.module.css'

const ImageSection = ({ post, position }) => {
  console.log(post.projectImages[0].childImageSharp)
  return (
    <Media query="(min-width: 1100px)">
      <div
        className={cx(
          styles.imgSection,
          position !== 'imgfirst' && styles.imgSectionRight
        )}
      >
        <Img
          className={styles.img__under}
          fluid={post.projectImages[0].childImageSharp.fluid}
          alt=""
        />
        <Img
          className={styles.img__over}
          fluid={post.projectImages[1].childImageSharp.fluid}
          alt=""
        />
      </div>
    </Media>
  )
}

const Project = ({ post, index }) => {
  const position = (index + 1) % 2 ? 'imgfirst' : 'detailsfirst'
  return (
    <div className={styles.project}>
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

        {/* <Link to={post.slug}> */}
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>
        {/* </Link> */}
      </div>

      {position !== 'imgfirst' && (
        <ImageSection post={post} position={position} />
      )}
    </div>
  )
}

export default Project
