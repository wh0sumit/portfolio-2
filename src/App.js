import './css/App.css';
import Navbar from './Navbar/Navbar'
import Section from './Section/Section'
import Footer from './Navbar/Footer'
function App() {
    
  return (
     <div className = "App container p-3 my-2" >
      <Navbar />
      <Section/>
      <Footer />
    </div>
  );
}

export default App;