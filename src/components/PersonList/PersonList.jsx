import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Person from '../Person/Person'

import erik from './erik.png'
import rj from './rj.png'
import reika from './reika.png'

import styles from './PersonList.module.css'

const people = [
  {
    name: 'Reika Chavers',
    email: 'reika@uhmmm.net',
    image: reika
  },
  {
    name: 'Robert-Jan Korteschiel',
    email: 'robert-jan@uhmmm.net',
    image: rj
  },
  {
    name: 'Erik van Zummeren',
    email: 'erik@uhmmm.net',
    image: erik
  }
]

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

const PersonListRaw = ({ data }) => {
  console.log('fromlist', people)
  console.log('fromquery', data)
  return (
    <div className={styles.container}>
      {people.map(person => (
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
