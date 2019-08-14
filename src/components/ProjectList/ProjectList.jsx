import React from 'react'
import styled from '@emotion/styled'

import Project from '../Project/Project'
import { PurpleBlock, WhiteBlock } from '../BlocksLayer/BlocksLayer'

import { media, type, grid, util } from '../Styles'

const Container = styled.div({
  paddingBottom: `calc(var(${grid.size.l}) * 2)`,
  ...util.scrollOffset,
  [media.phablet.q]: {
    paddingBottom: `calc(var(${grid.size.l}) * 1)`
  }
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

const ProjectList = ({ projects }) => {
  return (
    <Container id="projects">
      <Header>
        <Subtitle>projects</Subtitle>
        <PurpleBlock area="1 / 5 / 2 / 6" />
        <WhiteBlock area="1 / 10 / 2 / 11" />
      </Header>
      <div>
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
      <Header>
        <PurpleBlock area="1 / 1 / 2 / 2" />
      </Header>
    </Container>
  )
}

export default ProjectList
