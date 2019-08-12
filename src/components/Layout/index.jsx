import React from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import { fontFace } from 'polished'

import config from '../../../data/SiteConfig'

import './global.css'
import './variables.css'
import styles from './index.module.css'

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

console.log([...SansSharp, ...UntitledSans])

const MainLayout = ({ children }) => {
  return (
    <div className={styles.outer}>
      <Global styles={[...SansSharp, ...UntitledSans]} />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <div className={styles.outerGrid}>
        <div className={styles.verticalLayout}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
