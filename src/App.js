import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Careers from './components/Careers';
import Features from './components/Features';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/careers" element={<Careers/>} />
        <Route exact path="/features" element={<Features/>} />
      </Routes>


      <Footer/>
      <Footer2 />
      </div>
      </Router>
    </div>
  );
}

export default App;
