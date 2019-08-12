import React from 'react'
import styled from '@emotion/styled'
import { backgrounds, cover, transparentize, math } from 'polished'

import { colors, grid } from '../Styles'

const dotSize = '2px'
const dotSizeMask = '8px'
const dotPos = math(`(  ${dotSize} / 2) + 1`)
const dotPerSquare = 7
const dotGap = `calc(var(${grid.size.l}) / ${dotPerSquare})`
const tblack = transparentize(0.3, 'black')

const gradients = {
  color: {
    horizontal: `linear-gradient(to right, ${colors.pink} 0%, ${colors.blue} 60%, ${colors.green} 100%)`,
    vertical: `linear-gradient(to bottom, ${colors.pink} 0%, ${colors.blue} 60%, ${colors.green} 100%)`
  },
  dotsOverlay: {
    circle: `radial-gradient(circle at ${dotPos} ${dotPos}, rgba(0,0,0,0) 0px, rgba(0,0,0,1) ${dotSize})`
  },
  pageOverlay: {
    horizontal: `repeating-linear-gradient(to right, black 0%, transparent 5%, transparent 95%, black 100%)`,
    vertical: `linear-gradient(190deg, transparent 0, transparent 20vh, ${tblack} 30vh, ${tblack} 50vh, ${tblack} 60vh, transparent 70vh, transparent 170vh, black 190vh)`,
    verticalOnce: `linear-gradient(190deg, transparent 0, transparent 20vh, ${tblack} 30vh, ${tblack} 50vh, ${tblack} 60vh, transparent 70vh)`,
    verticalBottom: `linear-gradient(to bottom, transparent 0, transparent 80%, black 85%,  black 100%)`
  },
  verticalLineMasks: {
    columns: `repeating-linear-gradient(to right, black 0px, black ${dotSizeMask}, transparent ${dotSizeMask}, transparent var(${grid.size.l}))`
  },
  horizontalLineMasks: {
    rows: `repeating-linear-gradient(to bottom, black 0px, black ${dotSizeMask}, transparent ${dotSizeMask}, transparent var(${grid.size.l}))`
  }
}

const maskedBackgrounds = {
  horizontalLines: {
    ...backgrounds(
      gradients.pageOverlay.horizontal,
      gradients.pageOverlay.vertical,
      gradients.dotsOverlay.circle,
      gradients.color.vertical
    ),
    backgroundSize: `100% 100%, 100% 100%, ${dotGap} ${dotGap}, 100% 100%`,
    backgroundRepeat: 'no-repeat, no-repeat, repeat, no-repeat',
    backgroundPosition: '0px 0px, 0px 0px, -2px -2px, 0px 0px',
    maskImage: gradients.horizontalLineMasks.rows,
    maskPosition: '-4px -4px'
  },
  verticalLines: {
    ...backgrounds(
      gradients.pageOverlay.horizontal,
      gradients.pageOverlay.verticalBottom,
      gradients.pageOverlay.verticalOnce,
      gradients.dotsOverlay.circle,
      gradients.color.horizontal
    ),
    backgroundSize: `100% 100%, 100% 100%, 100% 100%, ${dotGap} ${dotGap}, 100% 100%`,
    backgroundRepeat: 'no-repeat, no-repeat, no-repeat, repeat, no-repeat',
    backgroundPosition: '0px 0px, 0px 0px, 0px 0px, -2px -2px, 0px 0px',
    maskImage: gradients.verticalLineMasks.columns,
    maskPosition: '-4px -4px'
  }
}

const GradientLayer = styled.div(({ background }) => ({
  ...cover(),
  ...background,
  zIndex: '-3'
}))

export default () => (
  <>
    <GradientLayer background={maskedBackgrounds.horizontalLines} />
    <GradientLayer background={maskedBackgrounds.verticalLines} />
  </>
)
