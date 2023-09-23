import React from 'react'

const FooterLI = (props) => {
  return (
    <>
      <li className={`${props.class}`}>
        <div className="footer-text">{props.text}</div>
      </li>
    </>
  )
}

export default FooterLI
