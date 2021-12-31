import React from 'react'
import Hero from '../components/Hero';
import Hero1 from '../components/Hero1';
// import Hero from '../components/Hero'

function Home() {
  return (
    <>
      <Hero />
      <section className='flex items-center justify-center'>
        <div className='m-10'>
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
        <div className='m-10'>
          <a className='m-11' href="https://app.iapps.ir/i/191622396" class=" "><img alt="" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/iApps.png" width="160" loading="lazy" /><noscript></noscript></a>
        </div>
      </section>
      <Hero1 />
    </>
  )
}

export default Home;
