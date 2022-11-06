import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Activities from './pages/Activities';
import About from './pages/About';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/activities" element = {<Activities/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
