import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styles from './index.module.css'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

class Index extends React.Component {
  render() {
    console.log(styles)
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <div className={styles.container}>
          <Helmet title={config.siteTitle} />
          {/* <SEO /> */}
          <PostListing postEdges={postEdges} />
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
