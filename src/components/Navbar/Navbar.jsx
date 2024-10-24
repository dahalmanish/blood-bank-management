import React from 'react';
import Button from '../Button/Button';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() { 
        return (
            <div className='bg-red-600'>
                <nav className='container flex mx-auto justify-between p-5'>
                    <h1 className='text-white text-4xl'>BLOODBANK</h1>
                    <ul className='list-none flex items-center no-underline gap-12 text-white font-medium cursor-pointer'>  
                        <li className='hover:border-b-2 transition-all text-lg '><Link to="/">HOME</Link></li>
                        <li className='hover:border-b-2 transition-all text-lg'><Link to="/DonateBlood" >DONATE BLOOD</Link></li>
                        <li className='hover:border-b-2 transition-all text-lg'><Link to="/OrderBlood">ORDER BLOOD</Link></li>
                    </ul>
                    <Button title={"Login"}/>
                </nav>
            </div>
        ); 
    }
}

export default NavBar;
