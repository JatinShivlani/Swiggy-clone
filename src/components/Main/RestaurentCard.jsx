import React from 'react'

const RestaurentCard = (props) => {
  return (<div>
    <div class={`scroller-img-tr ${props.removePadding}`}>
    <a class={`link-tr ${props.removeWidth}`} href='/'>
      <div class="item-grid-container">
        <div class="grid-img-container">
          <div class="img-container">
            <div style={{width:"100%", height:"100%"}} class="image">
              <img
                class="img"
                src={props.src}
                alt={props.name}
              />
              <div class="offer-container">
                <div class="offer-text">{props.offer}</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginLeft: "12px"}}>
            <div class="restaurent-name">{props.name}</div>
          <div class="restaurent-rating">
            <div style={{marginTop:"-2px"}}>
               <img  className='star' src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Featured_Star_green.svg" alt="rating star" height='20px' />
           
            </div>
            <div class="rating" style={{marginTop: "-4px"}}>
              <span class="rating-points">{props.rating}</span>
            </div>
          </div>
          <div class="restaurant-descriptions-container">
            <div class="description-text">
              {props.description}
            </div>
            <div class="description-text">{props.address}</div>
          </div>
        </div>
      </div>
    </a>
    <div></div>
</div>
</div>
  )
}

export default RestaurentCard


