import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import { grid, media, type, colors } from '../Styles'

const Container = styled.div({
  gridColumn: grid.inner.count.full,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  [media.phablet.q]: { display: 'flex', flexDirection: 'column' }
})

const ListItem = styled.li({
  ...type.caption,
  [media.phablet.q]: type.body
})

const ListItemEmail = styled(ListItem)({
  color: colors.lightGrey
})

const ImgStyled = styled(Img)({
  display: 'block',
  gridColumn: 'span 1',
  background: 'white',
  borderRadius: '100%',
  width: '80%',
  margin: '10%',
  [media.phablet.q]: {
    display: 'none'
  }
})

const DetailsList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  gridColumn: 'span 2',
  justifyContent: 'center',
  [media.phablet.q]: {
    paddingBottom: `var(${grid.size.l})`
  }
})

export default ({ person }) => (
  <Container>
    <ImgStyled fluid={person.image.childImageSharp.fluid} alt="profile" />
    <DetailsList>
      <ListItem>{person.name}</ListItem>
      <ListItemEmail>{person.email}</ListItemEmail>
    </DetailsList>
  </Container>
)
