import React from 'react'
import Helmet from 'react-helmet'

import GradientLayer from '../GradientLayer/GradientLayer'

import config from '../../../data/SiteConfig'

import './global.css'
import './variables.css'
import styles from './index.module.css'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.outer}>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <div className={styles.outerGrid}>
        <GradientLayer />
        <div className={styles.verticalLayout}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
