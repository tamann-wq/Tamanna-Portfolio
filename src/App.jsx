import { useState } from 'react'
import Header from './Component/Header';
import { Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import ExperienceList from './Component/ExperiencePage/ExperienceList';
import AboutSection from './Component/AboutSection';
import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element = {<AboutSection/>}/>
        <Route path='/experience' element = {<ExperienceList/>}/>
        <Route path='/portfolio' element = {<Portfolio/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
