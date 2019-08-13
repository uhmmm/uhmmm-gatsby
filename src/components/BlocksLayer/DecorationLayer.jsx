import React from 'react'
import styled from '@emotion/styled'
import { math, cover } from 'polished'

import { grid, media } from '../Styles'
import circle from './circle.svg'

const DecorationLayerContainer = styled.div({
  ...grid.outer.template,
  ...cover(),
  zIndex: '-1'
})

const DecorationContainer = styled.div(({ area, hide }) => ({
  gridArea: area,
  position: 'relative',
  [media.phablet.q]: {
    display: hide && 'none'
  }
}))

const circleWidth = '5rem'
const circlePos = math(`${circleWidth} / 2 * -1`)
const Decoration = styled.img(() => ({
  position: 'absolute',
  width: circleWidth,
  left: circlePos,
  top: circlePos
}))

const DecorationLayer = () => {
  return (
    <DecorationLayerContainer>
      <DecorationContainer area="2 / 10 / 3 / 11">
        <Decoration src={circle} alt="" />
      </DecorationContainer>
    </DecorationLayerContainer>
  )
}

export default DecorationLayer
