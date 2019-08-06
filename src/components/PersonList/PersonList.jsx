import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Person from '../Person/Person'

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
                fluid(maxWidth: 200, quality: 100) {
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
  return data.allMarkdownRemark.edges.map(person => {
    return { ...person.node.frontmatter }
  })
}

const Container = styled.div(({ theme: { media } }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 1fr)',
  [media.tablet.q]: { display: 'flex', flexDirection: 'column' }
}))

const PersonList = () => {
  const peopleList = getPeople(useStaticQuery(personQuery))
  return (
    <Container>
      {peopleList.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </Container>
  )
}

export default PersonList
