import React, { useState } from 'react'
import skills from './skills'
import '../Projects.css'
import ProPack from '../../assets/Propack.png'
import Tilt from 'react-tilt'


function Propack() {

                      
 
  return (
    <>

     
      <div className='container text-1 my-7 p-5'>
          <div className='row p-4 pb-0 pe-lg-0  align-items-center '>
            <div className='col-lg-6 p-3 p-lg-5 pt-lg-3 my-5'>
            {/* <p className="display-1 text-muted">01</p> */}
              <h1 className='display-4 fw-bold lh-1'>propack</h1>
              <p className='lead'>Learn the right way !!!<br/>
                Life is too short to find a better and efficient project. 
                </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-start">
              <a href="" className="btn btn-custom-1 border-2">Visit Project</a>
              <a href="" className="btn btn-custom-2 border-2">Visit Project</a>
              </div>
            </div>
           
              <div className='col '>
                <Tilt className="Tilt" options={{ max : 25, speed: 4000 }} >
                <div className="Tilt-inner">
                      <img src={ProPack} alt=""  className="img-fluid rounded-3" height="250px"/>
                      </div>
                </Tilt>
             </div>  
          </div>
        </div>
      

        <div class="px-4 py-5 my-5 text-center text-1">
    <h1 class="display-5 fw-bold">Let's talk about the project</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">ProPack is the perfect destination for beginners in the programming world, we offer you ideal resources and relevant projects to boost your coding journey, ProPack brings you fundamental yet amazing JavaScript projects with live demo and code.</p>

    </div>
    <h1 class="display-6 fw-bold">What <span className="color-change-2x">Technologies</span>  are used?</h1>
    <div class="col-lg-6 mx-auto">
                   
    </div>
  </div>   
  

    </>
  )
}

export default Propack
