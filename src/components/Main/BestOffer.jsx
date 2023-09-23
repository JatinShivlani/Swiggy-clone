import React from 'react'
import ArrowBtn from './ArrowBtn'

const BestOffer = () => {
  return (
    <div className='common-margin'>
      <div className="best-offer-container common-container">
        <ArrowBtn/>
        <div className="main-content">
            <div className="heading-content">
                <h2 className='content-text'>Best offers for you</h2>
            </div>
            <div className="scroller">
                <div className="row">
                    <div className="scroller-img-bo img-first"><img class="sc-dcJsrY iCKyXx" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d402b0676f6a9674a2edf8e9bbedd4c8" width="425" height="252" alt="Flat125 off"/></div>
                    <div className="scroller-img-bo"><img class="sc-dcJsrY iCKyXx" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/52ee27c7306ed5661cf01e087ed49e3a" width="425" height="252" alt="60"/></div>
                    <div className="scroller-img-bo"><img class="sc-dcJsrY iCKyXx" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/ed39c7409ce69d8d997fe487ec4ffec7" width="425" height="252" alt="NIC Ice Creams_Tubs @ 159"/></div>
                    <div className="scroller-img-bo"><img class="sc-dcJsrY iCKyXx" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/28f92512e727f99bbb1c90d2f469b2de" width="425" height="252" alt="Free McAloo Tikki"/></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BestOffer
