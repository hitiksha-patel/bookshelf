import React from 'react'
import Navbar from '../components/Navbar'
import AllCourses from '../components/AllCourses'
import Footer from '../components/Footer'


function Courses() {
  return (
    <>
        <Navbar />
        <div className='min-h-screen'>
            <AllCourses />
        </div>
        <Footer />
    </>
  )
}

export default Courses;
