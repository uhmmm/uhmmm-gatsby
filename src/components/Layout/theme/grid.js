const gridOuterColumnCount = 14
const gridInnerColumnCount = 12
const gridOuterWidth = 100
const gridSize = gridOuterWidth / gridOuterColumnCount

const grid = {
  outer: {
    width: `${gridOuterWidth}vw`,
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
  gridSize,
  rowTemplate: ` repeat(auto-fill, ${gridSize})`,
  unit: '1rem'
}

export default grid
