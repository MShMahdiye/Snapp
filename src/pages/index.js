import React,{useState,useEffect} from 'react';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';
import Navbar from '../components/Navbar';
// import Hero from '../components/Hero'

function Home() {

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
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <section className='flex items-center justify-center bg-white w-screen'>
        <div className='p-10'>
          <a href="https://redirect.appmetrica.yandex.com/serve/1036046929106097450?campaign=GooglePlay" class=" ">
            <img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/google-play-badge.png" width="160" loading="lazy" />
          </a>
        </div>
        <div className='m-10'>
          <a className='m-11' href="https://redirect.appmetrica.yandex.com/serve/243413381082522868?campaign=CafeBazaar" class=" "><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/bazaar.png" width="160" loading="lazy" /><noscript></noscript></a>
        </div>
        <div className='m-10'>
          <a className='m-11' href="https://app.snapp.taxi/pre-ride?utm_source=website&amp;utm_medium=webapp-button" class=" "><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/snapp-pwa.png" width="160" loading="lazy" /><noscript></noscript></a>
        </div>
        <div className='m-10'>
          <a className='m-11' href="https://sibapp.com/applications/snapp" class=" "><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/sibapp-badge-white.png" width="160" loading="lazy" /><noscript></noscript></a>
        </div>
        <div className='p-10'>
          <a className='m-11' href="https://app.iapps.ir/i/191622396" class=" "><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/iApps.png" width="160" loading="lazy" /><noscript></noscript></a>
        </div>
      </section>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Footer />
    </>
  )
}

export default Home;
