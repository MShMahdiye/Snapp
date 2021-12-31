import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({isOpen,toggle}) {
  return (
    <div className={isOpen ?'grid grid-rows-4 text-center items-center bg-green-400 rounded': 'hidden'}
    onClick={toggle}>
       <Link className='p-4 hover:bg-green-300 hover:text-white
       border-b-6 border-green-300 hover:border-green-500 shadow hover:shadow-lg' to={"*"} >خانه</Link>
        <Link className='p-4 hover:bg-green-300 hover:text-white
       border-b-6 border-green-300 hover:border-green-500 shadow hover:shadow-lg' to={"/careeropportunities"} >فرصت‌های شغلی</Link>
        <Link className='p-4 hover:bg-green-300 hover:text-white
       border-b-6 border-green-300 hover:border-green-500 shadow hover:shadow-lg' to={"/blog"} >بلاگ</Link>
        <Link className='p-4 hover:bg-green-300 hover:text-white
       border-b-6 border-green-300 hover:border-green-500 shadow hover:shadow-lg' to={"/club"} >باشگاه رانندگان</Link>
        <Link className='p-4 hover:bg-green-300 hover:text-white
       border-b-6 border-green-300 hover:border-green-500 shadow hover:shadow-lg' to={"/register"} >ثبت نام راننده اسنپ</Link>
        <Link className='p-4 hover:bg-green-300 hover:text-white
       border-b-6 border-green-300 hover:border-green-500 shadow hover:shadow-lg' to={"/panel"} >پنل سازمانی</Link>
        <Link className='p-4 hover:bg-green-300 hover:text-white
       border-b-6 border-green-300 hover:border-green-500 shadow hover:shadow-lg' to={"/about"} >درباره ما</Link>
        <Link className='p-4 hover:bg-green-300 hover:text-white
       border-b-6 border-green-300 hover:border-green-500 shadow hover:shadow-lg' to={"/contact"}>تماس با ما</Link>
    </div>
  )
}

export default Dropdown
