import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Hero1.css'


function Hero1() {
  const [showMore,setShowMore] = useState(false);
  const show = () => {
    setShowMore(!showMore)
    console.log("show is more");
  }

  
  useEffect(()=>{
    const hideMore = () => {
      if(window.innerWidth < 768 ){
        setShowMore(false)
        console.log('i resizzed');
      }
    }
    window.addEventListener('resize',hideMore)
    return() => {
      window.removeEventListener('resize',hideMore)
    }
  })

  return (
    <section className='flex flex-col justify-center mt-20 bg-gray-100'>
      <h2 class="m-12 text-5xl text-center text-gray-600">یک اپلیکیشن، برای تمام نیاز‌ها</h2>
      <div className='flex flex-wrap justify-center'>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl' style={{width:363}}>
          <img alt="" src="https://snapp.ir/assets/images/snapp-services/cab.svg" width="80" height="80" class=" marginx-sm" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">تاکسی اینترنتی</h4>
            <p class="text-xl text-gray-400 textalign-center">امکان درخواست آنلاین خودرو با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl' style={{width:363}} >
          <img alt="" src="https://snapp.ir/assets/images/snapp-services/bike.svg" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">پیک موتوری</h4>
            <p class="text-xl text-gray-400 textalign-center">حمل و نقل با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://jek.snapp.ir/Redesign-Icons/Pickup-new.png" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">درخواست وانت</h4>
            <p class="text-xl text-gray-400 textalign-center">حمل و نقل با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://snapp.ir/assets/images/snapp-services/food.svg" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">سفارش آنلاین غذا </h4>
            <p class="text-xl text-gray-400 textalign-center">سفارش غذا، نان و شیرینی با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://snapp.ir/assets/images/snapp-services/market.svg" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">سوپرمارکت آنلاین</h4>
            <p class="text-xl text-gray-400 textalign-center">تهیه اقلام روزانه با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">بلیط پرواز داخلی</h4>
            <p class="text-xl text-gray-400 textalign-center">گردشگری با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">بلیط پرواز خارجی</h4>
            <p class="text-xl text-gray-400 textalign-center">گردشگری با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://snapp.ir/assets/images/snapp-services/doctor.svg" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">دکتر</h4>
            <p class="text-xl text-gray-400 textalign-center">درمان با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://jek.snapp.ir/Redesign-Icons/hotel.png" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">رزرو هتل</h4>
            <p class="text-xl text-gray-400 textalign-center">گردشگری با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://snapp.ir/assets/images/snapp-services/trip.svg" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">رزرو اقامتگاه</h4>
            <p class="text-xl text-gray-400 textalign-center">گردشگری با اسنپ</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://jek.snapp.ir/Redesign-Icons/new%20Shop.png" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">فروشگاه</h4>
            <p class="text-xl text-gray-400 textalign-center">خرید از فروشگاه های معتبر شهر</p>
          </div>
        </div>
        <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
          <img alt="" src="https://jek.snapp.ir/Redesign-Icons/bus.png" width="80" height="80" class=" marginx-md" loading="lazy" />
          <div class="flex flex-col">
            <h4 class=" text-xl">بلیط اتوبوس</h4>
            <p class="text-xl text-gray-400 textalign-center">گردشگری با اسنپ</p>
          </div>
        </div>
        {
           showMore ?
           <>
           <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
             <img alt="" src="https://jek.snapp.ir/Redesign-Icons/train.png" width="80" height="80" class=" marginx-md" loading="lazy" />
             <div class="flex flex-col">
               <h4 class=" text-xl">بلیط قطار</h4>
               <p class="text-xl text-gray-400 textalign-center">گردشگری با اسنپ</p>
             </div>
           </div>
           <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
             <img alt="" src="https://snapp.ir/assets/images/snapp-services/club.svg" width="80" height="80" class=" marginx-md" loading="lazy" />
             <div class="flex flex-col">
               <h4 class=" text-xl">اسنپ! ‌کلاب</h4>
               <p class="text-xl text-gray-400 textalign-center">باشگاه مشتریان اسنپ!</p>
             </div>
           </div>
           <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
             <img alt="" src="https://jek.snapp.ir/Redesign-Icons/Service%20Icon.png" width="80" height="80" class=" marginx-md" loading="lazy" />
             <div class="flex flex-col">
               <h4 class=" text-xl">سرمایه‌گذاری</h4>
               <p class="text-xl text-gray-400 textalign-center">خدمات غیر حضوری بورس و سرمایه‌گذاری</p>
             </div>
           </div>
           <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
             <img alt="" src="https://jek.snapp.ir/Redesign-Icons/Moving.png" width="80" height="80" class=" marginx-md" loading="lazy" />
             <div class="flex flex-col">
               <h4 class=" text-xl ">اسباب‌کشی منزل</h4>
               <p class="text-xl text-gray-400 textalign-center">حمل و نقل با اسنپ</p>
             </div>
           </div>
           <div className='flex items-center justify-start pr-4 py-10 m-4 bg-white rounded-2xl'style={{width:363}} >
             <img alt="" src="https://snapp.ir/assets/images/snapp-services/pay.svg" width="80" height="80" class=" marginx-md" loading="lazy" />
             <div class="flex flex-col">
               <h4 class=" text-xl">سرویس اعتباری</h4>
               <p class="text-xl text-gray-400 textalign-center">پرداخت با اسنپ</p>
             </div>
           </div>
           </>
     
          : <div id="showMore"></div>
        }
        <div className='flex items-center justify-center mb-55' id='showMore'>
        <button className={showMore ?'hidden':'flex items-center justify-center py-3 px-15 m-3 bg-white rounded text-green-400 border border-green-500 mb-0'} type="button" style={{width:125,height:55}} onClick={show}>مشاهده همه</button>
        </div>
      </div>
    </section>
  )
}

export default Hero1
