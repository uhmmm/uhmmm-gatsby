import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import Post from '../components/Post/Post'
import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Title/Title'
import Tag from '../components/Tag/Tag'
import Chip from '../components/Chip/Chip'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'

import styles from './post.module.css'


export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    if (!post.id) {
      post.id = slug
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }
    return (
      <Layout>
        <>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Navbar />
          <Title name={post.title} />
          <div className={styles.outer}>
            <div className={styles.container}>
              <div className={styles.tags}>
                {post.authors && <Chip color="blue">By {post.authors[0].toUpperCase()}, {post.date}</Chip>}
              </div>
            </div>
          </div>

          <Post post={post} postNode={postNode} />

        </>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
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
