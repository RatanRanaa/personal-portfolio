import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import SocialLinks from './Components/SocialLinks';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
