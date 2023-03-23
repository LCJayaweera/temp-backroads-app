import React from 'react'
import Title from './Title'
import { tours } from '../data'
import Tour from './Tour'

function Tours() {
  return (
   
 <section className="section" id="tours">

<Title titleP1='featured' titleP2='tours'/>
  <div className="section-center featured-center">
  {tours.map((tours)=>{
       return(
     <Tour   key={tours.id}  {...tours} />
    );
  })}
  
 </div>
</section>
  )
}

export default Tours
