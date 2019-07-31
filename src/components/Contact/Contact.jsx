import React from 'react'

import * as Scroller from 'react-scroll'
import PersonList from '../PersonList/PersonList'

import styles from './Contact.module.css'

const Contact = () => (
  <Scroller.Element name="contact">
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3 className={styles.title}>Contact</h3>
          <ul>
            <li className={styles.text}>Uhmmm HQ</li>
            <li className={styles.text}>Orteliuskade 4G</li>
            <li className={styles.text}>1057AA Amsterdam</li>
          </ul>
          <br />
          <ul>
            <li className={styles.text}>info@uhmmm.net</li>
          </ul>
        </div>
        <div className={styles.people}>
          <h3 className={styles.title}>Members</h3>
          <PersonList />
        </div>
      </div>
    </div>
  </Scroller.Element>
)

export default Contact
