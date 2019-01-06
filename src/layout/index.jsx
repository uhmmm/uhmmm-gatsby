import React from 'react'
import Helmet from 'react-helmet'

import Gradient from '../components/Gradient/Gradient'
import Bar from '../components/Bar/Bar'

import config from '../../data/SiteConfig'

import './global.css'
import styles from './index.module.css'

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.container}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* DO NOT PLACE ANYTHING VISISBLE BEFORE THE GRADIENT */}
        <Gradient />
        <Bar type="horizontal" />
        {children}
        <Bar type="horizontal" />
      </div>
    )
  }
}
