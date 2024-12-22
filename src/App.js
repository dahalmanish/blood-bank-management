import './App.css';
import DonateBlood from './Pages/DonateBlood';
import OrderBlood from './Pages/OrderBlood';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DonateBlood" element={<DonateBlood />} />
          <Route path="/OrderBlood" element={<OrderBlood />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
