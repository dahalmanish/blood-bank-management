import React from 'react';
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <div className='bg-red-600'>
        <nav className='container flex mx-auto  justify-between p-5'>
            <h1 className='text-white text-4xl'>BLOODBANK</h1>
            <ul className='list-none flex items-center no-underline gap-12 text-white font-medium cursor-pointer'>  
                <li className='hover:scale-110 transition-all text-lg '><link rel="stylesheet" href="" />HOME</li>
                <li className='hover:scale-110 transition-all text-lg '><link rel="stylesheet" href="" />DONATE BLOOD</li>
                <li className='hover:scale-110 transition-all text-lg '><link rel="stylesheet" href="" />ORDER BLOOD</li>
            </ul>
            <Button title={"Login"}/>
        </nav>
        </div>
    )
}
export default Navbar;