import hero from '../assets/hero.gif'
import './Section.css'
function Section() {
     return (
          <div className="d-flex justify-content-around">
               <p className="text-1 align-self-center col-3">hey, i am sumit singh
               <br/> i am a frontend developer</p>
               <img src={hero} alt="" className="img-fluid justify-content-center col-6"/>
               <nav className="right-nav d-flex align-self-center justify-content-end col-2 ">
                    <ul>
                    <li className="m-0">
                         <a href="" className="text-decoration-none text-1">work</a>
                    </li>
                    <li className="m-0">
                         <a href="" className="text-decoration-none text-1">skills</a>
                    </li>
                    <li className="m-0">
                         <a href="" className="text-decoration-none text-1">about</a>
                    </li>
                    <li className="m-0">
                         <a href="" className="text-decoration-none text-1">contact</a>
                    </li>
                    </ul>
               </nav>
          </div>
     )
}

export default Section
