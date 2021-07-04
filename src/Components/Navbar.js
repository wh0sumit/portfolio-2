import { Link,HashRouter } from "react-router-dom"
import hand from './hand.gif'

import './style.css'
function navbar() {
     return (
          
          <div className="m-5 mb-lg-0 ">
               <HashRouter basename='/'>
               <nav className="navbar d-flex justify-content-between bg-transparent">

                      <div>
                      <Link to='/'>
                    <i className="fas fa-meteor color-change-2x fs-3"></i>
                    </Link>

                      </div>
                    <div>
                    <Link to='/contact' className="text-decoration-none">
                     <p className=" text-1 align-self-center m-0 ">say hi <span><img src={hand} alt="" className="handgif" /></span> </p>
                     </Link>
                     </div>

               </nav>
               </HashRouter>
          </div>
     )
}

export default navbar
