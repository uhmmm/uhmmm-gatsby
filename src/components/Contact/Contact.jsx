import React from 'react'
import styled from '@emotion/styled'

import PersonList from '../PersonList/PersonList'

const Container = styled.div(({ theme: { grid, util } }) => [
  grid.inner.template,
  { padding: `0 0 ${grid.size} 0` },
  util.scrollOffset
])

const ContactContainer = styled.div(({ theme: { media, grid } }) => ({
  padding: `0 0 ${grid.size} 0`,
  gridColumn: `span ${grid.inner.columnCount / 4}`,
  [media.tablet.q]: { gridColumn: `span ${grid.inner.columnCount / 2}` },
  [media.phone.q]: { display: 'none' }
}))

const MembersContainer = styled.div(({ theme: { media, grid } }) => ({
  gridColumn: `span ${(grid.inner.columnCount / 4) * 3}`,
  [media.tablet.q]: { gridColumn: `span ${grid.inner.columnCount / 2}` },
  [media.phone.q]: { display: 'none' }
}))

const Subtitle = styled.h2(({ theme: { type, grid } }) => [
  type.subtitle,
  { padding: `0 0 ${grid.unit} 0` }
])

const ListItem = styled.li(({ theme: { type } }) => [type.caption])

const Contact = () => {
  return (
    <Container id="contact">
      <ContactContainer>
        <Subtitle>contact</Subtitle>
        <ul>
          <ListItem>
            Uhmmm is based in Amsterdam and New York. Our headquarters are in
            Amsterdam.
          </ListItem>
          <br />
          <ListItem>Uhmmm.net</ListItem>
          <ListItem>Orteliuskade 4G</ListItem>
          <ListItem>1057AA Amsterdam</ListItem>
          <br />
          <ListItem>info@uhmmm.net</ListItem>
        </ul>
      </ContactContainer>
      <MembersContainer>
        <Subtitle>members</Subtitle>
        <PersonList />
      </MembersContainer>
    </Container>
  )
}

export default Contact
