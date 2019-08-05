const color = {
  dark: 'black',
  grey: 'grey',
  day: 'white',
  day68: rgba(255, 255, 255, 0.68),
  purple: '#a960ff',
  pink: '#ff00ff',
  lightpink: '#fff9ff',
  green: '#00d3ba',
  blue: ' #17c0c0',
  blueHalf: rgba(0, 195, 194, 0.5)
}

const type = {
  base: '13px',
  title: {
    family: 'Sans Sharp',
    weight: 900,
    size: 'calc(var(--grid-size) / 1.25)',
    lineheight: 'calc(var(--grid-size) / 1.25)'
  },
  subtitle: {
    family: 'Sans Sharp',
    weight: 700,
    size: '2rem',
    lineheight: '2rem'
  },
  header: {
    family: 'Untitled Sans',
    weight: 500,
    size: '2.3rem',
    lineheight: '3rem'
  },
  body: {
    family: 'Untitled Sans',
    weight: 400,
    size: '2rem',
    lineheight: '2.5rem'
  },
  subtext: {
    family: 'Untitled Sans',
    weight: 400,
    size: '1.2rem',
    lineheight: '1.8rem'
  },
  color: {
    day: color.day,
    grey: color.grey
  }
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

export default theme
