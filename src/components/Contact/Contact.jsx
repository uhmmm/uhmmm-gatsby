import React from 'react'
import styled from '@emotion/styled'

import PersonList from '../PersonList/PersonList'

import styles from './Contact.module.css'

const Subtitle = styled.h2(({ theme: { type, grid } }) => [
  type.subtitle,
  { padding: `0 0 ${grid.unit} 0` }
])
const Subtext = styled.p(({ theme: { type } }) => [type.subtext])
const ListItem = styled.li(({ theme: { type } }) => [type.subtext])

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <Subtitle>contact</Subtitle>
        <Subtext>
          Uhmmm is based in Amsterdam and New York. Our headquarters are in
          Amsterdam.
        </Subtext>

        <ul>
          <ListItem>Uhmmm.net</ListItem>
          <ListItem>Orteliuskade 4G</ListItem>
          <ListItem>1057AA Amsterdam</ListItem>
          <br />
          <ListItem>info@uhmmm.net</ListItem>
        </ul>
      </div>
      <div className={styles.people}>
        <Subtitle>members</Subtitle>
        <PersonList />
      </div>
    </div>
  )
}

export default Contact
