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

const DecorationContainer = styled.div(({ area }) => ({
  gridArea: area,
  position: 'relative',
  [media.phablet.q]: {
    display: 'none'
  }
}))

const large = '4rem'
const largePos = math(`${large} / 2 * -1`)
const small = '2rem'
const smallPos = math(`${small} / 2 * -1`)

const Decoration = styled.img(({ size }) => ({
  position: 'absolute',
  width: size !== 'small' ? large : small,
  left: size !== 'small' ? largePos : smallPos,
  top: size !== 'small' ? largePos : smallPos
}))

const DecorationLayer = () => {
  return (
    <DecorationLayerContainer>
      <DecorationContainer area="2 / 4 / 3 / 5">
        <Decoration src={cross} alt="" size="small" />
      </DecorationContainer>
      <DecorationContainer area="2 / 10 / 3 / 11">
        <Decoration src={circle} alt="" />
      </DecorationContainer>
      <DecorationContainer area="3 / 14 / 4 / 15">
        <Decoration src={circles} alt="" />
      </DecorationContainer>
      <DecorationContainer area="5 / 11 / 6 / 12">
        <Decoration src={cross} alt="" size="small" />
      </DecorationContainer>
      <DecorationContainer area="8 / 12 / 9 / 13">
        <Decoration src={circle} alt="" />
      </DecorationContainer>
      <DecorationContainer area="12 / 9 / 13 / 10">
        <Decoration src={circles} alt="" />
      </DecorationContainer>
    </DecorationLayerContainer>
  )
}

export default DecorationLayer
