import hero from '../assets/hero.gif'
import './Section.css'
function Section() {
     return (
          <div className="d-flex justify-content-between selectDisable">
               <p className="text-1 align-self-center ms-5 ">hey, i am sumit singh
               <br/> i am a frontend developer</p>
               <img src={hero} alt="" className="img-fluid justify-content-center"/>
               <nav className="right-nav d-flex align-self-center justify-content-start ">
                    <ul>
                    <li className="me-5">
                         <a href="" className="text-decoration-none text-1">work</a>
                    </li>
                    <li className="me-5">
                         <a href="" className="text-decoration-none text-1">skills</a>
                    </li>
                    <li className="me-5">
                         <a href="" className="text-decoration-none text-1">about</a>
                    </li>
                    <li className="me-5">
                         <a href="" className="text-decoration-none text-1">contact</a>
                    </li>
                    </ul>
               </nav>
          </div>
     )
}

export default Section
