import React from 'react'
import BestResItem from './BestResItem'

const ExploreRes = () => {
  return (
    <div className='best-res-container'>
      <div className="best-res-heading">
        <h2 className='heading-content'>Explore Every Restaurants Near Me</h2>
      </div>
      <div className="best-res-content">
      <BestResItem text='Explore Restaurants Near Me' />
      <BestResItem text='Explore Top Rated Restaurants Near Me' />
      </div>
    </div>
  )
}

export default ExploreRes
