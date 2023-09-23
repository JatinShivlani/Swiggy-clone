import React from 'react'
import FooterLI from './FooterLI'

const FooterUL = (props) => {
  return (
    <div className='footer-ul'>
      <ul>
        <li className='heading-li'>{props.heading}</li>
        {props.ul.map((elem)=>{
            return <FooterLI text={elem.text} class={elem.class}/>
        })}
      </ul>
    </div>
  )
}

export default FooterUL
