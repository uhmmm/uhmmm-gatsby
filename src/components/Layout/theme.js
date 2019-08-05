const colors = {
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
  day: colors.day,
  grey: colors.grey
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

const type = {
  base: '13px',
  title: {
    fontFamily: 'Sans Sharp',
    fontWeight: 900,
    fontSize: gridSize / 1.25,
    lineHeight: gridSize / 1.25,
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
  caption: {
    fontFamily: 'Untitled Sans',
    fontWeight: 400,
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
    color: typeColors.day
  },
  colors: typeColors
}

const media = {
  tablet: '@media (min-width: 600px and max-width: 1100px)',
  phone: '@media (min-width: 0px and max-width: 600px)'
}

type.caption = {
  ...type.caption,
  [media.tablet]: type.body,
  [media.phone]: type.body
}

const theme = {
  colors,
  type,
  grid,
  media
}

export default theme
