import React, { useState } from 'react'
import './Projects.css'
import Rocket from "../assets/rocket.png";
import Triangle from "../assets/vectors/triangle.svg";
import Circle from "../assets/vectors/circle-spin.svg";

import Cards from './Cards'
import ProjectsData from './ProjectsData'


function Projects() {

     const [projectsData] = useState(ProjectsData.ProjectsData);
     return (
          <>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div className='container my-5 text-1'>
          <div className='row align-items-center '>
            <div className='col-lg-7 p-3 p-lg-5 pt-lg-3 mt-lg-5 section'>
            <p>check some of my stuff</p>
              <h1 className='display-4 fw-bold lh-1 position-relative'>my portfolio <span> <img className='position-absolute top-0 start-50 translate-middle img-fluid triangle mx-5 mb-0 animate-spin' src={Triangle} alt='' loading="lazy" /></span> </h1>
              <p className='lead'>A small gallery of recent projects chosen by me. I've done them all together with amazing people.
              want to see more? <span><a href="mailto: sumikumar1608@gmail.com" target="_blank" className="text-decoration-none color-change-2x"> email me.</a></span>   </p>
             
            </div>
            <div className='col-lg-4 offset-lg-1 p-0 mt-5 '>
                <img className='img-fluid' src={Rocket} alt='' loading="lazy" />

            </div>
            <p className="text-center mt-5 mb-2 fs-1"><i class="fas fa-angle-double-down downarrow"></i></p>
          </div>
        </div>
      
     
          <div className='album position-relative'>
               <div className='container p-5 '>
               <div className='row row-cols-1 row-cols-sm-2 p-lg-5 row-cols-md-2 g-5 '>

                    {  
                         projectsData.map((projects, index) => (
                              
                         
                                   <Cards 
                                   ProjectId={projects.id}
                                   ProjectTitle={projects.title}
                                   ProjectDescription={projects.desc}
                                 
                                   ></Cards>

                         ))
                    }
                   
               </div>
             
               </div>
               <span> <img className='position-absolute top-0 end-0 translate-middle circle img-fluid mx-5 mb-0 animate-spin d-none d-lg-block d-xl-block ' src={Circle} alt='' loading="lazy" /></span> 
          </div>
     </>
     )
}

export default Projects
