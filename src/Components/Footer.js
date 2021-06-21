
import './style.css'
import Resume from '../assets/resume.pdf'
function Footer() {
     
     return (
          
          <div className="mx-4 my-3">
               <nav className="navbar navbar-expand-lg bg-transparent">
                 <div className="container-fluid">
                       <a className="text-decoration-none para text-1" href={Resume} target="_blank" >resume</a>
                         <p className="para text-1">projects</p>
                 </div>
               </nav>
          </div>
     )
}

export default Footer
