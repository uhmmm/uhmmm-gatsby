import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Person from '../Person/Person'

import styles from './PersonList.module.css'

const personQuery = graphql`
  query PersonQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(people)/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            email
            image {
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
          }
        }
      }
    }
  }
`
const getPeople = data => {
  return [
    ...data.allMarkdownRemark.edges.map(person => {
      return { ...person.node.frontmatter }
    })
  ]
}

const PersonListRaw = ({ data }) => {
  const peopleList = getPeople(data)
  return (
    <div className={styles.container}>
      {peopleList.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}

const PersonList = props => (
  <StaticQuery
    query={personQuery}
    render={data => <PersonListRaw data={data} {...props} />}
  />
)

export default PersonList
