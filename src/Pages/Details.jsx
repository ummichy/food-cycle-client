import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Details = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  // Load single food details
  useEffect(() => {
    axios.get(`http://localhost:3000/services`)
      .then(res => {
        const found = res.data.find(item => item._id === id);
        setFood(found);
      });
  }, [id]);

  const handleRequest = async () => {
    const requestData = {
      foodId: food._id,
      foodName: food.foodName,
      foodImage: food.foodImage,
      donorEmail: food.donorEmail,
      donorName: food.donorName,
      userEmail: user.email,
      requestDate: new Date().toLocaleString(),
      pickupLocation: food.pickupLocation,
      expireDate: food.expireDate,
      additionalNotes: note
    };

    try {
      await axios.post('http://localhost:3000/requests', requestData);
      await axios.patch(`http://localhost:3000/services/${food._id}`, {
        status: 'requested'
      });
      Swal.fire('Requested!', 'Food has been requested successfully.', 'success');
      setShowModal(false);
      navigate('/available-foods');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
  };

  if (!food) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6  bg-white rounded-xl shadow-lg mb-16 mt-32">
      <img src={food.foodImage} alt={food.foodName} className="rounded-lg w-full h-64 object-cover" />
      <h2 className="text-3xl font-bold text-gray-900 mt-4">{food.foodName}</h2>
      <p className="text-gray-700 mt-2">Quantity: {food.foodQuantity}</p>
      <p className="text-gray-700">Pickup Location: {food.pickupLocation}</p>
      <p className="text-gray-700">Expire Date: {new Date(food.expireDate).toLocaleString()}</p>
      <p className="text-gray-700 mb-4">Notes: {food.additionalNotes}</p>

      <button
        onClick={() => setShowModal(true)}
        className="mt-4 w-full py-3 bg-gray-900 text-white rounded-lg hover:opacity-90"
      >
        Request This Food
      </button>

      {showModal && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Confirm Food Request</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Food Name:</strong> {food.foodName}</p>
              <p><strong>Food ID:</strong> {food._id}</p>
              <p><strong>Donor Email:</strong> {food.donorEmail}</p>
              <p><strong>Donor Name:</strong> {food.donorName}</p>
              <p><strong>User Email:</strong> {user.email}</p>
              <p><strong>Request Date:</strong> {new Date().toLocaleString()}</p>
              <p><strong>Pickup Location:</strong> {food.pickupLocation}</p>
              <p><strong>Expire Date:</strong> {new Date(food.expireDate).toLocaleString()}</p>
              <div>
                <label className="block font-medium mb-1 mt-2">Additional Notes</label>
                <textarea
                  rows="3"
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 gap-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border rounded">Cancel</button>
              <button onClick={handleRequest} className="px-4 py-2 bg-gray-900 text-white rounded">
                Confirm Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
