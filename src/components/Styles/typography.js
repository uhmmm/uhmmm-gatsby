import { fontFace } from 'polished'

import colors from './colors'
import grid from './grid'

const typeColors = {
  day: colors.day,
  grey: colors.grey
}

const type = {
  colors: typeColors,
  base: '16px',
  responsiveBase: Object.assign(
    ...[
      ['0px', '800px', '10px'],
      ['800px', '900px', '11px'],
      ['900px', '1100px', '12px'],
      ['1100px', '1300px', '13px'],
      ['1300px', '1400px', '14px'],
      ['1400px', '2000px', '15px']
    ].map(([start, end, size]) => ({
      [`@media (min-width: ${start}) and (max-width: ${end})`]: {
        fontSize: size
      }
    }))
  ),
  fontFaces: [
    ...[100, 200, 300, 400, 500, 600, 700].map(fontWeight =>
      fontFace({
        fontFamily: 'Sans Sharp',
        fontFilePath: `./fonts/ss/ss-${fontWeight}`,
        fileFormats: ['otf'],
        formatHint: 'opentype',
        fontWeight,
        fontStyle: 'normal'
      })
    ),
    ...[300, 400, 500, 700, 900].map(fontWeight =>
      fontFace({
        fontFamily: 'Untitled Sans',
        fontFilePath: `./fonts/untitledsans/Untitled Sans ${fontWeight}`,
        fileFormats: ['ttf'],
        formatHint: 'truetype',
        fontWeight,
        fontStyle: 'normal'
      })
    )
  ]
}

type.title = {
  fontFamily: 'Sans Sharp',
  fontWeight: 900,
  fontSize: `calc(var(${grid.size.l}) / 1.25)`,
  lineHeight: `calc(var(${grid.size.l}) / 1.25)`
}

type.subtitle = {
  fontFamily: 'Sans Sharp',
  fontWeight: 700,
  fontSize: '1.8575rem',
  lineHeight: '2.25rem'
}

type.header = {
  fontFamily: 'Untitled Sans',
  fontWeight: 500,
  fontSize: '2.125rem',
  lineHeight: '2.25rem'
}

type.body = {
  fontFamily: 'Untitled Sans',
  fontWeight: 400,
  fontSize: '1.8575rem',
  lineHeight: '2.25rem'
}

type.caption = {
  fontFamily: 'Untitled Sans',
  fontWeight: 400,
  fontSize: '1.2rem',
  lineHeight: '2.25rem'
}

type.tag = {
  fontFamily: 'Untitled Sans',
  fontWeight: 400,
  fontSize: '0.875rem',
  lineHeight: '2.25rem'
}

export default type
