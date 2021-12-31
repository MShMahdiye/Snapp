import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ toggle }) => {
  return (
    <nav className='flex items-center h-16 bg-white
    text-black relative shadow-sm' role={'navigation'}>
      <div className='p-10 font-Jomhuria text-xl md:block hidden' id='navlink' >
        <Link className='p-4' to={"*"} >خانه</Link>
        <Link className='p-4' to={"/careeropportunities"} >فرصت‌های شغلی</Link>
        <Link className='p-4' to={"/blog"} >بلاگ</Link>
        <Link className='p-4' to={"/club"} >باشگاه رانندگان</Link>
        <Link className='p-4' to={"/register"} >ثبت نام راننده اسنپ</Link>
        <Link className='p-4' to={"/panel"} >پنل سازمانی</Link>
        <Link className='p-4' to={"/about"} >درباره ما</Link>
        <Link className='p-4' to={"/contact"}>تماس با ما</Link>
      </div>
      <Link to={"/"} className='snapplogo p-5' ><img alt='Snapp Logo' src='https://web-cdn.snapp.ir/snapp-website/icons/snappTextLogo.svg' /></Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg className="w-6 h-6" fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar
