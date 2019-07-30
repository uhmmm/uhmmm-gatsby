import React from 'react'

import PersonList from '../PersonList/PersonList'

import styles from './Contact.module.css'

const Contact = () => (
  <div className={styles.outer}>
    <div className={styles.container}>
      <div className={styles.contact}>
        <h3 className={styles.title}>Contact</h3>
        <ul>
          <li className={styles.text}>06-TOVE</li>
          <li className={styles.text}>0info@uhmmm.nl</li>
        </ul>
      </div>
      <div className={styles.people}>
        <h3 className={styles.title}>Members</h3>
        <PersonList />
      </div>
    </div>
  </div>
)

export default Contact