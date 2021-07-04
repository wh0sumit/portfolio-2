import { Link,HashRouter } from "react-router-dom"
import hand from './hand.gif'

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
                    <Link to='/contact' className="text-decoration-none">
                     <p className=" text-1 ">say hi <span><img src={hand} alt="" className="handgif" /></span> </p>
                     </Link>
                 </div>

               </nav>
               </HashRouter>
          </div>
     )
}

export default navbar
