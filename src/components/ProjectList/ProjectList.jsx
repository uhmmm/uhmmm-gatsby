import React from 'react'
import styled from '@emotion/styled'
import { size } from 'polished'

import Project from '../Project/Project'

import { media, type, grid, colors, util } from '../Styles'

const Container = styled.div({
  paddingBottom: `calc(var(${grid.size.l}) * 2)`,
  ...util.scrollOffset
})

const Header = styled.div({
  ...grid.inner.template,
  height: `var(${grid.size.l})`,
  [media.phablet.q]: {
    height: 'auto'
  }
})

const Subtitle = styled.h2({
  ...type.subtitle
})

const Decoration = styled.div({
  ...size('100%'),
  background: colors.purple,
  boxShadow: `0px 0px 12px ${colors.day68}`,
  [media.phablet.q]: {
    display: 'none'
  }
})

const DecorationHeader = styled(Decoration)({
  gridArea: '1 / 5 / 2 / 6'
})

const DecorationFooter = styled(Decoration)({
  gridArea: '1 / 1 / 2 / 2'
})

const ProjectList = ({ projects }) => {
  return (
    <Container id="projects">
      <Header>
        <Subtitle>projects</Subtitle>
        <DecorationHeader />
      </Header>
      <div>
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
      <Header>
        <DecorationFooter />
      </Header>
    </Container>
  )
}

export default ProjectList
