import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='flex text-xl px-30 justify-between mr-2 items-center h-16 bg-white text-gray-500 pb-10 pt-10'>
      {/* <p>Copyright  © 2002 - 2021 All rights</p> */}
      <div className='pr-8 font-30 md:block hidden' >
        <Link className='p-4' to={"*"} >خانه</Link>
        <Link className='p-4' to={"/careeropportunities"} >فرصت‌های شغلی</Link>
        <Link className='p-4' to={"/blog"} >بلاگ</Link>
        <Link className='p-4' to={"/club"} >باشگاه رانندگان</Link>
        <Link className='p-4' to={"/register"} >ثبت نام راننده اسنپ</Link>
        <Link className='p-4' to={"/panel"} >پنل سازمانی</Link>
        <Link className='p-4' to={"/about"} >درباره ما</Link>
        <Link className='p-4' to={"/contact"}>تماس با ما</Link>
      </div>
      <div className='flex'>
        <a href="tg://resolve?domain=snappofficial"><i class="icon-0-2-65 icon-d5-0-2-119 " aria-hidden="true"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M15.7 22.5L13 25.2a.9.9 0 01-1.5-.4l-1.8-6"></path><path d="M18.8 14.6l-5.2 4.7c-.5.5-.5 1.3 0 1.7l7.2 5.3c.7.5 1.8.2 2-.7L26.2 9a1 1 0 00-1.4-1.2l-20.7 8a.7.7 0 000 1.3l5.5 1.7"></path></g><path d="M0 32V0h32v32z"></path></g></svg></i></a>
        <a href="https://linkedin.com/company/snapp.ir"><i class="icon-0-2-65 icon-d4-0-2-118 " aria-hidden="true"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4h12a6 6 0 016 6v12a6 6 0 01-6 6H10a6 6 0 01-6-6V10a6 6 0 016-6h0zM10.8 14.8V22"></path><g stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M15.6 22v-4.2a3 3 0 013-3h0a3 3 0 013 3V22M10.8 10.5c-.1 0-.3 0-.3.3a.3.3 0 10.3-.3"></path></g><path d="M0 32V0h32v32z"></path></g></svg></i></a>
        <a href="https://instagram.com/snapp_team"><i class="icon-0-2-65 icon-d2-0-2-116 " aria-hidden="true"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4h12a6 6 0 016 6v12a6 6 0 01-6 6H10a6 6 0 01-6-6V10a6 6 0 016-6h0z"></path><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.6 9c-.2 0-.5.2-.5.4a.5.5 0 10.5-.4M19.4 12.6a4.8 4.8 0 11-6.8 6.8 4.8 4.8 0 016.8-6.8"></path><path d="M0 32V0h32v32z"></path></g></svg></i></a>
        <a href="https://twitter.com/snapp_team"><i class="icon-0-2-65 icon-d1-0-2-115 " aria-hidden="true"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M25.6 12.5c0 8.4-4.8 14.4-13.2 14.4-4.8 0-6.7-2.5-8.4-4.8m0 0l3.6-1.2c-4-4-4.3-10-1.2-14.4 1.5 2.7 4.2 5.2 7.2 6 .1-3.5 2.5-6 6-6 2.4 0 3.8.9 4.8 2.4H28l-2.4 3.6"></path><path d="M0 32V0h32v32z"></path></g></svg></i></a>
      </div>
    </div>
  )
}

export default Footer
