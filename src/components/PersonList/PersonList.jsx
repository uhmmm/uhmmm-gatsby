import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Person from '../Person/Person'

import { media } from '../Styles'

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 1fr)',
  [media.tablet.q]: { display: 'flex', flexDirection: 'column' },
  [media.phone.q]: { display: 'flex', flexDirection: 'column' }
})

const PersonContainer = styled.div({ gridColumn: 'span 3' })

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
        <PersonContainer key={person.name}>
          <Person person={person} />
        </PersonContainer>
      ))}
    </Container>
  )
}

export default PersonList
