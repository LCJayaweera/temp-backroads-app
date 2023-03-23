import React from 'react'
import logo from '../images/logo.svg'
import {socialLinks } from '../data.js'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'



const Navbar = () => {
  return (
    <nav className="navbar">
   <div className="nav-center">
     <div className="nav-header">
       <img src={logo} className="nav-logo" alt="backroads" />
       <button type="button" className="nav-toggle" id="nav-toggle">
         <i className="fas fa-bars"></i>
       </button>
     </div>

     <PageLinks class_1='nav-links'  class_2='nav-link'/>
     

     <ul className="nav-icons">

      {
       socialLinks.map((links)=>{
              return(
      <SocialLink key={links.id} {...links} itemClass='nav-icon'  />
        );
        }) }

     </ul>

   </div>
 </nav>
  )
}

export default Navbar
