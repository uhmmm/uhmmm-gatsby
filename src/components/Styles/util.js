import grid from './grid'

const util = {
  scrollOffset: {
    paddingTop: grid.size.cssValue,
    marginTop: `calc(${grid.size.cssValue} * -1)`
  }
}

export default util
