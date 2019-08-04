import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList/ProjectList'
import Showcase from '../components/Showcase/Showcase'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/SEO/SEO'
import BlocksLayer from '../components/BlocksLayer/BlocksLayer'

import config from '../../data/SiteConfig'

import styles from './index.module.css'

const Index = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <BlocksLayer type="index" />
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
          id
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            projectImages {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 100
                  traceSVG: {
                    color: "rgba(0,0,0,0)"
                    turnPolicy: TURNPOLICY_MINORITY
                    blackOnWhite: false
                  }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  presentationWidth
                  tracedSVG
                }
              }
            }
            date
            description
          }
        }
      }
    }
  }
`
