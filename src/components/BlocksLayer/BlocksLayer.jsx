import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { size, cover } from 'polished'

import { grid, media } from '../Styles'

const Container = styled.div({
  ...grid.outer.template,
  ...cover(),
  zIndex: '-2'
})

const Block = styled(Img)(({ area, shadowColor, hide }) => ({
  gridArea: area,
  ...size('100%'),
  boxShadow: `0 0 6px ${shadowColor}`,
  [media.phablet.q]: {
    display: hide && 'none'
  }
}))

const BlocksLayerRaw = ({ data }) => {
  const images = data.allFile.edges.reduce(
    (acc, image) => ({
      ...acc,
      [image.node.name]: image.node.childImageSharp.fluid
    }),
    {}
  )

  return (
    <Container>
      <Block
        fluid={images['triple-horizontal']}
        area="1 / 1 / 2 / 4"
        shadowColor="var(--color-purple)"
      />
      <Block
        fluid={images['single-horizontal']}
        area="1 / 10 / 2 / 11"
        shadowColor="var(--color-blue-half)"
        hide
      />
      <Block
        fluid={images['single-vertical']}
        area="7 / 12 / 8 / 13"
        shadowColor="var(--color-blue-half)"
        hide
      />
    </Container>
  )
}

const backgroundQuery = graphql`
  query backgroundQuery {
    allFile(filter: { relativeDirectory: { regex: "/images/background/" } }) {
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

const BlocksLayer = props => (
  <StaticQuery
    query={backgroundQuery}
    render={data => <BlocksLayerRaw data={data} {...props} />}
  />
)
export default BlocksLayer
