import React from 'react'
import styled from '@emotion/styled'
import { backgrounds, cover } from 'polished'

import { colors, grid } from '../Styles'

const dotSize = '2px'
const dotPerSquare = 7
const dotGap = `calc(var(${grid.size.l}) / ${dotPerSquare})`

const gradients = {
  color: {
    horizontal: `linear-gradient(to right, ${colors.pink} 0%, ${colors.green} 100%)`,
    vertical: `linear-gradient(to bottom, ${colors.pink} 0%, ${colors.green} 100%)`
  },
  dotsOverlay: {
    horizontal: `repeating-linear-gradient(to right, transparent 0px, transparent ${dotSize}, black ${dotSize}, black ${dotGap})`,
    vertical: `repeating-linear-gradient(to bottom, transparent 0px, transparent ${dotSize}, black ${dotSize}, black ${dotGap})`
  },
  pageOverlay: {
    horizontal: `repeating-linear-gradient(to right, black 0%, transparent 5%, transparent 95%, black 100%)`,
    vertical: `repeating-linear-gradient(30deg, black 0, black 400px, transparent 500px, transparent 700px, black 900px)`
  },
  masks: {
    columns: `repeating-linear-gradient(to right, black 0px, black ${dotSize}, transparent ${dotSize}, transparent var(${grid.size.l}))`,
    rows: `repeating-linear-gradient(to bottom, black 0px, black ${dotSize}, transparent ${dotSize}, transparent var(${grid.size.l}))`
  }
}

const maskedBackgrounds = {
  horizontal: {
    ...backgrounds(
      gradients.pageOverlay.horizontal,
      gradients.pageOverlay.vertical,
      gradients.dotsOverlay.vertical,
      gradients.color.horizontal
    ),
    maskImage: gradients.masks.columns
  },
  vertical: {
    ...backgrounds(
      gradients.pageOverlay.horizontal,
      gradients.pageOverlay.vertical,
      gradients.dotsOverlay.horizontal,
      gradients.color.vertical
    ),
    maskImage: gradients.masks.rows
  }
}

const Container = styled.div({
  ...cover(),
  zIndex: '-3'
})

/* vertical gridlines */
const Layer = styled.div(({ background }) => ({
  ...cover(),
  ...background
}))

export default () => (
  <Container>
    <Layer background={maskedBackgrounds.horizontal} />
    <Layer background={maskedBackgrounds.vertical} />
  </Container>
)
