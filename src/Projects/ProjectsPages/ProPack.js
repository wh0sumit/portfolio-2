import React, { useState } from 'react'
import ProjectsData from '../ProjectsData'

function Propack() {
  const [projectsData] = useState(ProjectsData.ProjectsData);
     return (
          <>
<div className="container col-xl-10 col-xxl-8 px-4 py-5 text-1">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3"></h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
      
      </div>
    </div>
  </div>
          </>
      
     )
}

export default Propack
