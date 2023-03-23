import React from 'react'
import { pageLinks } from '../data'

function PageLinks({class_1,class_2}) {
  return (
    <ul className={class_1}>

    {
      pageLinks.map((links)=>{
        const{id,href,text}=links
        return(
          <li key={id}>
         <a href={href} className={class_2}>{text}</a>
       </li>
    
        );
      })
    }
       
     </ul>

  )
}

export default PageLinks
