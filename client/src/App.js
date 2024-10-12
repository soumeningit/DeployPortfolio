import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ShowCV from './components/ShowCV';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skill" element={<MySkills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/view' element={<ShowCV />} />
      </Routes>
    </div>
  );
}

export default App;
