import React from 'react'
import './css/Main.css'
import BestOffer from './BestOffer'
import WhatsOnYourMind from './WhatsOnYourMind'
import TopRes from './TopRes'
import SecondNav from '../Navbar/SecondNav'
import OnlineFood from './OnlineFood'
import BestRestaurents from './BestRestaurents'
import BestCusine from './BestCusine'
import ExploreRes from './ExploreRes'
import DownloadApp from './DownloadApp'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='main'>
      <BestOffer/>
      <WhatsOnYourMind/>
      <hr className='horizontal-line-break'/>
      <TopRes/>
      <hr className='horizontal-line-break'/>
      {/* for heading */}
      <div className="online-heading">
        <h2 className='content-text'>Restaurants with online food delivery in Indore</h2>
      </div>
      {/* for 16 px gap */}
      <div className="gap16px"></div>
      <SecondNav secondNavSwitched='second-nav' searchBar='displayNone'/>
      <OnlineFood/>
      <hr className="horizontal-line-break" />
      <BestRestaurents/>
      <div className="gap64px"></div>
      <BestCusine/>
      <div className="gap64px"></div>
<ExploreRes/>
<div className='gap64px'></div>
<DownloadApp/>
<Footer/>
    </div>
  )
}

export default Main
