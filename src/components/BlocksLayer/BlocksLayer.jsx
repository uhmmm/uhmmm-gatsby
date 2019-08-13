import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { size, cover, transparentize } from 'polished'

import { grid, media, colors } from '../Styles'

const BlockContainer = styled.div({
  ...grid.outer.template,
  ...cover(),
  zIndex: '-2'
})

const ImgBlock = styled(Img)(({ area, shadowColor, hide }) => ({
  gridArea: area,
  ...size('100%'),
  boxShadow: `0 0 6px ${shadowColor}`,
  [media.phablet.q]: {
    display: hide && 'none'
  }
}))

const WhiteBlock = styled.div(({ area }) => ({
  gridArea: area,
  ...size('100%'),
  background: colors.day,
  boxShadow: `0 0 6px ${transparentize(0.68, colors.day)}`,
  [media.phablet.q]: {
    display: 'none'
  }
}))

const PurpleBlock = styled.div(({ area }) => ({
  gridArea: area,
  ...size('100%'),
  background: colors.purple,
  boxShadow: `0px 0px 6px ${transparentize(0.68, colors.day)}`,
  [media.phablet.q]: {
    display: 'none'
  }
}))

const GradientOverlay = styled.div({
  position: 'absolute',
  height: `var(${grid.size.l})`,
  width: '100vw',
  background: `linear-gradient(to bottom, black 0%, transparent var(${grid.size.l}))`
})

const BlocksLayerRaw = ({ data }) => {
  const images = data.allFile.edges.reduce(
    (acc, image) => ({
      ...acc,
      [image.node.name]: image.node.childImageSharp.fluid
    }),
    {}
  )

  return (
    <BlockContainer>
      <ImgBlock
        fluid={images['triple-horizontal']}
        area="1 / 1 / 2 / 4"
        shadowColor={colors.purple}
      />
      <ImgBlock
        fluid={images['single-horizontal']}
        area="1 / 10 / 2 / 11"
        shadowColor={colors.blueHalf}
        hide
      />
      <GradientOverlay />
      <WhiteBlock area="6 / 13 / 7 / 14" />
      <ImgBlock
        fluid={images['single-vertical']}
        area="7 / 12 / 8 / 13"
        shadowColor={colors.blueHalf}
        hide
      />
    </BlockContainer>
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
export { WhiteBlock, PurpleBlock }
