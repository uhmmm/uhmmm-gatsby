import React from 'react'
import styled from '@emotion/styled'
import { backgrounds, cover, transparentize, math } from 'polished'

import { colors, grid } from '../Styles'

const dotSize = '2px'
const dotSizeAlias = '3px'
const dotPos = math(`(  ${dotSize} / 2) + 1`)
const dotPerSquare = 7
const dotGap = `calc(var(${grid.size.l}) / ${dotPerSquare})`
const tblack = transparentize(0.3, 'black')

const gradients = {
  color: {
    horizontal: `linear-gradient(to right, ${colors.pink} 0%, ${colors.green} 100%)`,
    vertical: `linear-gradient(to bottom, ${colors.pink} 0%, ${colors.green} 100%)`
  },
  dotsOverlay: {
    horizontal: `repeating-linear-gradient(to right, transparent 0px, transparent ${dotSize}, black ${dotSize}, black ${dotGap})`,
    vertical: `repeating-linear-gradient(to bottom, transparent 0px, transparent ${dotSize}, black ${dotSize}, black ${dotGap})`,
    circle: `radial-gradient(circle at ${dotPos} ${dotPos}, rgba(0,0,0,0) 0px, rgba(0,0,0,1) ${dotSize})`
  },
  pageOverlay: {
    horizontal: `repeating-linear-gradient(to right, black 0%, transparent 5%, transparent 95%, black 100%)`,
    vertical: `linear-gradient(210deg, transparent 0, transparent 20vh, ${tblack} 30vh, ${tblack} 50vh, ${tblack} 60vh, transparent 70vh, transparent 120vh, black 130vh)`,
    verticalWithout: `linear-gradient(210deg, transparent 0, transparent 20vh, ${tblack} 30vh, ${tblack} 50vh, ${tblack} 60vh, transparent 70vh)`
  },
  // verticalLineMasks: {
  //   gaps: `repeating-linear-gradient(to bottom, black 0px, black ${dotSize}, transparent ${dotSize}, transparent ${dotGap})`,
  //   columns: `repeating-linear-gradient(to right, black 0px, black ${dotSize}, transparent ${dotSize}, transparent var(${grid.size.l}))`
  // },
  horizontalLineMasks: {
    rows: `repeating-linear-gradient(to bottom, black 0px, black ${dotSize}, transparent ${dotSize}, transparent var(${grid.size.l}))`,
    rowsAlias: `repeating-linear-gradient(to bottom, black 0px, black ${dotSizeAlias}, transparent ${dotSizeAlias}, transparent var(${grid.size.l}))`,
    circle: `radial-gradient(circle at ${dotPos} ${dotPos}, rgba(0,0,0,1) 0px, rgba(0,0,0,0) ${dotSize});`
  }
}

const maskedBackgrounds = {
  horizontalLines: {
    ...backgrounds(
      // gradients.pageOverlay.horizontal,
      // gradients.pageOverlay.vertical,
      // gradients.dotsOverlay.horizontal,
      gradients.dotsOverlay.circle,
      gradients.color.vertical
    ),
    backgroundSize: `${dotGap} ${dotGap}, 100% 100%`,
    backgroundRepeat: 'repeat, no-repeat',
    backgroundPosition: '-1px -1px, 0px 0px',
    maskImage: gradients.horizontalLineMasks.rowsAlias,
    // maskImage: `${gradients.horizontalLineMasks.circle}`,
    // maskSize: `${dotGap} ${dotGap}`,
    // maskRepeat: 'repeat',
    maskPosition: '-1px -1px'
  }
  // verticalLines: {
  //   ...backgrounds(
  //     gradients.pageOverlay.horizontal,
  //     gradients.pageOverlay.verticalWithout,
  //     gradients.dotsOverlay.vertical,
  //     gradients.color.horizontal
  //   ),
  //   maskImage: gradients.verticalLineMasks.columns
  // }
}

const GradientLayer = styled.div(({ background }) => ({
  ...cover(),
  ...background,
  zIndex: '-3'
}))

export default () => (
  <>
    <GradientLayer background={maskedBackgrounds.horizontalLines} />
    {/* <GradientLayer background={maskedBackgrounds.verticalLines} /> */}
  </>
)
