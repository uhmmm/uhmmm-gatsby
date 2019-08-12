import React from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { fontFace, size } from 'polished'

import config from '../../../data/SiteConfig'

import './global.css'
import './variables.css'

import { grid } from '../Styles'

const SansSharp = [100, 200, 300, 400, 500, 600, 700].map(fontWeight =>
  fontFace({
    fontFamily: 'Sans Sharp',
    fontFilePath: `./fonts/ss/ss-${fontWeight}`,
    fileFormats: ['otf'],
    formatHint: 'opentype',
    fontWeight,
    fontStyle: 'normal'
  })
)

const UntitledSans = [300, 400, 500, 700, 900].map(fontWeight =>
  fontFace({
    fontFamily: 'Untitled Sans',
    fontFilePath: `./fonts/untitledsans/Untitled Sans ${fontWeight}`,
    fileFormats: ['ttf'],
    formatHint: 'truetype',
    fontWeight,
    fontStyle: 'normal'
  })
)

// Might be deleted eventually, had an option to center the grid for mobile
const AppContainer = styled.div({
  display: 'grid',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center'
})

const OuterGrid = styled.div({
  position: 'relative',
  ...grid.outer.template
})

const InnerGridContainer = styled.div({
  gridColumnStart: `calc(var(${grid.outer.count.l}) - var(${grid.inner.count.l}))`,
  gridColumnEnd: `var(${grid.outer.count.l})`
})

const MainLayout = ({ children }) => {
  return (
    <AppContainer>
      <Global styles={[...SansSharp, ...UntitledSans]} />
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
