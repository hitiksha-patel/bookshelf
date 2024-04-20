import React from 'react'
import Navbar from '../components/Navbar'
import CourseList from '../components/CourseList'
import Footer from '../components/Footer'


function Courses() {
  return (
    <>
        <Navbar />
        <div className='min-h-screen'>
            <CourseList />
        </div>
        <Footer />
    </>
  )
}

export default Courses;
