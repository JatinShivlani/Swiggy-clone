import React from 'react'

const NavlistItem = (props) => {
  return (
    <div className='nav-listItem'>
      <span className="nav-icon">{props.icon}</span>
      <span className="nav-text">{props.text}</span>
      {props.cart}
    </div>
  )
}

export default NavlistItem
