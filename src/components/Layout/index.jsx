import React from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { normalize } from 'polished'

import config from '../../../data/SiteConfig'
import { grid, colors, type } from '../Styles'

const GlobalStyles = {
  ...normalize(),
  ...type.fontFaces,
  '*': {
    boxSizing: 'border-box'
  },
  html: {
    scrollBehavior: 'smooth',
    fontSize: type.base,
    ...type.responsiveBase
  },
  body: {
    margin: '0',
    background: colors.dark
  },
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  },
  'h1, h2, h3, h4, h5, h6, p, q, li, a': {
    color: colors.day,
    margin: '0',
    textDecoration: 'none'
  },
  p: {
    marginBottom: '1rem'
  }
}

const AppContainer = styled.div({
  display: 'grid',
  width: '100vw',
  minHeight: '100vh',
  justifyContent: 'center'
})

const OuterGrid = styled.div({
  ...grid.outer.template,
  gridAutoRows: 'unset',
  position: 'relative'
})

const InnerGridContainer = styled.div({
  gridColumnStart: `calc(var(${grid.outer.count.l}) - var(${grid.inner.count.l}))`,
  gridColumnEnd: `var(${grid.outer.count.l})`
})

const MainLayout = ({ children }) => {
  return (
    <AppContainer>
      <Global styles={GlobalStyles} />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <OuterGrid>
        <InnerGridContainer>{children}</InnerGridContainer>
      </OuterGrid>
    </AppContainer>
  )
}

export default MainLayout
