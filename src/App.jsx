import './App.css'
import Hero from './components/Hero'
import Internship from './components/Internship'
import Navbar from './components/Navbar'
import Partnership from './components/Partnership'

function App() {
  

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

export default App
