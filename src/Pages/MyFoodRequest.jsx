import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  // Fetch requests
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://assignment-no-eleven-server.vercel.app/requests?email=${user.email}`)
        .then(res => setRequests(res.data))
        .catch(err => {
          console.error('❌ Failed to fetch requests:', err.response?.data || err.message);
          Swal.fire('Error', 'Could not fetch your requests.', 'error');
        });
    }
  }, [user?.email]);

  // Cancel request
  const cancelRequest = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this request?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, cancel it!',
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await axios.delete(
        `https://assignment-no-eleven-server.vercel.app/requests/${id}`
      );

      if (res.data.deletedCount > 0) {
        await Swal.fire('Cancelled!', 'Your request has been cancelled.', 'success');
        await Swal.fire('Info', 'It will be back on available page.', 'info');
        setRequests(prev => prev.filter(req => req._id !== id));
      } else {
        Swal.fire('Error', 'Failed to cancel request.', 'error');
      }
    } catch (error) {
      Swal.fire(
        'Error',
        error.response?.data?.message || 'Something went wrong.',
        'error'
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-24">
      {requests.length === 0 ? (
        <p className="text-center text-gray-500 italic">No requests found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-300 shadow-xl bg-[#edeceb]">
          <table className="min-w-full text-sm rounded-xl overflow-hidden">
            <thead className="bg-[#cec9c5] sticky top-0 z-10">
              <tr>
                <th className="text-black px-6 py-3 text-left text-xs font-semibold uppercase">#</th>
                <th className="text-black px-6 py-3 text-left text-xs font-semibold uppercase">Food</th>
                <th className="text-black px-6 py-3 text-left text-xs font-semibold uppercase">Donor</th>
                <th className="text-black px-6 py-3 text-left text-xs font-semibold uppercase">Pickup Location</th>
                <th className="text-black px-6 py-3 text-left text-xs font-semibold uppercase">Expire Date</th>
                <th className="text-black px-6 py-3 text-left text-xs font-semibold uppercase">Request Date</th>
                <th className="text-black px-6 py-3 text-center text-xs font-semibold uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((req, index) => (
                <tr key={req._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={req.foodImage}
                        alt={req.foodName}
                        className="w-12 h-12 object-cover rounded-md border"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{req.foodName}</p>
                        <p className="text-gray-400 text-xs">ID: {req.foodId?.slice(-5)}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{req.donorName}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{req.pickupLocation}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(req.expireDate).toLocaleString(undefined, {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(req.requestDate).toLocaleString(undefined, {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => cancelRequest(req._id)}
                      className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                    >
                      Cancel Request
                    </button>
                  </td>
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
