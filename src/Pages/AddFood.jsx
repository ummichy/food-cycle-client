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
      status: 'available',
    };

    try {
      const response = await axios.post('https://assignment-no-eleven-server.vercel.app/services', newFood);
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
    <div className="max-w-3xl mx-auto px-4 py-8 mt-28 mb-20 bg-[#f4f2f0] rounded-2xl shadow-lg border border-gray-200 text-black">
      <h2 className="text-4xl font-bold text-center text-black mb-6">Share Your Surplus Food</h2>
      <p className="text-center text-gray-600 mb-10">Add your leftover food and help feed the community in need.</p>

      <form onSubmit={handleAddFood} className="space-y-5">
        {/* Food Name */}
        <div>
          <label className="block font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            required
            className="w-full px-4 py-2 border rounded-md caret-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
            placeholder="e.g., Chicken Curry"
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="block font-medium mb-1">Food Image URL</label>
          <input
            type="text"
            name="foodImage"
            required
            className="w-full px-4 py-2 border rounded-md caret-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
            placeholder="Image URL"
          />
        </div>

        {/* Quantity & Location */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Food Quantity</label>
            <input
              type="text"
              name="foodQuantity"
              required
              className="w-full px-4 py-2 border rounded-md caret-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
              placeholder="e.g., 3 containers"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              required
              className="w-full px-4 py-2 border rounded-md caret-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
              placeholder="e.g., Mirpur-10"
            />
          </div>
        </div>

        {/* Expire Date */}
        <div>
          <label className="block font-medium mb-1">Expire Date & Time</label>
          <input
            type="datetime-local"
            name="expireDate"
            required
            className="w-full px-4 py-2 border rounded-md caret-black bg-[#f4f2f0] focus:outline-none focus:ring-2 focus:ring-black text-sm"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block font-medium mb-1">Additional Notes</label>
          <textarea
            name="additionalNotes"
            rows="3"
            className="w-full px-4 py-2 border rounded-md caret-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
            placeholder="Optional"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-black hover:bg-gray-900 text-white text-lg font-semibold rounded-lg transition"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
