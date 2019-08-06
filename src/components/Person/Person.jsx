import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import styles from './Person.module.css'
import { grid, media, type } from '../Styles'

const Container = styled.div({
  gridColumn: grid.inner.columnCount.full,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  [media.phablet.q]: { display: 'flex', flexDirection: 'column' }
})

const ListItem = styled.li([type.caption])
const ListItemEmail = styled(ListItem)({
  color: type.colors.grey
})

export default ({ person }) => (
  <Container>
    <Img
      className={styles.image}
      fluid={person.image.childImageSharp.fluid}
      alt="profile"
    />
    <ul className={styles.details}>
      <ListItem>{person.name}</ListItem>
      <ListItemEmail>{person.email}</ListItemEmail>
    </ul>
  </Container>
)
