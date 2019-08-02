import React from 'react'

import styles from './BlocksLayer.module.css'

const BlockImgHorizontal = () => {
  return <div className={styles.blockImgHorizontal} />
}

const BlockImgVertical = () => {
  return <div className={styles.blockImgVertical} />
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
