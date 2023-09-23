import React from 'react'

const SecondNavCapsuls = (props) => {
  return (
    <div className='capsul'>
      <div className={`capsul-container ${props.nogap}`}>
        <div className="capsul-name">{props.name}</div>
        <div className="capsul-icon">{props.svg}</div>
      </div>
    </div>
  )
}

export default SecondNavCapsuls
