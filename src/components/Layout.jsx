import React from 'react'
import Header from './Header';
import Footer from './Footer';
import './Components.css'

function Layout(props) {
  console.log(props)
  return (
   
    <div className='layout'>
        <Header />
           {props.children}
        <Footer />
    </div>
  )
}

export default Layout