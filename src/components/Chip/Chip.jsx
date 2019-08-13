import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { math, mix } from 'polished'

import { colors, type } from '../Styles'

const Container = styled.div(({ backgroundColor }) => ({
  display: 'inline-block',
  padding: `0 1rem`,
  margin: `0 1rem 3rem 0`,

  background: backgroundColor() || 'unset',

  ...type.tag,
  color: colors.day
}))

const calcColor = ({ elem, color }) => {
  if (!elem.current || !window) {
    return colors[color]
  }

  const position = elem.current.offsetLeft / window.innerWidth

  const colorStops = [
    { color: colors.pink, stop: 0 },
    { color: colors.blue, stop: 0.6 },
    { color: colors.green, stop: 1 }
  ]

  const { leftStop, rightStop } = colorStops.reduce(
    ({ leftStop, rightStop }, currStop) => {
      // second and further
      // if not found
      if (leftStop && !rightStop) {
        // if inbetween
        if (position >= leftStop.stop && position <= currStop.stop) {
          rightStop = currStop
          // if not inbetween
        } else {
          leftStop = currStop
        }
      } else if (!leftStop) {
        leftStop = currStop
      }

      return { leftStop, rightStop }
    },
    {}
  )

  const weightedPos = 1 - position / (rightStop.stop - leftStop.stop)
  const mixedColor = mix(weightedPos, leftStop.color, rightStop.color)

  return mixedColor
}

export default ({ text, color }) => {
  const chipEl = useRef(null)
  return (
    <Container
      ref={chipEl}
      backgroundColor={() => calcColor({ elem: chipEl, color })}
    >
      {text.toUpperCase()}
    </Container>
  )
}
