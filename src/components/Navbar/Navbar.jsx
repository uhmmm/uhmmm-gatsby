import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { media, grid, type } from '../Styles'

const Container = styled.nav({
  ...grid.inner.template,
  gridTemplateRows: 'repeat(2, var(--grid-size))',
  alignItems: 'center'
})

const LogoLink = styled(Link)({
  gridArea: '1 / 1 / 2 / 3',
  ...type.subtitle
})

const StyledLink = styled(Link)(({ position }) => ({
  gridArea: position,
  justifySelf: 'center',
  alignSelf: 'center',
  ...type.caption,
  [media.phablet.q]: {
    display: 'none'
  }
}))

const Navbar = () => {
  return (
    <Container>
      <LogoLink to="/">uhmmm</LogoLink>
      <StyledLink to="/#about" position="1 / 11 / 2 / 12">
        about
      </StyledLink>
      <StyledLink to="/#projects" position="1 / 12 / 2 / 13">
        projects
      </StyledLink>
      <StyledLink to="/#contact" position="2 / 11 / 3 / 12">
        contact
      </StyledLink>
    </Container>
  )
}

export default Navbar
