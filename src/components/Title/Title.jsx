import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { type, colors } from '../Styles'

export const titleQuery = graphql`
  query titleQuery {
    allFile(filter: { relativeDirectory: { regex: "/images/title/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`

const Header = styled.h1(({ image }) => ({
  display: 'block',
  ...type.title,
  color: colors.day,
  backgroundImage: `url(${image})`,

  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',

  textFillColor: 'transparent',
  WebkitTextFillColor: 'transparent',

  overflowWrap: 'break-word'
}))

const Title = ({ name, AllImages }) => {
  const images = AllImages.allFile.edges.reduce(
    (acc, image) => ({
      ...acc,
      [image.node.name]: image.node.childImageSharp.fluid
    }),
    {}
  )
  const image = images['tekstbg-hq'].src
  return (
    <Header image={image} dangerouslySetInnerHTML={{ __html: name }} />
  )
}

const TitleContainer = props => (
  <StaticQuery
    query={titleQuery}
    render={AllImages => <Title AllImages={AllImages} {...props} />}
  />
)

export default TitleContainer
