import React from 'react'
import './Projects.css'
import ProjectsData from './ProjectsData.json'


function Cards() {
  
  
     return (
       <>
       {
         ProjectsData.map ((Projects)=>{
           return <div class="col">
                      <div class="card bg-1 h-100 shadow-sm">
                        {/* <img src={require(Projects.img)} alt="" /> */}
                        <div class="card-body">
                          <p class="card-text">{Projects.desc}</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center card-footer">
                              {/* <a class=".btn-link .btn-link-custom-1" target="_blank">View</a> */}
                              <button class="btn-link px-3 py-1 rounded-3">View</button>
                            <small class="text-muted">03.2021</small>
                          </div>
                      </div>
                  </div>
         })
       }
      </>
     )
}

export default Cards
