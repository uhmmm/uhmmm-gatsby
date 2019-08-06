const gridOuterWidth = 100
const gridOuterColumnCount = 14
const gridSize = gridOuterWidth / gridOuterColumnCount

const gridInnerWidth = 100 - gridSize
const gridInnerColumnCount = 12

const grid = {
  outer: {
    width: `${gridOuterWidth}vw`,
    widthRaw: gridOuterWidth,
    columnCount: gridOuterColumnCount
  },
  inner: {
    width: `${gridInnerWidth}vw`,
    widthRaw: gridInnerWidth,
    columnCount: gridInnerColumnCount
  },
  size: `${gridSize}vw`,
  sizeRaw: gridSize,
  unit: '1rem'
}

grid.outer.template = {
  display: `grid`,
  gridTemplateColumns: `repeat(${grid.outer.columnCount}, ${grid.size})`
}

grid.inner.template = {
  display: `grid`,
  gridTemplateColumns: `repeat(${grid.inner.columnCount}, ${grid.size})`
}

export default grid
