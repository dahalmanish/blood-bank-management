import React from "react";
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Article from '../Article/Article';
import Event from '../Events/Event';
import Footer from "../Footer";


const Home = () => {
    return (
        <div className="App">
        <Navbar/>
        <Hero/>
        <Article/>
        <Event/>
        <Footer/>
      </div>
    );
}
export default Home;

 