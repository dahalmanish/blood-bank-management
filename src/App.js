import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Article from './components/Article/Article';
import Event from './components/Events/Event';
import DonateBlood from './components/Pages/DonateBlood';
import OrderBlood from './components/Pages/OrderBlood'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/DonateBlood" element={<DonateBlood/>} />
          <Route path="/OrderBlood" element={<OrderBlood/>} />
        </Routes>
        <Hero/>
      <Article />
      <Event />
      </Router>
    </div>
  );
}

export default App;
