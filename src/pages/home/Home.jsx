import React from 'react'
import styles from './Home.module.css'
import NavBar from '../../components/nav/NavBar'
import HomeContent from '../../components/homecontent/HomeContent'

function Home() {
  return (
    <div className={styles.home__container}>
      <NavBar />
      <HomeContent />
    </div>
  )
}

export default Home