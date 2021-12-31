import React from 'react';
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className='flex justify-center items-center' id='section1'>
      <div className='bg-green-400 h-screen flex flex-col flex-wrap justify-center
    items-center text-right col4 pr-60' style={{height:500}}>
        <h1 className='text-5xl'>تجربه زندگی راحت‌‌‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکشن اسنپ</h1>
        <p class="text-xl text-right">از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید</p>
        <div>
          <input className='p-2 rounded opacity-80 hover:opacity-70' placeholder='090xxxxxxxxx' />
          <button className='bg-white m-4 text-green-400 p-2 rounded hover:text-white hover:bg-green-500'>دریافت لینک</button>
        </div>
        <div className='flex'>
          <button className='bg-white m-t-8 text-green-400 py-2 px-5 rounded'>ورود به وب اپلیکیشن اسنپ</button>
        </div>
      </div>
      <div className='bg-blue-300 h-500'>
        <img alt='carhead'className='object-cover h-screen' style={{height:500}} src="https://web-cdn.snapp.ir/snapp-website/images/homepage/intro_mobile.jpg" />
      </div>
    </section>
  )
}

export default Hero
