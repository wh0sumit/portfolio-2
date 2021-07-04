import './css/App.css';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Section from './Section/Section'
import Footer from './Components/Footer'
import Cursor from './Components/Cursor'
import Projects from './Projects/Projects'
import Propack from './Projects/ProjectsPages/ProPack';
import Contact from './pages/Contact';

function App() {
  
  return (
     <div className = "App selectDisable " >
     <Cursor/>
      <Navbar />
      <HashRouter basename='/'>
       <Route path='/' exact component={Section} />
       <Route path='/contact' exact component={Contact} />
       <Route path='/projects' exact component={Projects} />
       <Route path='/projects/ProPack' exact component={Propack} />
      </HashRouter>
      <Footer />   
    </div>
);
}

export default App;