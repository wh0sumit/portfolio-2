import React, { useState } from 'react'
import './Projects.css'
import Cards from './Cards'
import ProjectsData from './ProjectsData'

function Projects() {

     const [projectsData] = useState(ProjectsData.ProjectsData);

     return (
          <div className="d-flex justify-content-lg-between justify-content-sm-center selectDisable flex-wrap">
     
          <nav className="left-nav d-flex align-self-center justify-content-start  ">
               <ul>
               <li className="me-5">
                    <a href="https://twitter.com/wh0sumit" target="_blank" className="text-decoration-none text-1">twitter</a>
               </li>
               <li className="me-5">
                    <a href="https://www.linkedin.com/in/wh0sumit/" target="_blank" className="text-decoration-none text-1">linkedin</a>
               </li>
               <li className="me-5">
                    <a href="https://github.com/WH0SUMIT" target="_blank" className="text-decoration-none text-1">github</a></li>
               </ul>
          </nav>
          <div class="album">
               <div class="container">
               <div class="row row-cols-1 row-cols-sm-2 p-5 row-cols-md-3 g-3">
                    {
                         projectsData.map((projects, index) => (
                              <Cards 
                                   ProjectTitle={projects.title}
                                   ProjectBannerImage={projects.img}
                                   ProjectsDescription={projects.desc}
                              />
                         ))
                    }
               </div>
               </div>
          </div>
     </div>
     )
}

export default Projects
