import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service'

function Services() {
  return (
    
 <section className="section services" id="services">

 <Title titleP1='our' titleP2='services'/>
  
 <div className="section-center services-center">
  
  {services.map((services)=>{
   
    return(
      <Service key={services.id} {...services}/>
    );
  })}
  
 </div>
</section>
  )
}

export default Services
