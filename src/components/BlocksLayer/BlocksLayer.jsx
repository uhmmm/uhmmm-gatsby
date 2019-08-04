import React from 'react'
import MediaQuery from 'react-responsive'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './BlocksLayer.module.css'

export const backgroundQuery = graphql`
  query backgroundQuery {
    allFile(filter: { relativeDirectory: { regex: "/background/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(
              maxWidth: 500
              quality: 100
              traceSVG: {
                color: "rgba(0,0,0,0)"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
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
      <Img className={styles.blockImgHorizontal} fluid={image} />
    </MediaQuery>
  )
}

const BlockImgVertical = ({ image }) => {
  return (
    <MediaQuery query="(min-width: 1100px)">
      <Img className={styles.blockImgVertical} fluid={image} />
    </MediaQuery>
  )
}

const BlockNav = ({ image }) => {
  return <Img className={styles.blockNav} fluid={image} />
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
