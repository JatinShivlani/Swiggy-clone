import React from 'react'
import ArrowBtn from './ArrowBtn'
import ImgElement from './ImgElement'
import imgData from './data/WhatsData'

const WhatsOnYourMind = () => {
  return (
    <div className='common-margin'>
    <div className="common-container">
        <ArrowBtn/>
        <div className="main-content">
        <div className="heading-content">
                <h2 className='content-text'>What's on your mind?</h2>
            </div>
            <div className="scroller">
                <div className="row">
                {imgData.map((element)=>{
                  return <ImgElement lable={element.lable} src={element.src} first={element.first}/>
                })}
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default WhatsOnYourMind
