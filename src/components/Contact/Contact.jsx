import React from 'react'
import styled from '@emotion/styled'

import PersonList from '../PersonList/PersonList'

import styles from './Contact.module.css'

// const subtitle =

const Subtitle = styled.h2(({ theme: { type, grid } }) => [
  type.templates.subtitle,
  { padding: `0 0 ${grid.unit} 0` }
])

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <Subtitle>contact</Subtitle>
        <p className={styles.text}>
          Uhmmm is based in Amsterdam and New York. Our headquarters are in
          Amsterdam.
        </p>
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
        <h2 className={styles.title}>members</h2>
        <PersonList />
      </div>
    </div>
  )
}

export default Contact
