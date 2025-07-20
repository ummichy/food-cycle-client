// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import axios from 'axios';

// const FeaturedFoods = () => {
//   const [featuredFoods, setFeaturedFoods] = useState([]);

//   useEffect(() => {
//     axios.get('https://assignment-no-eleven-server.vercel.app/services')
//       .then(res => {
//         const availableFoods = res.data.filter(food => food.status === 'available');
//         const sortedByQuantity = availableFoods.sort((a, b) => b.foodQuantity - a.foodQuantity);
//         setFeaturedFoods(sortedByQuantity.slice(0, 6));
//       })
//       .catch(err => console.error('Failed to fetch foods:', err));
//   }, []);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16 text-black">
//       <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Sharing Table</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {featuredFoods.map(food => (
//           <div key={food._id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
//             <img
//               src={food.foodImage}
//               alt={food.foodName}
//               className="h-48 w-full object-cover rounded-t-xl"
//             />
//             <div className="p-5 text-black bg-[#edeceb]shadow-2xl">
//               <h3 className="text-xl font-semibold">{food.foodName}</h3>
//               <p className="mt-1">Quantity: <span className="font-medium">{food.foodQuantity}</span></p>
//               <p className="text-sm mt-1">Pickup: {food.pickupLocation}</p>
//               <p className="text-sm mt-1 mb-3">Expires: {new Date(food.expireDate).toLocaleDateString()}</p>
//               <Link to={`/food/${food._id}`}>
//                 <button className="w-full py-2 rounded-lg bg-[#edeceb]   border border-black text-black hover:bg-black hover:text-white font-semibold transition duration-300">
//                   View Details
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-12">
//         <Link to="/available-foods">
//           <button className="px-8 py-3 rounded-full bg-[#edeceb]  border border-black text-black hover:bg-black hover:text-white font-semibold transition duration-300">
//             Show All
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default FeaturedFoods;

































// import React from 'react';
// import { Link } from 'react-router';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// const fetchFoods = async () => {
//   const res = await axios.get('https://assignment-no-eleven-server.vercel.app/services');
//   return res.data;
// };

// const FeaturedFoods = () => {
//   const { data, error, isLoading } = useQuery(['foods'], fetchFoods);

//   if (isLoading) {
//     return (
//       <section className="max-w-7xl mx-auto px-4 py-16 text-black">
//         <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Sharing Table</h2>
//         <p className="text-center text-white">Loading...</p>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="max-w-7xl mx-auto px-4 py-16 text-black">
//         <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Sharing Table</h2>
//         <p className="text-center text-red-500">Failed to fetch foods. Please try again later.</p>
//       </section>
//     );
//   }

//   // Filter and sort like before
//   const availableFoods = data.filter(food => food.status === 'available');
//   const sortedByQuantity = availableFoods.sort((a, b) => {
//     // Assuming foodQuantity is a string like "3 containers" — to sort by number, extract number
//     const aQty = parseInt(a.foodQuantity) || 0;
//     const bQty = parseInt(b.foodQuantity) || 0;
//     return bQty - aQty;
//   });
//   const featuredFoods = sortedByQuantity.slice(0, 6);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16 text-black">
//       <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Sharing Table</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {featuredFoods.map(food => (
//           <div
//             key={food._id}
//             className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
//           >
//             <img
//               src={food.foodImage}
//               alt={food.foodName}
//               className="h-48 w-full object-cover rounded-t-xl"
//             />
//             <div className="p-5 text-black bg-[#edeceb] shadow-2xl">
//               <h3 className="text-xl font-semibold">{food.foodName}</h3>
//               <p className="mt-1">
//                 Quantity: <span className="font-medium">{food.foodQuantity}</span>
//               </p>
//               <p className="text-sm mt-1">Pickup: {food.pickupLocation}</p>
//               <p className="text-sm mt-1 mb-3">
//                 Expires: {new Date(food.expireDate).toLocaleDateString()}
//               </p>
//               <Link to={`/food/${food._id}`}>
//                 <button className="w-full py-2 rounded-lg bg-[#edeceb] border border-black text-black hover:bg-black hover:text-white font-semibold transition duration-300">
//                   View Details
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-12">
//         <Link to="/available-foods">
//           <button className="px-8 py-3 rounded-full bg-[#edeceb] border border-black text-black hover:bg-black hover:text-white font-semibold transition duration-300">
//             Show All
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default FeaturedFoods;

import React from 'react';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFoods = async () => {
  const res = await axios.get('https://assignment-no-eleven-server.vercel.app/services');
  return res.data;
};

const FeaturedFoods = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['foods'],
    queryFn: fetchFoods,
  });

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 text-black">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Sharing Table</h2>
        <p className="text-center text-white">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 text-black">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Sharing Table</h2>
        <p className="text-center text-red-500">Failed to fetch foods. Please try again later.</p>
      </section>
    );
  }

  // Filter and sort foods
  const availableFoods = data.filter(food => food.status === 'available');
  const sortedByQuantity = availableFoods.sort((a, b) => {
    const aQty = parseInt(a.foodQuantity) || 0;
    const bQty = parseInt(b.foodQuantity) || 0;
    return bQty - aQty;
  });
  const featuredFoods = sortedByQuantity.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-black">
      <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Sharing Table</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredFoods.map(food => (
          <div
            key={food._id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <div className="p-5 text-black bg-[#edeceb] shadow-2xl">
              <h3 className="text-xl font-semibold">{food.foodName}</h3>
              <p className="mt-1">
                Quantity: <span className="font-medium">{food.foodQuantity}</span>
              </p>
              <p className="text-sm mt-1">Pickup: {food.pickupLocation}</p>
              <p className="text-sm mt-1 mb-3">
                Expires: {new Date(food.expireDate).toLocaleDateString()}
              </p>
              <Link to={`/food/${food._id}`}>
                <button className="w-full py-2 rounded-lg bg-[#edeceb] border border-black text-black hover:bg-black hover:text-white font-semibold transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/available-foods">
          <button className="px-8 py-3 rounded-full bg-[#edeceb] border border-black text-black hover:bg-black hover:text-white font-semibold transition duration-300">
            Show All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedFoods;


