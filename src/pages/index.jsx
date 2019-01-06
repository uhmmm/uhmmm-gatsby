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
import Bar from '../components/Bar/Bar'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        {/* <SEO /> */}
        <Gradient />
        <Bar type="horizontal" />
        <Navbar />
        <Showcase />
        <PostListing postEdges={postEdges} />
        <Contact />
        <Bar type="horizontal" />
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
