import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ClientOrder = () => {
  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'March'], // Labels
    datasets: [
      {
        label: 'Orders',
        data: [1, 2, 3], // Data values
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `Orders: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true, // Keep x-axis
      },
      y: {
        display: true, // Keep y-axis
        ticks: {
          display: false, // Hide y-axis ticks (the count values)
        },
        grid: {
          drawBorder: false, // Optionally remove the border of the grid
        },
      },
    },
  };

  return (
    <>
      <div className="clientOrderContainer">
        <div className="container">
          <h3>Client Orders</h3>
          <div style={{ width: '100%', height: '120px' }}> {/* Adjusted height */}
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientOrder;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { LineChart, Line, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

// const ClientOrder = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/yourOrder`);
//         setOrders(response.data.orderInfo);
//       } catch (error) {
//         console.error('Error fetching orders', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className='client_charts'>
//       <h4>Total Orders</h4>
//       <ResponsiveContainer width="100%" height={150}>
//         <LineChart data={orders}>
//           <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//           <Tooltip />
//           <Line type="monotone" dataKey="total" stroke="#ff7300" dot={false} />
//         </LineChart>
//       </ResponsiveContainer>
//       <div className="ordersTable">
//         {orders.map(order => (
//           <div className="orderRow" key={order._id}>
//             <div>{order.items[0]?.heading}</div>
//             <div>{order.status}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientOrder;
