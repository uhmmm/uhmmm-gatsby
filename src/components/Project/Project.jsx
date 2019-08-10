import React from 'react'
import styled from '@emotion/styled'

import Chip from '../Chip/Chip'
import ImageSection from './ImageSection'

import { media, grid, type, colors } from '../Styles'

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'var(--grid-inner-column-template)',
  gridTemplateRows: 'repeat(5, var(--grid-size))',
  '&:last-of-type': {
    gridTemplateRows: 'repeat(3, var(--grid-size))'
  },
  [media.phablet.q]: {
    display: 'flex',
    flexDirection: 'column',
    padding: 'calc(var(--grid-unit) * 2) 0'
  }
})

const Details = styled.div(({ layout }) => ({
  gridArea: layout === 'imgFirst' ? '1 / 6 / 4 / 13' : '1 / 1 / 4 / 8'
}))

const Heading = styled.h3({
  padding: 'calc(var(--grid-unit) / 2) 0 var(--grid-unit)',
  fontFamily: 'var(--type-header-family)',
  fontSize: 'var(--type-header-size)',
  fontWeight: 'var(--type-header-weight)',
  lineHeight: 'var(--type-header-lh)',
  color: 'var(--type-color)'
})

const BodyCopy = styled.p({
  fontFamily: 'var(--type-body-family)',
  fontWeight: 'var(--type-body-weight)',
  fontSize: 'var(--type-body-size)',
  lineHeight: 'var(--type-body-lh)',
  color: 'var(--type-color)'
})

const Project = ({ project, index }) => {
  const layout = (index + 1) % 2 ? 'imgfirst' : 'detailsfirst'
  const { tags } = project
  return (
    <Container>
      <ImageSection project={project} layout={layout} />
      <Details layout={layout}>
        <div>
          {tags && tags.map(tag => <Chip key={tag} text={tag} color="pink" />)}
        </div>

        {/* <Link to={post.slug}> */}
        <Heading>{project.title}</Heading>
        <BodyCopy>{project.description}</BodyCopy>
        {/* </Link> */}
      </Details>
    </Container>
  )
}

export default Project
