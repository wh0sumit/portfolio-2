import hero from '../assets/hero.gif'
import './Section.css'


function Section() {
     
     return (
          <div className="d-flex justify-content-lg-between justify-content-sm-center selectDisable flex-wrap section">
                    <h6 className="text-1 text-center w-100 d-md-block d-lg-none px-3">hey! 🙋🏻‍♂️   <br/> i'm sumit singh <br/>nice to meet you.
               <br/>i’m web developer <br/>& designer from indore, india.</h6>

                 <nav className="left-nav d-flex align-self-center justify-content-start ">

               
                    <p className="text-1 d-flex justify-content-center d-none d-lg-block d-xl-block ms-5" > hey! 🙋🏻‍♂️
                    <br/> i'm sumit singh <br/>nice to meet you.
               <br/>i’m web developer <br/>& designer from indore, india.</p>
            
               </nav>
      
               <img src={hero} alt="" className="img-fluid hero "/>
               <nav className="right-nav d-flex align-self-center justify-content-start me-4 d-none d-lg-block d-xl-block">
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
