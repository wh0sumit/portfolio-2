import { Link,HashRouter } from "react-router-dom"
import './style.css'
import Resume from '../assets/resume.pdf'
function Footer() {
     
     return (
          
          <div className="mx-4 my-3">
                 <HashRouter basename='/'>
               <nav className="navbar navbar-expand-lg bg-transparent">
                 <div className="container-fluid">
                       <a className="text-decoration-none para text-1" href={Resume} target="_blank" >resume</a>
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
