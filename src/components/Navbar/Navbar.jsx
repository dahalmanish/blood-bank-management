import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [users, setUsers] = useState([]); // State to store users who filled the form

    return (
        <div className="bg-red-600">
            {/* Navigation Bar */}
            <nav className="container flex mx-auto justify-between p-5">
                <h1 className="text-white text-4xl">BLOODBANK</h1>
                <ul className="list-none flex items-center no-underline gap-12 text-white font-medium cursor-pointer">
                    <li className="hover:border-b-2 transition-all text-lg">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="hover:border-b-2 transition-all text-lg">
                        <Link to="/DonateBlood">DONATE BLOOD</Link>
                    </li>
                    <li className="hover:border-b-2 transition-all text-lg">
                        <Link to="/OrderBlood">ORDER BLOOD</Link>
                    </li>
                    
                    <li className="hover:border-b-2 transition-all text-lg">
                        <Link to="/Users">BLOOD GROUP USERS</Link> {/* New Link */}
                    </li>
                </ul>
            </nav>

            {/* List of users who filled the form */}
            {users.length > 0 && (
                <div className="container mx-auto mt-8">
                    <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Donors List</h2>
                        <ul className="list-none">
                            {users.map((user, index) => (
                                <li key={index} className="mb-2">
                                    Email: {user.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
