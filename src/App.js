import './css/App.css';
import Navbar from './Components/Navbar'
import Section from './Section/Section'
import Footer from './Components/Footer'
import Cursor from './Components/Cursor'
function App() {
  
  return (
     <div className = "App selectDisable " >
     <Cursor/>
      <Navbar />
      <Section/>
      <Footer />
      
    </div>
);
}

export default App;