import React from 'react'
import svg from './data/Svg-main'
const ArrowBtn = () => {
  return (
    <>
        <div className="arrow-btn">
            <button className='left-arrow arrow'>
                <div className="arrow-container left-arrow-container">
                    {svg.leftArrow}
                </div>
            </button>
            <button className='right-arrow arrow'>
                <div className="arrow-container">
                    {svg.rightArrow}
                </div>
            </button>
        </div>
      
    </>
  )
}

export default ArrowBtn
