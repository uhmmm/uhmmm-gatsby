import React from 'react'
import Person from '../Person/Person'

import erik from './erik.png'

import styles from './PersonList.module.css'

export default () => {
  const people = [
    {
      name: 'Tove Oegema',
      function: 'Project Manager',
      image: erik
    },
    {
      name: 'Robert-Jan Korteschiel',
      function: 'Full-stack Developer',
      image: erik
    },
    {
      name: 'Erik van Zummeren',
      function: 'Creative Technologist',
      image: erik
    }
  ]

  return (
    <div className={styles.container}>
      {people.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}
