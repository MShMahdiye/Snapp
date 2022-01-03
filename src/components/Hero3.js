// background-image: url("https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Food.jpg"); height: 51.4286px; background-size: cover; background-position: center center; background-repeat: no-repeat; min-width: calc(100% - 0px); max-width: calc(100% - 0px); transform: translate3d(0px, 0px, 0px);
import React from 'react';
import { Link } from 'react-router-dom'
// import './Hero3.css'
// import './Hero2mobile.css'

function Hero3() {
  return (
    <section className='flex justify-center flex-col bg-gray-100 items-center' id='section4'>
      <h2 className="m-12 text-5xl text-center text-gray-800">در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h2>
      <p className='text-xl text-gray-500 leading-3 p-10'>بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید</p>
      <button className='py-3 px-8 bg-green-500 rounded-lg text-white m-10'>ثبت‌نام رانندگان</button>
      <div>
        <video className='rounded-lg m-10 mb-20' width="1000" height="500" controls >
          <source src="https://web-cdn.snapp.ir/snapp-website/videos/homepage/jazb-ranande.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='flex flex-wrap items-center justify-center mb-20'>
        <div className='box flex items-center m-4 bg-white'><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png" />
          <div><p className='text-xl mb-2'> درآمد تضمینی + پاداش‌های ماهانه و هفتگی</p><p className='text-gray-500'>با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.</p></div>
        </div>
        <div className='box flex items-center m-4 bg-white'><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-hour.png" />
          <div><p className='text-xl mb-2'>ساعت کاری دلخواه</p><p className='text-gray-500'>فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.</p></div>
        </div>
        <div className='box flex items-center m-4 bg-white'><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-benefits.png" />
          <div><p className='text-xl mb-2'>مزایا و خدمات باشگاه رانندگان</p><p className='text-gray-500'>در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.</p></div>
        </div>
        <div className='box flex  items-center m-4 bg-white'><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-carfix.png" />
          <div ><p className='text-xl mb-2'>کار‌فیکس</p><p className='text-gray-500'>باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.</p></div>
        </div>
      </div>


    </section>
  )
}

export default Hero3
