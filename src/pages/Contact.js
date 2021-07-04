import React from 'react'
import '../css/App.css'
import Cursor from '../Components/Cursor'
function Contact() {

     return (
       <>
    <div class="container col-xl-12 col-xxl-10 text-1">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-6 text-start ">
            <h1 class=" fw-bold lh-1 mb-3">having a great idea to share?</h1>
          <p>  or want to have a cup of coffee and chit chat, just drop me a message !
            </p>
            <p className="mt-5">email : </p>
            <a href="mailto: sumikumar1608@gmail.com" target="_blank" className="text-decoration-none color-change-2x">sumikumar1608@gmail.com</a>
            <p className="mt-5">follow me on : </p>
            <div className="d-flex">
           <a href="https://www.linkedin.com/in/wh0sumit" target="_blank"><i class="fab fa-linkedin text-1 fs-1 me-2"></i></a> 
           <a href="https://github.com/WH0SUMIT" target="_blank"><i class="fab fa-github-square text-1 fs-1 me-2"></i></a> 
           <a href="https://twitter.com/wh0sumit" target="_blank"><i class="fab fa-twitter-square text-1 fs-1 me-2"></i></a> 
           <a href="https://dev.to/wh0sumit" target="_blank"><i class="fab fa-dev text-1 fs-1 me-2"></i></a> 
            </div>
          </div>
          <div class="col-md-10 mx-auto col-lg-6 mx-5">
          <div class="calendly-inline-widget calender rounded-3 w-75 h-50" data-url="https://calendly.com/wh0sumit/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ced0e3&primary_color=171c3d"></div>
          </div>
        </div>
      </div>
     
</>
     )
    
}

export default Contact
