import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
  return (
    <div className='foot'>
      <p><Link  to="/about">About</Link></p>
      <p><Link to="/termsAndConditions">Terms&Conditions</Link></p>
    </div>
  )
}

export default Footer;