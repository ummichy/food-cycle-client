// import React, { useContext, useEffect, useState, useRef } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const ManageMyFoods = () => {
//   const { user } = useContext(AuthContext);
//   const [myFoods, setMyFoods] = useState([]);
//   const [editing, setEditing] = useState(null);
//   const modalRef = useRef(null);

 
//   function formatDateForInput(dateString) {
//     if (!dateString) return '';
//     const d = new Date(dateString);
//     const pad = (n) => (n < 10 ? '0' + n : n);
//     return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
//   }

//   useEffect(() => {
//     axios.get('https://assignment-no-eleven-server.vercel.app/services')
//       .then(res => {
//         const userFoods = res.data.filter(food => food.donorEmail === user?.email);
//         setMyFoods(userFoods);
//       });
//   }, [user?.email]);

//   useEffect(() => {
//     if (editing) {
//       const focusableElements = modalRef.current.querySelectorAll('input, textarea, button');
//       const firstElem = focusableElements[0];
//       const lastElem = focusableElements[focusableElements.length - 1];
//       const handleTab = (e) => {
//         if (e.key === 'Tab') {
//           if (e.shiftKey && document.activeElement === firstElem) {
//             e.preventDefault();
//             lastElem.focus();
//           } else if (!e.shiftKey && document.activeElement === lastElem) {
//             e.preventDefault();
//             firstElem.focus();
//           }
//         }
//       };
//       document.addEventListener('keydown', handleTab);
//       firstElem.focus();
//       return () => document.removeEventListener('keydown', handleTab);
//     }
//   }, [editing]);

//   const handleDelete = async (id) => {
//     const confirm = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this food item?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#000',
//       cancelButtonColor: '#6B7280',
//       confirmButtonText: 'Yes, delete it!',
//     });

//     if (confirm.isConfirmed) {
//       try {
//         await axios.delete(`https://assignment-no-eleven-server.vercel.app/services/${id}`);
//         Swal.fire('Deleted!', 'Your food item has been deleted.', 'success');
//         setMyFoods(prev => prev.filter(item => item._id !== id));
//       } catch {
//         Swal.fire('Error', 'Failed to delete item.', 'error');
//       }
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const updatedFood = {
//       foodName: form.foodName.value,
//       foodImage: form.foodImage.value,
//       foodQuantity: form.foodQuantity.value,
//       pickupLocation: form.pickupLocation.value,
//       expireDate: form.expireDate.value,
//       additionalNotes: form.additionalNotes.value,
//     };

//     try {
//       await axios.put(`https://assignment-no-eleven-server.vercel.app/services/${editing._id}`, updatedFood);
//       Swal.fire('Updated!', 'Food updated successfully.', 'success');
//       setEditing(null);

//       const res = await axios.get('https://assignment-no-eleven-server.vercel.app/services');
//       const userFoods = res.data.filter(food => food.donorEmail === user?.email);
//       setMyFoods(userFoods);
//     } catch {
//       Swal.fire('Error', 'Update failed.', 'error');
//     }
//   };

//   return (
//     <section>
//       <div className="overflow-x-auto mt-32 max-w-7xl mx-auto px-6">
//         {myFoods.length === 0 ? (
//           <p className="text-center py-24 text-gray-500 italic text-lg select-none">
//             No food items found. Add some delicious food!
//           </p>
//         ) : (
//           <table className="w-full shadow-xl rounded-xl border border-gray-300 bg-[#edeceb]">
//             <thead className="bg-[#cec9c5] text-white sticky top-0 z-10 rounded-t-xl">
//               <tr>
//                 <th className="w-12 text-black px-6 py-3 text-left text-xs font-semibold uppercase">#</th>
//                 <th className="w-52 text-black px-6 py-3 text-left text-xs font-semibold uppercase">Food</th>
//                 <th className="w-32 text-black px-6 py-3 text-left text-xs font-semibold uppercase">Quantity</th>
//                 <th className="w-40 text-black px-6 py-3 text-left text-xs font-semibold uppercase">Pickup Location</th>
//                 <th className="w-44 text-black px-6 py-3 text-left text-xs font-semibold uppercase">Expires On</th>
//                 <th className="w-48 text-black px-6 py-3 text-center text-xs font-semibold uppercase">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200 rounded-b-xl">
//               {myFoods.map((food, index) => (
//                 <tr key={food._id} className="hover:bg-gray-50 transition">
//                   <td className="px-6 py-4 text-sm font-medium text-gray-700">{index + 1}</td>
//                   <td className="px-6 py-4 flex items-center gap-4">
//                     <img src={food.foodImage} alt={food.foodName} className="w-14 h-14 rounded-lg border object-cover" />
//                     <span className="text-gray-900 font-semibold">{food.foodName}</span>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-700">{food.foodQuantity}</td>
//                   <td className="px-6 py-4 text-sm text-gray-700">{food.pickupLocation}</td>
//                   <td className="px-6 py-4 text-sm text-gray-700">
//                     {new Date(food.expireDate).toLocaleString(undefined, {
//                       dateStyle: 'medium',
//                       timeStyle: 'short',
//                     })}
//                   </td>
//                   <td className="px-6 py-4 text-center space-x-2">
//                     <button
//                       onClick={() => setEditing(food)}
//                       className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(food._id)}
//                       className="inline-block px-4 py-2 bg-white text-black border border-black rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

     
//       {editing && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           className="fixed inset-0 z-50 bg-opacity-60 flex items-center justify-center p-4"
//         >
//           <div
//             ref={modalRef}
//             className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8 relative"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Food Item</h2>
//             <form onSubmit={handleUpdate} className="space-y-5">
//               {['foodName', 'foodImage', 'foodQuantity', 'pickupLocation'].map((field) => (
//                 <input
//                   key={field}
//                   type="text"
//                   name={field}
//                   defaultValue={editing[field]}
//                   required
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder={field.replace(/([A-Z])/g, ' $1')}
//                 />
//               ))}
//               <input
//                 type="datetime-local"
//                 name="expireDate"
//                 defaultValue={formatDateForInput(editing.expireDate)}
//                 required
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
//               />
//               <textarea
//                 name="additionalNotes"
//                 defaultValue={editing.additionalNotes}
//                 rows={3}
//                 placeholder="Additional Notes (optional)"
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black resize-none"
//               />
//               <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
//                 <button
//                   type="button"
//                   onClick={() => setEditing(null)}
//                   className="px-6 py-2 bg-gray-300 rounded-md font-semibold hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition"
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ManageMyFoods;

import React, { useContext, useEffect, useState, useRef } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [editing, setEditing] = useState(null);
  const modalRef = useRef(null);

  function formatDateForInput(dateString) {
    if (!dateString) return '';
    const d = new Date(dateString);
    const pad = (n) => (n < 10 ? '0' + n : n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  useEffect(() => {
    axios.get('https://assignment-no-eleven-server.vercel.app/services')
      .then(res => {
        const userFoods = res.data.filter(food => food.donorEmail === user?.email);
        setMyFoods(userFoods);
      });
  }, [user?.email]);

  useEffect(() => {
    if (editing) {
      const focusableElements = modalRef.current.querySelectorAll('input, textarea, button');
      const firstElem = focusableElements[0];
      const lastElem = focusableElements[focusableElements.length - 1];
      const handleTab = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElem) {
            e.preventDefault();
            lastElem.focus();
          } else if (!e.shiftKey && document.activeElement === lastElem) {
            e.preventDefault();
            firstElem.focus();
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
      confirmButtonColor: '#000',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`https://assignment-no-eleven-server.vercel.app/services/${id}`);
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
      await axios.put(`https://assignment-no-eleven-server.vercel.app/services/${editing._id}`, updatedFood);
      Swal.fire('Updated!', 'Food updated successfully.', 'success');
      setEditing(null);

      const res = await axios.get('https://assignment-no-eleven-server.vercel.app/services');
      const userFoods = res.data.filter(food => food.donorEmail === user?.email);
      setMyFoods(userFoods);
    } catch {
      Swal.fire('Error', 'Update failed.', 'error');
    }
  };

  return (
    <section>
      <div className="overflow-x-auto mt-32 max-w-7xl mx-auto px-2 sm:px-6 pb-20 md:pb-0">
        {myFoods.length === 0 ? (
          <p className="text-center py-16 sm:py-24 text-gray-500 italic text-base sm:text-lg select-none">
            No food items found. Add some delicious food!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full shadow-xl rounded-xl border border-gray-300 bg-[#edeceb] text-[10px] sm:text-xs md:text-sm lg:text-base">
              <thead className="bg-[#cec9c5] text-white sticky top-0 z-10 rounded-t-xl">
                <tr>
                  <th className="w-8 sm:w-10 md:w-12 lg:w-16 text-black px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-left font-semibold uppercase">#</th>
                  <th className="w-28 sm:w-36 md:w-44 lg:w-52 text-black px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-left font-semibold uppercase">Food</th>
                  <th className="w-16 sm:w-20 md:w-28 lg:w-32 text-black px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-left font-semibold uppercase">Quantity</th>
                  <th className="w-24 sm:w-28 md:w-32 lg:w-40 text-black px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-left font-semibold uppercase">Pickup Location</th>
                  <th className="w-28 sm:w-32 md:w-40 lg:w-44 text-black px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-left font-semibold uppercase">Expires On</th>
                  <th className="w-28 sm:w-32 md:w-40 lg:w-48 text-black px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-center font-semibold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 rounded-b-xl">
                {myFoods.map((food, index) => (
                  <tr key={food._id} className="hover:bg-gray-50 transition">
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-700">{index + 1}</td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                      <img src={food.foodImage} alt={food.foodName} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg border object-cover" />
                      <span className="text-gray-900 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">{food.foodName}</span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700">{food.foodQuantity}</td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700">{food.pickupLocation}</td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700">
                      {new Date(food.expireDate).toLocaleString(undefined, {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-2.5 lg:py-3 text-center space-x-1 sm:space-x-2">
                      <button
                        onClick={() => setEditing(food)}
                        className="px-2 mb-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition text-[10px] sm:text-xs md:text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(food._id)}
                        className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white text-black border border-black rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black transition text-[10px] sm:text-xs md:text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editing && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Update Food Item</h2>
            <form onSubmit={handleUpdate} className="space-y-4 sm:space-y-5">
              {['foodName', 'foodImage', 'foodQuantity', 'pickupLocation'].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  defaultValue={editing[field]}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder={field.replace(/([A-Z])/g, ' $1')}
                />
              ))}
              <input
                type="datetime-local"
                name="expireDate"
                defaultValue={formatDateForInput(editing.expireDate)}
                required
                className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                name="additionalNotes"
                defaultValue={editing.additionalNotes}
                rows={3}
                placeholder="Additional Notes (optional)"
                className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="px-4 sm:px-6 py-2 bg-gray-300 rounded-md font-semibold hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition text-sm"
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
