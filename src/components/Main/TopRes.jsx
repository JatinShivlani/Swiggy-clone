import React from 'react'
import ArrowBtn from './ArrowBtn'

import RestaurentCard from './RestaurentCard'
import restaurants from './data/RestaurentCradData'

const TopRes = () => {
  return (
    <div className='common-margin'>
    <div className="common-container">
      <ArrowBtn/>
      <div className="main-content">
          <div className="heading-content">
              <h2 className='content-text'>Top restaurent chains in Indore</h2>
          </div>
          <div className="scroller">
              <div className="row">
              {restaurants.map((element)=>{
                return <RestaurentCard src={element.src} name={element.name} offer={element.offer} rating={element.rating} description={element.description} address={element.address}/>
              })
                  }
              </div>
          </div>
          <div className="scrollBar shift ">
<div className="redPart"></div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default TopRes
