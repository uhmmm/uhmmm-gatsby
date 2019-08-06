import colors from './colors'
import grid from './grid'
import media from './media'

const typeColors = {
  day: colors.day,
  grey: colors.grey
}

const type = {
  base: '13px',
  colors: typeColors
}

type.title = {
  fontFamily: 'Sans Sharp',
  fontWeight: 900,
  fontSize: grid.gridSize / 1.25,
  lineHeight: grid.gridSize / 1.25,
  color: type.colors.day
}

type.subtitle = {
  fontFamily: 'Sans Sharp',
  fontWeight: 700,
  fontSize: '2rem',
  lineHeight: '2rem',
  color: type.colors.day
}

type.header = {
  fontFamily: 'Untitled Sans',
  fontWeight: 500,
  fontSize: '2.3rem',
  lineHeight: '3rem',
  color: typeColors.day
}

type.body = {
  fontFamily: 'Untitled Sans',
  fontWeight: 400,
  fontSize: '2rem',
  lineHeight: '2.5rem',
  color: type.colors.day
}

type.caption = {
  fontFamily: 'Untitled Sans',
  fontWeight: 400,
  fontSize: '1.2rem',
  lineHeight: '1.8rem',
  color: type.colors.day,
  [media.tablet.q]: type.body,
  [media.phone.q]: type.body
}

type.body.color = type.colors.day

export default type
