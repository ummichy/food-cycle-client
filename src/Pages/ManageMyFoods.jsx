import React, { useContext, useEffect, useState, useRef } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [editing, setEditing] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:3000/services')
      .then(res => {
        const userFoods = res.data.filter(food => food.donorEmail === user?.email);
        setMyFoods(userFoods);
      });
  }, [user?.email]);

  // Trap focus inside modal for accessibility
  useEffect(() => {
    if (editing) {
      const focusableElements = modalRef.current.querySelectorAll(
        'input, textarea, button'
      );
      const firstElem = focusableElements[0];
      const lastElem = focusableElements[focusableElements.length - 1];
      const handleTab = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElem) {
              e.preventDefault();
              lastElem.focus();
            }
          } else {
            if (document.activeElement === lastElem) {
              e.preventDefault();
              firstElem.focus();
            }
          }
        }
      };
      document.addEventListener('keydown', handleTab);
      firstElem.focus();
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [editing]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this food item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4444',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/services/${id}`);
        Swal.fire('Deleted!', 'Your food item has been deleted.', 'success');
        setMyFoods(prev => prev.filter(item => item._id !== id));
      } catch {
        Swal.fire('Error', 'Failed to delete item.', 'error');
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedFood = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      foodQuantity: form.foodQuantity.value,
      pickupLocation: form.pickupLocation.value,
      expireDate: form.expireDate.value,
      additionalNotes: form.additionalNotes.value,
    };

    try {
      await axios.put(`http://localhost:3000/services/${editing._id}`, updatedFood);
      Swal.fire('Updated!', 'Food updated successfully.', 'success');
      setEditing(null);

      const res = await axios.get('http://localhost:3000/services');
      const userFoods = res.data.filter(food => food.donorEmail === user?.email);
      setMyFoods(userFoods);
    } catch {
      Swal.fire('Error', 'Update failed.', 'error');
    }
  };

  return (
    <section className="max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-wide select-none">
        Manage My Foods
      </h1>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th scope="col" className="w-12 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
              <th scope="col" className="w-48 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Food</th>
              <th scope="col" className="w-32 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
              <th scope="col" className="w-40 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pickup Location</th>
              <th scope="col" className="w-44 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Expires On</th>
              <th scope="col" className="w-36 px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {myFoods.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-12 text-gray-500 italic select-none">
                  No food items found. Add some delicious food!
                </td>
              </tr>
            )}
            {myFoods.map((food, index) => (
              <tr key={food._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="w-14 h-14 rounded-lg border border-gray-300 object-cover"
                    loading="lazy"
                  />
                  <span className="text-gray-900 font-semibold">{food.foodName}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{food.foodQuantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{food.pickupLocation}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {new Date(food.expireDate).toLocaleString(undefined, {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center space-x-2">
                  <button
                    onClick={() => setEditing(food)}
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    aria-label={`Edit ${food.foodName}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    aria-label={`Delete ${food.foodName}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8 relative"
          >
            <h2 id="modal-title" className="text-2xl font-bold mb-6 text-gray-800 select-none">
              Update Food Item
            </h2>
            <form onSubmit={handleUpdate} className="space-y-6">
              <input
                type="text"
                name="foodName"
                defaultValue={editing.foodName}
                required
                className="w-full border border-gray-300 rounded-md px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Food Name"
                aria-label="Food Name"
              />
              <input
                type="text"
                name="foodImage"
                defaultValue={editing.foodImage}
                required
                className="w-full border border-gray-300 rounded-md px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Food Image URL"
                aria-label="Food Image URL"
              />
              <input
                type="text"
                name="foodQuantity"
                defaultValue={editing.foodQuantity}
                required
                className="w-full border border-gray-300 rounded-md px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Quantity"
                aria-label="Quantity"
              />
              <input
                type="text"
                name="pickupLocation"
                defaultValue={editing.pickupLocation}
                required
                className="w-full border border-gray-300 rounded-md px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Pickup Location"
                aria-label="Pickup Location"
              />
              <input
                type="datetime-local"
                name="expireDate"
                defaultValue={editing.expireDate}
                required
                className="w-full border border-gray-300 rounded-md px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Expiration Date and Time"
              />
              <textarea
                name="additionalNotes"
                defaultValue={editing.additionalNotes}
                rows={4}
                placeholder="Additional Notes (optional)"
                className="w-full border border-gray-300 rounded-md px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                aria-label="Additional Notes"
              />

              <div className="flex justify-end gap-5 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="px-6 py-2 bg-gray-300 rounded-md font-semibold hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageMyFoods;
