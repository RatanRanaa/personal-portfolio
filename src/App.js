import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/socialLinks' element={<SocialLinks/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
