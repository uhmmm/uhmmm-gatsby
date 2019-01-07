import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import Post from '../components/Post/Post'
import UserInfo from '../components/UserInfo/UserInfo'
import Disqus from '../components/Disqus/Disqus'
import Navbar from '../components/Navbar/Navbar'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import Title from '../components/Title/Title'
import Tag from '../components/Tag/Tag'
import Chip from '../components/Chip/Chip'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'

import styles from './post.module.css'
import { node } from 'prop-types'

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
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Navbar />
          <Title name={post.title} />
          <div className={styles.outer}>
            <div className={styles.container}>
              <div className={styles.tags}>
                {post.tags && post.tags.map(tag => <Tag key={tag} tag={tag} />)}
                <Chip color="blue">
                  {`Door ${post.authors.join(', ')}`.toUpperCase()}
                </Chip>
              </div>
            </div>
          </div>

          <Post post={post} postNode={postNode} />

          {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
          {/* <UserInfo config={config} /> */}
          {/* <Disqus postNode={postNode} /> */}
        </div>
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
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`
