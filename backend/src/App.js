import './App.css';
import DonateBlood from './Pages/DonateBlood';
import OrderBlood from './Pages/OrderBlood';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DonateBlood" element={<DonateBlood />} />
          <Route path="/OrderBlood" element={<OrderBlood />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
