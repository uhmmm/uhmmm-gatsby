import React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'
import './global.css'
import styles from './index.module.css'

export default class MainLayout extends React.Component {
  render() {
    console.log(styles)
    const { children } = this.props
    return (
      <div className={styles.container}>
        asdjhkfasldkjhfalksjhdfalskjdhf
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    )
  }
}
