import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get('http://localhost:3000/requests')
        .then(res => {
          const myRequests = res.data.filter(req => req.userEmail === user.email);
          setRequests(myRequests);
        })
        .catch(err => {
          console.error('Failed to fetch requests:', err);
        });
    }
  }, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Food Requests</h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500 italic">No requests found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-600 font-semibold text-left">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Food</th>
                <th className="px-4 py-3">Donor</th>
                <th className="px-4 py-3">Pickup Location</th>
                <th className="px-4 py-3">Expire Date</th>
                <th className="px-4 py-3">Request Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {requests.map((req, index) => (
                <tr key={req._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={req.foodImage} alt={req.foodName} className="w-12 h-12 object-cover rounded-md border" />
                      <div>
                        <p className="font-medium text-gray-800">{req.foodName}</p>
                        <p className="text-gray-400 text-xs">ID: {req.foodId?.slice(-5)}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{req.donorName}</td>
                  <td className="px-4 py-3 text-gray-600">{req.pickupLocation}</td>
                  <td className="px-4 py-3 text-gray-600">{new Date(req.expireDate).toLocaleString()}</td>
                  <td className="px-4 py-3 text-gray-600">{new Date(req.requestDate).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
