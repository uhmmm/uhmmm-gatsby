import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { media, grid, type, colors } from '../Styles'

const Container = styled.div(({ layout }) => ({
  gridArea: layout === 'imgFirst' ? '1 / 1 / 4 / 5' : '1 / 9 / 4 / 13',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, var(--grid-size))',
  gridTemplateRows: 'repeat(4, var(--grid-size))',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  [media.phablet.q]: {
    display: 'none'
  }
}))

const ImgUnder = styled(Img)(({ layout }) => ({
  gridArea: layout === 'imgFirst' ? '1 / 2 / 4 / 5' : '1 / 2 / 4 / 5',
  width: '100%'['Container[imgFirst=] &']
}))

const ImgOver = styled(Img)(({ layout }) => ({
  position: 'absolute',
  gridArea: layout === 'imgFirst' ? '1 / 1 / 4 / 4' : '1 / 1 / 4 / 4',
  width: '100%'
}))

const ImageSection = ({ project, layout }) => {
  return (
    <Container layout={layout}>
      <ImgUnder
        fluid={project.projectImages[0].childImageSharp.fluid}
        alt=""
        layout={layout}
      />
      <ImgOver
        fluid={project.projectImages[1].childImageSharp.fluid}
        alt=""
        layout={layout}
      />
    </Container>
  )
}

export default ImageSection
