import './App.css';
<<<<<<< HEAD
import DonateBlood from './Pages/DonateBlood';
import OrderBlood from './Pages/OrderBlood';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

=======
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Article from './components/Article/Article';
import Event from './components/Events/Event';
import DonateBlood from './components/Pages/DonateBlood';
import OrderBlood from './components/Pages/OrderBlood'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
>>>>>>> fc9be08503aed6925dec2452606b28fc0c9f2f82
function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DonateBlood" element={<DonateBlood />} />
          <Route path="/OrderBlood" element={<OrderBlood />} />
        </Routes>
=======
        <Navbar />
        <Routes>
          <Route path="/DonateBlood" element={<DonateBlood/>} />
          <Route path="/OrderBlood" element={<OrderBlood/>} />
        </Routes>
        <Hero/>
      <Article />
      <Event />
>>>>>>> fc9be08503aed6925dec2452606b28fc0c9f2f82
      </Router>
    </div>
  );
}

export default App;
