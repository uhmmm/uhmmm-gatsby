import React from 'react'
import styled from '@emotion/styled'

import PersonList from '../PersonList/PersonList'

import styles from './Contact.module.css'

const Subtitle = styled.h2(({ theme: { type, grid } }) => [
  type.subtitle,
  { padding: `0 0 ${grid.unit} 0` }
])
const Caption = styled.p(({ theme: { type } }) => [type.caption])
const ListItem = styled.li(({ theme: { type } }) => [type.caption])
const MembersContainer = styled.div(({ theme: { media } }) => ({
  gridColumn: 'span 9',
  [media.tablet]: { gridColumn: 'span 4' },
  [media.phone]: { display: 'none' }
}))

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <Subtitle>contact</Subtitle>
        <Caption>
          Uhmmm is based in Amsterdam and New York. Our headquarters are in
          Amsterdam.
        </Caption>

        <ul>
          <ListItem>Uhmmm.net</ListItem>
          <ListItem>Orteliuskade 4G</ListItem>
          <ListItem>1057AA Amsterdam</ListItem>
          <br />
          <ListItem>info@uhmmm.net</ListItem>
        </ul>
      </div>
      <MembersContainer>
        <Subtitle>members</Subtitle>
        <PersonList />
      </MembersContainer>
    </div>
  )
}

export default Contact
