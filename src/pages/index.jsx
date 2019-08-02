import React, { useRef } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList/ProjectList'
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
      <Navbar />
      <Showcase />
      <ProjectList postEdges={postEdges} />
      <Contact />
    </Layout>
  )
}

export default Index

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
            date
            description
          }
        }
      }
    }
  }
`
