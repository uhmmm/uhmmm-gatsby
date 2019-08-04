import React from 'react'
import MediaQuery from 'react-responsive'

import styles from './BlocksLayer.module.css'

const BlockImgHorizontal = () => {
  return (
    <MediaQuery query="(min-width: 600px)">
      <div className={styles.blockImgHorizontal} />
    </MediaQuery>
  )
}

const BlockImgVertical = () => {
  return (
    <MediaQuery query="(min-width: 1100px)">
      <div className={styles.blockImgVertical} />
    </MediaQuery>
  )
}

const BlockNav = () => {
  return <div className={styles.blockNav} />
}

const BlocksLayer = () => (
  <div className={styles.container}>
    <BlockNav />
    <BlockImgHorizontal />
    <BlockImgVertical />
  </div>
)

export default BlocksLayer
