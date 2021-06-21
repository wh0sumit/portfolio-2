import './css/App.css';
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
      {/* <Section/> */}
      <Projects/>
      <Footer />   
    </div>
);
}

export default App;