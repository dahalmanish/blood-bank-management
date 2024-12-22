import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';

const AllData = () => {
    const [allData, setAllData] = useState([]); // State to store all data
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        // Fetch all data from the server
        axios.get('http://localhost:5000/donations')
            .then(response => {
                setAllData(response.data.donations); // Update key to 'donations'
            })
            .catch(error => {
                console.error('Error fetching all data:', error);
                setError('Failed to fetch data. Please try again later.');
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8 p-8">
                <h1 className="text-3xl font-bold mb-5">All Data</h1>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
                        {error}
                    </div>
                )}

                {/* Display All Data */}
                {allData.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Name</th>
                                    <th className="border border-gray-300 p-2">Phone</th>
                                    <th className="border border-gray-300 p-2">Blood Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allData.map((user, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 p-2">{user.username}</td>
                                        <td className="border border-gray-300 p-2">{user.phone}</td>
                                        <td className="border border-gray-300 p-2">{user.bloodGroup}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    !error && (
                        <p className="text-gray-600">No data available.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default AllData;
