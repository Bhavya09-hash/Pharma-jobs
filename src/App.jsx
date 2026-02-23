import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Navbar/Nav';
import Job from './Components/Job/Job';
import Stats from './Components/Stats/Stats';
import Footer from './Components/Footer/Footer';

function App() {
  

  return (
    <>
    <Nav />
    <Job />
    <Stats />
    <Footer />
    </>
  )
}

export default App
