import { css } from '@emotion/core'

const color = {
  dark: 'black',
  grey: 'grey',
  day: 'white',
  day68: 'rgba(255, 255, 255, 0.68)',
  purple: '#a960ff',
  pink: '#ff00ff',
  lightpink: '#fff9ff',
  green: '#00d3ba',
  blue: ' #17c0c0',
  blueHalf: 'rgba(0, 195, 194, 0.5)'
}

const typeColors = {
  day: color.day,
  grey: color.grey
}

let type = {
  base: '13px',
  var: {
    title: {
      fontFamily: 'Sans Sharp',
      fontWeight: 900,
      fontSize: 'calc(var(--grid-size) / 1.25)',
      lineHeight: 'calc(var(--grid-size) / 1.25)',
      color: typeColors.day
    },
    subtitle: {
      fontFamily: 'Sans Sharp',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: '2rem',
      color: typeColors.day
    },
    header: {
      fontFamily: 'Untitled Sans',
      fontWeight: 500,
      fontSize: '2.3rem',
      lineHeight: '3rem',
      color: typeColors.day
    },
    body: {
      fontFamily: 'Untitled Sans',
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: '2.5rem',
      color: typeColors.day
    },
    subtext: {
      fontFamily: 'Untitled Sans',
      fontWeight: 400,
      fontSize: '1.2rem',
      lineHeight: '1.8rem',
      color: typeColors.day
    },
    color: typeColors
  }
}

const templates = {
  title: css(type.var.title),
  subtitle: css(type.var.subtitle),
  header: css(type.var.header),
  body: css(type.var.body),
  subtext: css(type.var.subtext)
}

type = {
  ...type,
  templates
}

const gridSize =
  'calc(var(--grid-outer-width) / var(--grid-outer-columns-count))'
const gridOuterColumnCount = 14
const gridInnerColumnCount = 12
const grid = {
  outer: {
    width: '100vw',
    columnCount: gridOuterColumnCount,
    template: `repeat(
            ${gridOuterColumnCount},
          ${gridSize}
        )`
  },
  inner: {
    width: '100vw',
    columnCount: gridInnerColumnCount,
    template: `repeat(
            ${gridInnerColumnCount},
          ${gridSize}
        )`
  },
  rowTemplate: ` repeat(auto-fill, ${gridSize})`,
  unit: '1rem'
}

const theme = {
  color,
  type,
  grid
}

console.log(theme)
export default theme
