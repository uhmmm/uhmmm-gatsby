import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'

import config from '../../../data/SiteConfig'

import './global.css'
import './variables.css'
import './typography.css'
import styles from './index.module.css'
import theme from './theme'

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.outer}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className={styles.outerGrid}>
          <div className={styles.verticalLayout}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
