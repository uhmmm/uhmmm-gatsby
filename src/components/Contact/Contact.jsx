import React from 'react'

import PersonList from '../PersonList/PersonList'

import styles from './Contact.module.css'

const Contact = () => (
  <div className={styles.container} id="contact">
    <div className={styles.contact}>
      <h3 className={styles.title}>contact</h3>
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
      <h3 className={styles.title}>members</h3>
      <PersonList />
    </div>
  </div>
)

export default Contact
