import React, { useState } from 'react'
import './Projects.css'
import Rocket from "../assets/rocket.png";
import Cards from './Cards'
import ProjectsData from './ProjectsData'

function Projects() {

     const [projectsData] = useState(ProjectsData.ProjectsData);

     return (
     <div>
          <div className='container my-5 text-1 my-5 p-5'>
          <div className='row p-4 pb-0 pe-lg-0  align-items-center '>
            <div className='col-lg-7 p-3 p-lg-5 pt-lg-3 my-5'>
                 <p>Some awesome products for the awesome poeple</p>
              <h1 className='display-4 fw-bold lh-1'>Something he has built.</h1>
              <p className='lead'>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
             
            </div>
            <div className='col-lg-4 offset-lg-1 p-0 my-5'>
                <img className='img-fluid' src={Rocket} alt='' width='760' />

            </div>
            <p className="text-center my-5 fs-1"><i class="fas fa-angle-double-down downarrow"></i></p>
          </div>
        </div>
      
          <div className='d-flex justify-content-lg-around justify-content-sm-center selectDisable flex-wrap my-5'>
     
          {/* <nav className='left-nav d-flex align-self-center justify-content-start  '>
               <ul>
               <li className='me-5'>
                    <a href='https://twitter.com/wh0sumit' target='_blank' className='text-decoration-none text-1'>twitter</a>
               </li>
               <li className='me-5'>
                    <a href='https://www.linkedin.com/in/wh0sumit/' target='_blank' className='text-decoration-none text-1'>linkedin</a>
               </li>
               <li className='me-5'>
                    <a href='https://github.com/WH0SUMIT' target='_blank' className='text-decoration-none text-1'>github</a></li>
               </ul>
          </nav> */}
          <div className='album'>
               <div className='container p-5'>
               <div className='row row-cols-1 row-cols-sm-2 p-5 row-cols-md-2 g-5'>
                    {
                         projectsData.map((projects, index) => (
                              <Cards 
                                   ProjectTitle={projects.title}
                                   // ProjectBannerImage={projects.img}
                                   // ProjectsDescription={projects.desc}
                              />
                         ))
                    }
               </div>
               </div>
          </div>
     </div>
     </div>
     )
}

export default Projects
