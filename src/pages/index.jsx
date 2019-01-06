import React from 'react'
import Helmet from 'react-helmet'
import cx from 'classnames'
import { graphql } from 'gatsby'
import styles from './index.module.css'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import bgback from './bg-back2x.png'
import bgfront from './bg-front2x.png'
import bgtop from './bar.png'
import title from './title.png'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        {/* <SEO /> */}
        <div className={styles.gridGradientContainer}>
          <div className={styles.gridGradient}>
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
            <div className={styles.gridGradientBorder} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.bgtopGrid}>
            <img className={styles.bgtop} src={bgtop} />
          </div>
        </div>

        <div className={styles.container}>
          <Navbar />
        </div>

        <div className={cx(styles.container)}>
          <div className={cx(styles.grid, styles.positionedGrid)}>
            <img className={styles.bgback} src={bgback} />
          </div>
          <div className={cx(styles.grid, styles.positionedGrid)}>
            <img className={styles.bgfront} src={bgfront} />
          </div>
          <div className={cx(styles.grid, styles.positionedGrid)}>
            <img className={styles.title} src={title} />
          </div>
          <div className={cx(styles.grid, styles.showcase)}>
            <div className={styles.text}>
              <p>
                Uhmmm develops digital tools for journalists and academics to
                aid them in their research.
              </p>
              <p>
                Some of our projects have been self-initiated, while others have
                been made in partnership.
              </p>
              <p>
                If you are looking for collaboration please contact us at
                info@uhmmm.io
              </p>
            </div>
          </div>
          <PostListing postEdges={postEdges} />
          <Contact />
        </div>
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
