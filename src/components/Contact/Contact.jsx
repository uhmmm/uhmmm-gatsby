import React from 'react'
import { withTheme } from 'emotion-theming'
import { css } from '@emotion/core'

import PersonList from '../PersonList/PersonList'

import styles from './Contact.module.css'

const subtitle = ({ type, grid }) => [
  type.templates.subtitle,
  { padding: `0 0 ${grid.unit} 0` }
]

const subtitle2 = ({ type, grid }) => [
  type.templates.subtitle,
  css`
    padding: 0 0 ${grid.unit} 0;
  `
]

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <h2 css={subtitle}>contact</h2>
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

export default withTheme(Contact)
