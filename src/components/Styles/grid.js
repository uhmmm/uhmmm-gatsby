import media from './media'

const grid = {
  outer: {
    count: {
      full: 14,
      tablet: 10,
      phone: 6,
      l: '--grid-outer-column-count'
    },
    width: {
      base: 100,
      l: '--grid-outer-width'
    }
  },
  inner: {
    count: {
      full: 12,
      tablet: 8,
      phone: 4,
      l: '--grid-inner-column-count'
    },
    width: {}
  },
  unit: '1rem',
  size: {
    l: '--grid-size'
  }
}

// var declarations with media queries
grid.vars = {
  [grid.outer.count.l]: grid.outer.count.full,
  [grid.inner.count.l]: grid.inner.count.full,
  [media.tablet.q]: {
    [grid.outer.count.l]: grid.outer.count.tablet,
    [grid.inner.count.l]: grid.inner.count.tablet
  },
  [media.phone.q]: {
    [grid.outer.count.l]: grid.outer.count.phone,
    [grid.inner.count.l]: grid.inner.count.phone
  },
  [grid.outer.width.l]: `${grid.outer.width.base}vw`,
  [grid.size.l]: `calc(var(${grid.outer.width.l}) / var(${grid.outer.count.l}))`
}

// include grid vars in a grid declaration
grid.outer.template = {
  ...grid.vars,
  display: `grid`,
  gridTemplateColumns: `repeat(var(${grid.outer.count.l}), var(${grid.size.l}))`
}

grid.inner.template = {
  ...grid.vars,
  display: `grid`,
  gridTemplateColumns: `repeat(var(${grid.inner.count.l}), var(${grid.size.l}))`
}

export default grid
