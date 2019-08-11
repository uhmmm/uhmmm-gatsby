import React from 'react'
import styled from '@emotion/styled'
import { math } from 'polished'

import { colors, type, grid } from '../Styles'

const Container = styled.div(({ backgroundColor }) => ({
  display: 'inline-block',
  padding: math(`${grid.unit} / 2`),
  margin: `0 ${grid.unit} ${grid.unit} 0`,

  background: colors[backgroundColor] || 'unset',

  ...type.caption,
  color: colors.day
}))

export default ({ text, color }) => (
  <Container backgroundColor={color}>{text}</Container>
)
