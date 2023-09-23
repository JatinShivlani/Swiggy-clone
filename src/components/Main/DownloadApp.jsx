import React from 'react'

const DownloadApp = () => {
  return (
    <div className='download-flex-container'>
      <div className="download-text">
        <div className="download-heading-text">For better experience,download the Swiggy app now</div>
      </div>
       <div className="download-images">
        <a href="/" className="android"><img class="google-play-store" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Download Android App"/></a>
        <a href="/" className="ios"><img class="apple-app-store" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="Download iOS App"/></a>
       </div>
    </div>
  )
}

export default DownloadApp
