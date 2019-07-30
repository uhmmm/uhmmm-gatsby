import React from 'react'
import Person from '../Person/Person'

import erik from './erik.png'
import rj from './rj.jpg'
import reika from './reika.jpg'

import styles from './PersonList.module.css'

const people = [
  {
    name: 'Reika Chavers',
    function: 'To be written',
    image: reika
  },
  {
    name: 'Robert-Jan Korteschiel',
    function: 'Front-End Developer',
    image: rj
  },
  {
    name: 'Erik van Zummeren',
    function: 'Creative Technologist',
    image: erik
  }
]

const PersonList = () => {
  return (
    <div className={styles.container}>
      {people.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}

export default PersonList