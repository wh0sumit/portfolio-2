import { Link,HashRouter } from "react-router-dom"


import './style.css'
function navbar() {
     return (
          
          <div className="m-5 fixed-top">
               <HashRouter basename='/'>
               <nav className="navbar navbar-expand-lg bg-transparent">
                 <div className="container-fluid">
                   <Link to='/'>
                    <i className="fas fa-meteor color-change-2x fs-3"></i>
                    </Link>
                     <p className="para text-1 ">say hi</p>
                 </div>

               </nav>
               </HashRouter>
          </div>
     )
}

export default navbar
