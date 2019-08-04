import React from 'react'
import MediaQuery from 'react-responsive'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import styles from './BlocksLayer.module.css'

export const backgroundQuery = graphql`
  query backgroundQuery {
    allFile(filter: { relativeDirectory: { regex: "/background/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`

const BlockImgHorizontal = ({ image }) => {
  return (
    <MediaQuery query="(min-width: 600px)">
      <BackgroundImage
        Tag="div"
        className={styles.blockImgHorizontal}
        fluid={image}
        backgroundColor="#ff00ff"
      />
    </MediaQuery>
  )
}

const BlockImgVertical = ({ image }) => {
  return (
    <MediaQuery query="(min-width: 1100px)">
      <BackgroundImage
        Tag="div"
        className={styles.blockImgVertical}
        fluid={image}
        backgroundColor="#ff00ff"
      />
    </MediaQuery>
  )
}

const BlockNav = ({ image }) => {
  return (
    <BackgroundImage
      Tag="div"
      className={styles.blockNav}
      fluid={image}
      backgroundColor="#ff00ff"
    />
  )
}

const BlocksLayerRaw = ({ data }) => {
  const images = data.allFile.edges.reduce(
    (acc, image) => ({
      ...acc,
      [image.node.name]: image.node.childImageSharp.fluid
    }),
    {}
  )
  return (
    <div className={styles.container}>
      <BlockNav image={images['triple-horizontal']} />
      <BlockImgHorizontal image={images['single-horizontal']} />
      <BlockImgVertical image={images['single-vertical']} />
    </div>
  )
}

const BlocksLayer = props => (
  <StaticQuery
    query={backgroundQuery}
    render={data => <BlocksLayerRaw data={data} {...props} />}
  />
)
export default BlocksLayer
