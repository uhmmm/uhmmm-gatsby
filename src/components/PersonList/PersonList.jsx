import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Person from '../Person/Person'

const Container = styled.div(({ theme: { media } }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 1fr)',
  [media.tablet.q]: { display: 'flex', flexDirection: 'column' }
}))

const personQuery = graphql`
  query PersonQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(people)/" } }) {
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

const PersonList = () => {
  const peopleList = useStaticQuery(personQuery).allMarkdownRemark.edges.map(
    person => person.node.frontmatter
  )
  return (
    <Container>
      {peopleList.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </Container>
  )
}

export default PersonList
