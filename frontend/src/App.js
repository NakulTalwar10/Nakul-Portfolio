
import './App.css';
import Hireme from './components/Hireme/Hireme';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Project from './pages/Projects/Project';

function App() {
  return (
    <div >
      <Home />
      <Navbar />
      <About />
      <Project />
      <Hireme />
      <Contact />
    </div>
  );
}

export default App;
