import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  
  useEffect(() => {
    axios.get('http://localhost:3000/services')
      .then(res => {
        const availableFoods = res.data.filter(food => food.status === 'available');
        setFoods(availableFoods);
        setFilteredFoods(availableFoods);
      });
  }, []);

  
  useEffect(() => {
    let updated = [...foods];

    if (searchTerm) {
      updated = updated.filter(food =>
        food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    updated.sort((a, b) => {
      const dateA = new Date(a.expireDate);
      const dateB = new Date(b.expireDate);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFilteredFoods(updated);
  }, [searchTerm, sortOrder, foods]);

 
  const handleViewDetails = (id) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(`/food/${id}`);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
     

      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 bg-[#edeceb] backdrop-blur-sm p-6 rounded-xl shadow-2xl ">
        <input
          type="text"
          placeholder="Search by food name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />

        <div className="flex items-center gap-2">
          <label className="font-medium text-gray-700">Sort by Expiry:</label>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
      </div>

      {filteredFoods.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredFoods.map(food => (
            <div
              key={food._id}
              className="bg-[#edeceb] backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="rounded-t-3xl h-52 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">{food.foodName}</h3>
                <p className="text-gray-700 mt-1">Quantity: <span className="font-medium">{food.foodQuantity}</span></p>
                <p className="text-gray-600 text-sm">Pickup: {food.pickupLocation}</p>
                <p className="text-gray-600 text-sm mb-3">Expires: {new Date(food.expireDate).toLocaleString()}</p>

                <button
                  onClick={() => handleViewDetails(food._id)}
                  className="w-full py-2 rounded-xl bg-gray-900 text-white font-semibold hover:brightness-110 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500 mt-20">No food items available at the moment.</p>
      )}
    </section>
  );
};

export default AvailableFoods;
