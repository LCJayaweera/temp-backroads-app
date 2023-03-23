import React from 'react'

const Service = ({icon,title,detail}) => {
  return (
    <article className="service" >
         <span className="service-icon"><i className={icon}></i></span>
     <div className="service-info">
       <h4 className="service-title">{title}</h4>
       <p className="service-text">{detail}</p>
     </div>
   </article>
  )
}

export default Service
