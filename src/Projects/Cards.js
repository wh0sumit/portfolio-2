import React from 'react'
import './Projects.css'
import ProjectsImageData from './ProjectsImageData'
import { Link,HashRouter } from "react-router-dom"
import Tilt from 'react-tilt'



function Cards(ProjectDetails) {

  return (
    <Tilt className="Tilt" options={{ max : 25, speed: 4000, scale: 1 }} >
    <div className="Tilt-inner">
    <HashRouter basename='/projects'>
    <Link to={ProjectDetails.ProjectTitle}>
        <div class="col rounded-3"  >
         <div class="card bg-1 h-100 border-0 bg-transparent">
           <img src={ProjectsImageData[ProjectDetails.ProjectTitle]} alt=""  className="img-fluid card-img-top"/>
         </div>
       </div>
       </Link>
   
    </HashRouter>
       </div>
   </Tilt>
  )
}
export default Cards



