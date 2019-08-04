import React from 'react'
import MediaQuery from 'react-responsive'
import { StaticQuery, graphql } from 'gatsby'

import styles from './BlocksLayer.module.css'

export const backgroundQuery = graphql`
  query backgroundQuery {
    allFile(filter: { relativeDirectory: { regex: "/background/" } }) {
      edges {
        node {
          id
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

const BlockImgHorizontal = () => {
  return (
    <MediaQuery query="(min-width: 600px)">
      <div className={styles.blockImgHorizontal} />
    </MediaQuery>
  )
}

const BlockImgVertical = () => {
  return (
    <MediaQuery query="(min-width: 1100px)">
      <div className={styles.blockImgVertical} />
    </MediaQuery>
  )
}

const BlockNav = () => {
  return <div className={styles.blockNav} />
}

const BlocksLayerRaw = ({ data }) => {
  console.log(data)
  return (
    <div className={styles.container}>
      <BlockNav />
      <BlockImgHorizontal />
      <BlockImgVertical />
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
