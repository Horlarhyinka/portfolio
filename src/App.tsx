import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers';
import Portfolio from './containers/portfolio';
import Project from './containers/project';
// import Head from './components/head';
import SideNav from './components/side-nav';
import { useState } from 'react';
import Profile from './containers/profile';

function App() {

  const [navOpen, setNavOpen] = useState<boolean>(false)

  const toggleNav = () =>{
    if(navOpen){
      setNavOpen(false)
    }else{
      setNavOpen(true)
    }
  }

  return (
    <>
    {/* <Head toggleNav={toggleNav} /> */}
    {navOpen && <SideNav toggleNav={toggleNav} />}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Profile/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/projects/:projectId' element={<Project/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
