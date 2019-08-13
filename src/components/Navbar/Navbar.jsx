import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { media, grid, type } from '../Styles'

const NavContainer = styled.nav({
  ...grid.inner.template,
  gridTemplateRows: `repeat(2, var(${grid.size.l}))`,
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
    display: 'none',
    ...type.body
  }
}))

const Navbar = () => {
  return (
    <NavContainer>
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
    </NavContainer>
  )
}

export default Navbar
