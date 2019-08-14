import React from 'react'
import styled from '@emotion/styled'
import { math, cover } from 'polished'

import { grid, media } from '../Styles'
import circle from './circle.svg'
import circles from './circles.svg'
import cross from './cross.svg'

const DecorationLayerContainer = styled.div({
  ...grid.outer.template,
  ...cover(),
  zIndex: '-1'
})

const DecorationContainer = styled.div(({ areas }) => ({
  gridArea: areas.full,
  position: 'relative',

  [media.tablet.q]: {
    gridArea: areas.tablet,
    display: !areas.tablet && 'none'
  },
  [media.phone.q]: {
    gridArea: areas.phone,
    display: !areas.phone && 'none'
  }
}))

const large = '4rem'
const largePos = math(`${large} / 2 * -1`)
const small = '2rem'
const smallPos = math(`${small} / 2 * -1`)

const DecorationImg = styled.img(({ size }) => ({
  position: 'absolute',
  width: size !== 'small' ? large : small,
  left: size !== 'small' ? largePos : smallPos,
  top: size !== 'small' ? largePos : smallPos
}))

const Decoration = ({ areas, image, size }) => (
  <DecorationContainer areas={areas}>
    <DecorationImg src={image} alt="" size={size} />
  </DecorationContainer>
)

const decorations = [
  {
    areas: {
      full: '2 / 4 / 3 / 5',
      tablet: '2 / 4 / 3 / 5',
      phone: '2 / 5 / 3 / 6'
    },
    image: cross,
    size: 'small'
  },
  {
    areas: {
      full: '2 / 10 / 3 / 11',
      tablet: '2 / 8 / 3 / 9',
      phone: '7 / 6 / 8 / 9'
    },
    image: circle
  },
  {
    areas: {
      full: '3 / 14 / 4 / 15',
      tablet: '5 / 10 / 6 / 11',
      phone: '15 / 6 / 16 / 7'
    },
    image: circles
  },
  {
    areas: {
      full: '5 / 11 / 6 / 12'
    },
    image: cross,
    size: 'small'
  },
  {
    areas: {
      full: '8 / 12 / 9 / 13'
    },
    image: circle
  },
  {
    areas: {
      full: '12 / 9 / 13 / 10'
    },
    image: circles
  }
]

const DecorationLayer = () => {
  return (
    <DecorationLayerContainer>
      {decorations.map(item => {
        return (
          <Decoration
            key={item.areas.full}
            areas={item.areas}
            image={item.image}
            size={item.size}
          />
        )
      })}
    </DecorationLayerContainer>
  )
}

export default DecorationLayer
