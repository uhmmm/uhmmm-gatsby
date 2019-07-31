import React from 'react'
import Person from '../Person/Person'

import erik from './erik.png'
import rj from './rj.png'
import reika from './reika.png'

import styles from './PersonList.module.css'

const people = [
  {
    name: 'Reika Chavers',
    email: 'reika@uhmmm.net',
    image: reika
  },
  {
    name: 'Robert-Jan Korteschiel',
    email: 'robert-jan@uhmmm.net',
    image: rj
  },
  {
    name: 'Erik van Zummeren',
    email: 'erik@uhmmm.net',
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
