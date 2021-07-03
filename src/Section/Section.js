import hero from '../assets/hero.gif'
import './Section.css'


function Section() {
     
     return (
          <div className="d-flex justify-content-lg-between justify-content-sm-center selectDisable flex-wrap section">
                 <nav className="left-nav d-flex align-self-center justify-content-start ms-5 ">
               
                    <p className="text-1 align-self-center ms-5 "> hey! 🙋🏻‍♂️
                    <br/> i'm sumit singh <br/>nice to meet you.
               <br/>i’m web developer <br/>& designer from indore, india.</p>
            
               </nav>
      
               <img src={hero} alt="" className="img-fluid justify-content-center"/>
               <nav className="right-nav d-flex align-self-center justify-content-start me-4 ">
                    <ul>
                    <li className="me-5">
                         <a href="https://twitter.com/wh0sumit" target="_blank" className="text-decoration-none text-1">twitter</a>
                    </li>
                    <li className="me-5">
                         <a href="https://www.linkedin.com/in/wh0sumit/" target="_blank" className="text-decoration-none text-1">linkedin</a>
                    </li>
                    <li className="me-5">
                         <a href="https://github.com/WH0SUMIT" target="_blank" className="text-decoration-none text-1">github</a></li>
                    </ul>
               </nav>
          </div>
     )
}

export default Section
