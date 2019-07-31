import React from 'react'
import Helmet from 'react-helmet'

import Gradient from '../Gradient/Gradient'
import Bar from '../Bar/Bar'

import config from '../../../data/SiteConfig'

import './global.css'
import styles from './index.module.css'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.outer}>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <div className={styles.outerGrid}>
        <Gradient />
        <div className={styles.inner}>
          <div>
            <Bar type="horizontal" color="dark" />
            <div>{children}</div>
          </div>
          <Bar type="horizontal" color="dark" />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
