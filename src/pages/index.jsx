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
import GradientLayer from '../components/GradientLayer/GradientLayer'
import DecorationLayer from '../components/BlocksLayer/DecorationLayer'

import config from '../../data/SiteConfig'

const getPostList = projectEdges => {
  const projectList = []
  projectEdges.forEach(projectEdge => {
    projectList.push({
      ...projectEdge.node.frontmatter,
      ...projectEdge.node.fields,
      excerpt: projectEdge.node.excerpt,
      timeToRead: projectEdge.node.timeToRead,
      id: projectEdge.node.id
    })
  })
  return projectList
}

const Index = ({ data }) => {
  const projects = getPostList(data.allMarkdownRemark.edges)
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <GradientLayer />
      <BlocksLayer type="index" />
      <DecorationLayer />
      {/* <SEO /> */}
      <Navbar />
      <Showcase />
      <ProjectList projects={projects} />
      <Contact />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { fileAbsolutePath: { regex: "/(data/projects)/" } }
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
            name
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
