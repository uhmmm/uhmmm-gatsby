import React from 'react'
import styled from '@emotion/styled'

import PersonList from '../PersonList/PersonList'

import styles from './Contact.module.css'

const Subtitle = styled.h2(({ theme: { type, grid } }) => [
  type.templates.subtitle,
  { padding: `0 0 ${grid.unit} 0` }
])

const Subtext = styled.p(({ theme: { type } }) => [type.templates.subtext])

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
          <li className={styles.text}>Uhmmm.net</li>
          <li className={styles.text}>Orteliuskade 4G</li>
          <li className={styles.text}>1057AA Amsterdam</li>
        </ul>
        <br />
        <ul>
          <li className={styles.text}>info@uhmmm.net</li>
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
