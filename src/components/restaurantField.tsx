// import React, { useEffect, useState } from 'react';
// import DetallesRestaurante from './restaurant.tsx';
// import restaurantsData from '../../public/json/restaurants.json';

// const RestaurantField = () => {
//     const [restaurants, setRestaurants] = useState([]);

//     useEffect(() => {
//         setRestaurants(restaurantsData);
//     }, []);

//     return (
//         <div>
//             {restaurants.map((restaurant, index) => (
//                 <DetallesRestaurante key={index} data={restaurant} />
//             ))}
//         </div>
//     );
// };

// export default RestaurantField;