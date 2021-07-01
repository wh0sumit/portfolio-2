import './css/App.css';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Section from './Section/Section'
import Footer from './Components/Footer'
import Cursor from './Components/Cursor'
import Projects from './Projects/Projects'
function App() {
  
  return (
     <div className = "App selectDisable " >
     <Cursor/>
      <Navbar />
      <HashRouter basename='/'>
       <Route path='/' exact component={Section} />
       <Route path='/projects' exact component={Projects} />
      </HashRouter>
      <Footer />   
    </div>
);
}

export default App;