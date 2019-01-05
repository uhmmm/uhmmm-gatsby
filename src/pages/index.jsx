import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styles from './index.module.css'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import bgback from './bg-back.png'
import bgfront from './bg-front.png'
import title from './title.png'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <div className={styles.container}>
          <Helmet title={config.siteTitle} />
          <div className={styles.grid}>
            {/* <SEO /> */}
            <img className={styles.bgback} src={bgback} />
            <div className={styles.positionedGrid}>
              <img className={styles.bgfront} src={bgfront} />
            </div>
            <div className={styles.positionedGrid}>
              <img className={styles.title} src={title} />
            </div>
            <div className={styles.text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                cumque debitis rerum quod, excepturi velit consequuntur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                cumque debitis rerum quod, excepturi velit consequuntur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                cumque debitis rerum quod, excepturi velit consequuntur.
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            <PostListing postEdges={postEdges} />
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
          }
        }
      }
    }
  }
`
