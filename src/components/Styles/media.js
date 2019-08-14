const media = {
  large: {
    q: '@media (min-width: 1400px)',
    min: 1400
  },
  desktop: {
    q: '@media (min-width: 1100px) and (max-width: 1400px)',
    min: 1100,
    max: 1400
  },
  phablet: {
    q: '@media (max-width: 1100px)',
    max: 1100
  },
  tablet: {
    q: '@media (min-width: 600px) and (max-width: 1100px)',
    min: 600,
    max: 1100
  },
  phone: {
    q: '@media (min-width: 0px) and (max-width: 600px)',
    min: 0,
    max: 600
  }
}

export default media
