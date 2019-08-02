import React from 'react'
import Helmet from 'react-helmet'

import Gradient from '../Gradient/Gradient'
import Bar from '../Bar/Bar'

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
        <Gradient />
        <div className={styles.verticalLayout}>
          <div>
            <Bar type="horizontal" color="dark" />
            {children}
          </div>
          <Bar type="horizontal" color="dark" />
        </div>
      </div>
    </div>
  )
}

export default MainLayout