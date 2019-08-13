import React from 'react'
import styled from '@emotion/styled'

import Chip from '../Chip/Chip'
import ImageSection from './ImageSection'

import { media, grid, type } from '../Styles'

const Container = styled.div({
  ...grid.inner.template,
  gridTemplateRows: `repeat(5, var(${grid.size.l}))`,
  ':last-of-type': {
    gridTemplateRows: `repeat(3, var(${grid.size.l}))`
  },
  [media.phablet.q]: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0'
  }
})

const Details = styled.div(({ layout }) => {
  return {
    gridArea: layout === 'imgfirst' ? '1 / 6 / 4 / 12' : '1 / 2 / 4 / 8'
  }
})

const Header = styled.h3({
  ...type.header,
  paddingBottom: '1rem'
})

const BodyCopy = styled.p({
  ...type.body,
  paddingBottom: `var(${grid.size.l})`
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
        <Header>{project.title}</Header>
        <BodyCopy>{project.description}</BodyCopy>
        {/* </Link> */}
      </Details>
    </Container>
  )
}

export default Project
