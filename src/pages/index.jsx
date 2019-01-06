import React from 'react'
import Helmet from 'react-helmet'
import cx from 'classnames'
import { graphql } from 'gatsby'
import styles from './index.module.css'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import Gradient from '../components/Gradient/Gradient'
import Showcase from '../components/Showcase/Showcase'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

import bgtop from './bar2x.png'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        {/* <SEO /> */}
        <Gradient />

        <div className={styles.container}>
          <div className={styles.bgtopGrid}>
            <img className={styles.bgtop} src={bgtop} />
          </div>
        </div>

        <Navbar />
        <Showcase />
        <PostListing postEdges={postEdges} />
        <Contact />
        <div className={styles.container}>
          <div className={styles.bgtopGrid}>
            <img className={styles.bgtop} src={bgtop} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            description
          }
        }
      }
    }
  }
`
