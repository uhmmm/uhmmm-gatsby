import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styles from './Title.module.css'

export const titleQuery = graphql`
  query titleQuery {
    allFile(filter: { relativeDirectory: { regex: "/title/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`

const TitleQuery = ({ name, data }) => {
  const images = data.allFile.edges.reduce(
    (acc, image) => ({
      ...acc,
      [image.node.name]: image.node.childImageSharp.fluid
    }),
    {}
  )
  const image = images['tekstbg-hq'].src

  return (
    <h1
      className={styles.title}
      style={{
        backgroundImage: `url(${image})`,
        color: 'red'
      }}
    >
      {name}
    </h1>
  )
}

const Title = props => {
  return (
    <StaticQuery
      query={titleQuery}
      render={data => <TitleQuery data={data} {...props} />}
    />
  )
}

export default Title
