import { Link,HashRouter } from "react-router-dom"
import './style.css'
import Resume from '../assets/resume.pdf'
function Footer() {
     
     return (
          
          <div className="m-5 mt-lg-0 mb-lg-3">
                 <HashRouter basename='/'>
                 <nav className="navbar d-flex justify-content-between bg-transparent">

                    <div>
                       <a className="text-decoration-none para text-1" href={Resume} target="_blank" >resume</a>
                    </div>
                    <div>
                       <Link to='/projects' className="text-decoration-none para text-1">
                         projects
                    </Link>
                    </div>
                  </nav>
               </HashRouter>
          </div>
     )
}

export default Footer
