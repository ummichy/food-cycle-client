import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = async (e) => {
    e.preventDefault();

    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;
    const additionalNotes = form.additionalNotes.value;

    const newFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expireDate,
      additionalNotes,
      donorName: user?.displayName,
      donorEmail: user?.email,
      donorImage: user?.photoURL,
      status: 'available'
    };

    try {
      const response = await axios.post('http://localhost:3000/services', newFood);
      if (response.data.insertedId || response.data.acknowledged) {
        Swal.fire('Success!', 'Food item added successfully!', 'success');
        form.reset();
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Something went wrong. Try again!', 'error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-lg mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Add a Food Item</h2>

      <form onSubmit={handleAddFood} className="space-y-6">
        {/* Food Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Food Name</label>
          <input type="text" name="foodName" required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter food name" />
        </div>

        {/* Food Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Food Image URL</label>
          <input type="text" name="foodImage" required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter image URL" />
        </div>

        {/* Quantity & Location */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Food Quantity</label>
            <input type="text" name="foodQuantity" required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., 5 plates" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Pickup Location</label>
            <input type="text" name="pickupLocation" required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter location" />
          </div>
        </div>

        {/* Expire Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Expire Date & Time</label>
          <input
            type="datetime-local"
            name="expireDate"
            required
            className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Additional Notes</label>
          <textarea name="additionalNotes" rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write any extra info (optional)"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
