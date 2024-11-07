
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';
import Skill from './components/Skill';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
  
      <div id="home"><Hero /></div> {/* Home Section */}
     
      <div id="about"><About /></div> {/* About Section */}
       <div id="skills"><Skill /></div>
     
      <div id="projects"><Project /></div> 
    
      <div id="services"><Service /></div> {/* Services Section */}
      <div id="contact"><Contact /></div> {/* Contact Section */}
      <Footer />
    </div>
  );
}

export default App;
