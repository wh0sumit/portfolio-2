import React from 'react'
import './Projects.css'
import ProjectsImageData from './ProjectsImageData'
import Tilt from 'react-tilt'



function Cards(ProjectDetails) {
  return (
    <Tilt className="Tilt" options={{ max : 25, speed: 4000, scale: 1 }} >
    <div className="Tilt-inner">  <div class="col rounded-3" >
         <div class="card bg-1 h-100 border-0 bg-transparent">
           <img src={ProjectsImageData[ProjectDetails.ProjectTitle]} alt=""  className="img-fluid card-img-top"/>
          
             {/* <p class="card-text">{ProjectDetails.ProjectsDescription}</p> */}
           {/* <div class="d-flex justify-content-between align-items-center card-footer">
            
             <button class="btn-link px-3 py-1 rounded-3">View</button>
             <small class="text-muted">03.2021</small>
           </div> */}
         </div>
       </div></div>
   </Tilt>
  )
}
export default Cards



