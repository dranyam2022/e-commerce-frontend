import React from 'react'
import Carousel from './Carousel'
import styles from './HomeContent.module.css'

function HomeContent() {
  return (
    <section className={styles.homecontent__container}>
      <Carousel />
    </section>
  )
}

export default HomeContent