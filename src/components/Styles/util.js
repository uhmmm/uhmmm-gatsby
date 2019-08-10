import grid from './grid'

const util = {
  scrollOffset: {
    paddingTop: `var(${grid.size.l})`,
    marginTop: `calc(var(${grid.size.l}) * -1)`
  }
}

export default util
