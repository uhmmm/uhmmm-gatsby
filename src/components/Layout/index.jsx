import React from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { fontFace, normalize } from 'polished'

import config from '../../../data/SiteConfig'
import { grid, colors, type } from '../Styles'

const typography = [
  ...[100, 200, 300, 400, 500, 600, 700].map(fontWeight =>
    fontFace({
      fontFamily: 'Sans Sharp',
      fontFilePath: `./fonts/ss/ss-${fontWeight}`,
      fileFormats: ['otf'],
      formatHint: 'opentype',
      fontWeight,
      fontStyle: 'normal'
    })
  ),
  ...[300, 400, 500, 700, 900].map(fontWeight =>
    fontFace({
      fontFamily: 'Untitled Sans',
      fontFilePath: `./fonts/untitledsans/Untitled Sans ${fontWeight}`,
      fileFormats: ['ttf'],
      formatHint: 'truetype',
      fontWeight,
      fontStyle: 'normal'
    })
  )
]

const responsiveFontSize = Object.assign(
  ...[
    ['0px', '800px', '8px'],
    ['800px', '900px', '9px'],
    ['900px', '1100px', '10px'],
    ['1100px', '1300px', '11px'],
    ['1300px', '1400px', '12px'],
    ['1400px', '2000px', '13px']
  ].map(([start, end, size]) => ({
    [`@media (min-width: ${start}) and (max-width: ${end})`]: {
      fontSize: size
    }
  }))
)

const GlobalStyles = {
  ...normalize(),
  ...typography,
  '*': {
    boxSizing: 'border-box'
  },
  html: {
    scrollBehavior: 'smooth',
    fontSize: type.base,
    ...responsiveFontSize
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
    marginBottom: grid.unit
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
