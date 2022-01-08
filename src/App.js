import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import {Routes,Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';
import Contact from './pages/Contact';
import Panel from './pages/panel';
import Register from './pages/register';
import Club from './pages/club';
import Career from './pages/careeropportunities';
import Blog from './pages/blog';

function App() {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('i resizzed');
      }
    }
    window.addEventListener('resize',hideMenu)
    return() => {
      window.removeEventListener('resize',hideMenu)
    }
  })

  return (
    <>
      {/* <Navbar toggle={toggle} /> */}
      {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
      <Routes>
        <Route path="*" element={<Home />} />
        {/* <Route path="/doctors/:id" element={<Doctor />} /> */}
        <Route path="/menu"  element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/club" element={<Club />} />
        <Route path="/careeropportunities" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
