import media from './media'

const grid = {
  outer: {
    columnCount: {
      full: 14,
      tablet: 10,
      phone: 6
    },
    width: {}
  },
  inner: {
    columnCount: {
      full: 12,
      tablet: 8,
      phone: 4
    },
    width: {}
  },
  unit: '1rem',
  size: {}
}

// vars defs
grid.outer.width.base = 100
grid.outer.width.cssName = '--grid-outer-width'
grid.outer.width.cssVar = `var(${grid.outer.width.cssName})`

grid.inner.width.cssName = '--grid-inner-width'
grid.inner.width.cssVar = `var(${grid.inner.width.cssName})`

grid.size.cssName = '--grid-size'
grid.size.cssVar = `var(${grid.size.cssName})`

grid.outer.columnCount.cssName = '--grid-outer-column-count'
grid.inner.columnCount.cssName = '--grid-inner-column-count'
grid.outer.columnCount.cssVar = `var(${grid.outer.columnCount.cssName})`
grid.inner.columnCount.cssVar = `var(${grid.inner.columnCount.cssName})`

// var declarations with media queries
grid.vars = {
  [grid.outer.width.cssName]: `${grid.outer.width.base}vw`,
  [grid.inner.width
    .cssName]: `calc(${grid.outer.width.cssVar} - ${grid.outer.columnCount.cssVar})`,
  [grid.size
    .cssName]: `calc(${grid.outer.width.cssVar} / ${grid.outer.columnCount.cssVar})`,
  [grid.outer.columnCount.cssName]: grid.outer.columnCount.full,
  [grid.inner.columnCount.cssName]: grid.inner.columnCount.full,
  [media.tablet.q]: {
    [grid.outer.columnCount.cssName]: grid.outer.columnCount.tablet,
    [grid.inner.columnCount.cssName]: grid.inner.columnCount.tablet
  },
  [media.phone.q]: {
    [grid.outer.columnCount.cssName]: grid.outer.columnCount.phone,
    [grid.inner.columnCount.cssName]: grid.inner.columnCount.phone
  }
}

// include grid vars in a grid declaration
grid.outer.template = [
  grid.vars,
  {
    display: `grid`,
    gridTemplateColumns: `repeat(${grid.outer.columnCount.cssVar}, ${grid.size.cssVar})`
  }
]

grid.inner.template = [
  grid.vars,
  {
    display: `grid`,
    gridTemplateColumns: `repeat(${grid.inner.columnCount.cssVar}, ${grid.size.cssVar})`
  }
]

export default grid
