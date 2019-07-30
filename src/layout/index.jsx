import React from 'react'
import Helmet from 'react-helmet'

import Gradient from '../components/Gradient/Gradient'
import Bar from '../components/Bar/Bar'

import config from '../../data/SiteConfig'

import './global.css'
import styles from './index.module.css'

const MainLayout = ({children})=>{
    return (
      <div className={styles.container}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* DO NOT PLACE ANYTHING VISISBLE BEFORE THE GRADIENT */}
        <Gradient />
        {/* AND DO NOT REMOVE THIS CONTAINER: POSITION RELATIVE OVERLAPS ABSOLUTE, DOCUMENTFLOW DOES NOT */}
        <div className={styles.container}>
          <div>
          <Bar type="horizontal" color="dark" />
          <div>
          {children}
          </div>
          </div>
          <Bar type="horizontal" color="dark" />
        </div>
      </div>
    )
}

export default MainLayout