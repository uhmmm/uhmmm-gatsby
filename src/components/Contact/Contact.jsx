import React from 'react'
import styled from '@emotion/styled'

import PersonList from '../PersonList/PersonList'

import { media, grid, util, type } from '../Styles'

const Container = styled.div({
  ...grid.vars,
  ...grid.inner.template,
  ...util.scrollOffset,
  paddingBottom: `calc(var(${grid.size.l}) * 2)`
})

const ContactContainer = styled.div({
  padding: `0 calc(${grid.unit} *3) var(${grid.size.l}) 0`,
  gridColumn: `span ${grid.inner.count.full / 4}`,
  [media.tablet.q]: {
    gridColumn: `span ${grid.inner.count.tablet / 2}`
  },
  [media.phone.q]: { gridColumn: `span ${grid.inner.count.phone}` }
})

const MembersContainer = styled.div({
  gridColumn: `span ${(grid.inner.count.full / 4) * 3}`,
  [media.tablet.q]: {
    gridColumn: `span ${grid.inner.count.tablet / 2}`
  },
  [media.phone.q]: { display: 'none' }
})

const Subtitle = styled.h2({ ...type.subtitle, padding: `0 0 ${grid.unit} 0` })

const ListItem = styled.li({
  ...type.caption,
  [media.phablet.q]: type.body
})

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
