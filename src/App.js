import './App.css';
import Donateblood from './components/Donateblood/Donateblood';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
 
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Donateblood/>
      <Hero/>
    </div>
  );
}

export default App;
