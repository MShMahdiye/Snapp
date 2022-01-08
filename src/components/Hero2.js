// background-image: url("https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Food.jpg"); height: 51.4286px; background-size: cover; background-position: center center; background-repeat: no-repeat; min-width: calc(100% - 0px); max-width: calc(100% - 0px); transform: translate3d(0px, 0px, 0px);
import React from 'react';
import { Link } from 'react-router-dom'
import './Hero2.css'
// import './Hero2mobile.css'

function Hero2() {
  return (
    <section className='flex justify-center flex-col items-center bg-white w-screen' id='section3'>
      <div className='imgfood'><a></a></div>
      <div className='superapp'>
        <div className='superimg'></div>
        <div className='supertext'>
          <h2 class="">سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h2>
          <p class="">اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.</p>
        </div>
      </div>
      <div className='cdncollection'>
        <div className='items'>
          <div className='item bg-gray-100 m-10 py-2 px-10 rounded-lg'><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-easy.png" height="190" loading="lazy" />
          </div>
          <div className='text'>
            <p>آسان</p>
            <p>برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.</p>
          </div>
        </div>
        <div className='items'>
          <div className='item bg-gray-100 m-10 py-2 px-10 rounded-lg'><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-fast.png" height="190" loading="lazy" /></div>
          <div className='text'>
            <p>سریع</p>
            <p>قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.</p>
          </div>
        </div>
        <div className='items'>
          <div className='item bg-gray-100 m-10 py-2 px-10 rounded-lg'><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-eco.png" height="190" loading="lazy" /></div>
          <div className='text'>
            <p>به صرفه</p>
            <p>سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero2
