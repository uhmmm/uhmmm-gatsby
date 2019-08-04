import React from 'react'
import cx from 'classnames'
import MediaQuery from 'react-responsive'
import Img from 'gatsby-image'

import Chip from '../Chip/Chip'

import styles from './Project.module.css'

const ImageSection = ({ project, position }) => {
  return (
    <MediaQuery query="(min-width: 1100px)">
      <div
        className={cx(
          styles.imgSection,
          position !== 'imgfirst' && styles.imgSectionRight
        )}
      >
        <Img
          className={styles.img__under}
          fluid={project.projectImages[0].childImageSharp.fluid}
          alt=""
        />
        <Img
          className={styles.img__over}
          fluid={project.projectImages[1].childImageSharp.fluid}
          alt=""
        />
      </div>
    </MediaQuery>
  )
}

const Project = ({ project, index }) => {
  const position = (index + 1) % 2 ? 'imgfirst' : 'detailsfirst'
  return (
    <div className={styles.project}>
      {position === 'imgfirst' && (
        <ImageSection project={project} position={position} />
      )}

      <div
        className={cx(
          styles.detailsSection,
          position === 'imgfirst' && styles.detailsSectionRight
        )}
      >
        <div className={styles.tags}>
          {project.tags &&
            project.tags.map(tag => <Chip key={tag} text={tag} color="pink" />)}
        </div>

        {/* <Link to={post.slug}> */}
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
        {/* </Link> */}
      </div>

      {position !== 'imgfirst' && (
        <ImageSection project={project} position={position} />
      )}
    </div>
  )
}

export default Project
