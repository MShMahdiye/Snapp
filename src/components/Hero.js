import React from 'react';
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className='flex justify-center items-center bg-white w-screen' id='section1'>
      <div className='bg-green-600 h-screen flex flex-col flex-wrap justify-center
    items-center text-right col4' style={{ height: 550 }}>
        <div className='textdiv'>
          <h1 className='text-5xl'>تجربه زندگی راحت‌‌‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکشن اسنپ</h1>
          <p className="text-xl text-right">از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید</p>
        </div>
        <div className='linkdiv flex'>
          <div className='borderdiv'><input className='linkinput p-2 bg-green-600' type={'text'} placeholder='090xxxxxxxxx' /></div>
          <div className='linkbtn1 relative'><button className='linkbtn bg-white m-4 text-green-600 p-2 rounded hover:text-white hover:bg-green-500'>ارسال لینک</button></div>
        </div>
        <div className='flex'>
          <button className='inbtn bg-green-600 m-t-8 text-white py-2 px-5 rounded'>ورود به وب اپلیکیشن اسنپ</button>
        </div>
      </div>
      <div className='bg-blue-300 h-500'>
        <img alt='carhead' className='carhead object-cover h-screen' style={{ height: 550 }} src="https://web-cdn.snapp.ir/snapp-website/images/homepage/intro_mobile.jpg" />
      </div>
    </section>
  )
}

export default Hero
