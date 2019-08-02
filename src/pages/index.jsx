import React, { useRef } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostListing from '../components/ProjectList/ProjectList'
import Showcase from '../components/Showcase/Showcase'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/SEO/SEO'

import config from '../../data/SiteConfig'

import styles from './index.module.css'

const Index = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges

  const topRef = useRef(null)
  const postsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Navbar />
      <Showcase />
      <PostListing postEdges={postEdges} />
      <Contact />
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
