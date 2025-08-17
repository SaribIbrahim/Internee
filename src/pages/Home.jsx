import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Partnership from '../components/Partnership'
import Internship from '../components/Internship'


const Home = () => {
  return (
     <>
      <Navbar/>
      <main className='pt-[72px] mt-4'></main>
      <Hero/>
      <Partnership/>
      <Internship/>
    </>
  )
}

export default Home