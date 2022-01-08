import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Creer.css'
import Slider from '../components/Slider';

function Career() {

  // const [isOpen,setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }

  // useEffect(()=>{
  //   const hideMenu = () => {
  //     if(window.innerWidth > 768 && isOpen){
  //       setIsOpen(false)
  //       console.log('i resizzed');
  //     }
  //   }
  //   window.addEventListener('resize',hideMenu)
  //   return() => {
  //     window.removeEventListener('resize',hideMenu)
  //   }
  // })

  return (
    // <div className='h-screen flex justify-center items-center bg-red-300'>
    //   <h1 className='text-9xl uppercase font-black '>Career Page</h1>
    // </div>
    <>
      <nav className='careernav flex justify-between bg-white items-center justify-center'>
        <div className='flex'>
          <a href="https://linkedin.com/company/snapp.ir"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4h12a6 6 0 016 6v12a6 6 0 01-6 6H10a6 6 0 01-6-6V10a6 6 0 016-6h0zM10.8 14.8V22"></path><g stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M15.6 22v-4.2a3 3 0 013-3h0a3 3 0 013 3V22M10.8 10.5c-.1 0-.3 0-.3.3a.3.3 0 10.3-.3"></path></g><path d="M0 32V0h32v32z"></path></g></svg></a>
          <a href="https://instagram.com/snapp_team"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4h12a6 6 0 016 6v12a6 6 0 01-6 6H10a6 6 0 01-6-6V10a6 6 0 016-6h0z"></path><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.6 9c-.2 0-.5.2-.5.4a.5.5 0 10.5-.4M19.4 12.6a4.8 4.8 0 11-6.8 6.8 4.8 4.8 0 016.8-6.8"></path><path d="M0 32V0h32v32z"></path></g></svg></a>
          <a href="https://twitter.com/snapp_team"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M25.6 12.5c0 8.4-4.8 14.4-13.2 14.4-4.8 0-6.7-2.5-8.4-4.8m0 0l3.6-1.2c-4-4-4.3-10-1.2-14.4 1.5 2.7 4.2 5.2 7.2 6 .1-3.5 2.5-6 6-6 2.4 0 3.8.9 4.8 2.4H28l-2.4 3.6"></path><path d="M0 32V0h32v32z"></path></g></svg></a>
          <Link to={"*"}><div className='linkcompany bg-green-500 rounded text-white'> <FontAwesomeIcon icon={faArrowCircleRight} />   Company website    </div></Link>
        </div>
        <div><img src='	https://career.snapp.ir/img/snapp_logo.png' /></div>
        <div>
          <Link className='p-4' to={"*"} >Home</Link>
          <Link className='p-4' to={"*"} >Photos</Link>
          <Link className='p-4' to={"*"} >Jobs</Link>
        </div>
      </nav>
      <div className='allthing'>
        <div className='content-container bg-black opacity-30' style={{ height: '45vh' }}>
          <h1> hello </h1>
        </div>
        <div className='context flex flex-col'>
          <div className='innercontext'>
            <h3 className='carabout text-4xl'>ABOUT US </h3>
            <div>
              <div>
                <h3>
                  <span>Snapp is the fastest-growing startup in Iran and is powered by a young team that wants to take Iran’s IT industry to the next level. We are always looking for young talent that wants to make a better tomorrow and have a positive impact on the lifestyle of people. Today we are proud to announce that Snapp is the first and biggest ride-hailing service in Iran with more than 30 million passengers and 2 million drivers in its fleet. We are always expanding the team to reach our ambitious objectives! So if you want to be a part of the best transportation in Iran, just Send your Resume.</span>
                </h3></div>
            </div>
          </div>
          <div className='slider-div justify-center text-center'>
            <h3 className='text-4xl'>PHOTOS</h3>
            <Slider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Career