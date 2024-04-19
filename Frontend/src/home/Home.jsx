import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBooks from '../components/FreeBooks'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='dark:bg-slate-900 dark:text:white'>
      <Navbar />
      <Banner />
      <FreeBooks />
      <Footer />
    </div>
  )
}

export default Home
