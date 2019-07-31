import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import Showcase from '../components/Showcase/Showcase'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/SEO/SEO'

import config from '../../data/SiteConfig'

import styles from './index.module.css'

const Index = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <div>
        <Navbar />
      </div>
      <div>
        <Showcase />
      </div>
      <div>
        <PostListing postEdges={postEdges} />
      </div>
      <div>
        <Contact />
      </div>
    </Layout>
  )
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
