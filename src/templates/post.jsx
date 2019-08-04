import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post/Post'
import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Title/Title'
import Chip from '../components/Chip/Chip'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

import styles from './post.module.css'

const getPost = ({ data, pageContext }) => {
  const { slug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  if (!post.id) {
    post.id = slug
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID
  }
  return [slug, post, postNode]
}

const PostTemplate = props => {
  const [slug, post, postNode] = getPost(props)
  return (
    <Layout>
      <>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Navbar />
        <div className={styles.outer}>
          <div className={styles.container}>
            <Title name={post.title} />
            <div className={styles.tags}>
              {post.authors && (
                <Chip color="blue">
                  By 
                  {' '}
                  {post.authors[0].toUpperCase()} 
                  {' '}
                  {post.date}
                </Chip>
              )}
            </div>
          </div>
        </div>

        <Post post={post} postNode={postNode} />
      </>
    </Layout>
  )
}

export default PostTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        projectImages {
          publicURL
        }
        cover
        date
        category

        tags
        authors
      }
      fields {
        slug
      }
    }
  }
`
