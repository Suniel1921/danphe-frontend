// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// // Register the required components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const TotalProgressWork = () => {
//   // Sample data for the chart
//   const data = {
//     labels: ['Completed', 'In Progress', 'Pending'], // Categories
//     datasets: [
//       {
//         label: 'Progress Distribution',
//         data: [70, 20, 10], // Sample data representing percentage of each category
//         backgroundColor: [
//           'rgba(75, 192, 192, 0.6)',
//           'rgba(153, 102, 255, 0.6)',
//           'rgba(255, 159, 64, 0.6)',
//         ],
//         borderColor: [
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             return `${context.label}: ${context.raw}%`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <>
//       <div className="totalProgressWorkContainer">
//         <div className="container">
//           <h3>Total Progress Work</h3>
//           <div style={{ width: '100%', height: '400px' }}> {/* Adjust height as needed */}
//             <Doughnut data={data} options={options} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TotalProgressWork;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const TotalProgressWork = () => {
  const [data, setData] = useState({
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        label: 'Progress Distribution',
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
        const orders = response.data;

        // Define the progress percentages for each status
        const progressMap = {
          verified: 100,
          processing: 50,
          pending: 20,
        };

        // Calculate the total progress based on order status
        const completed = orders.filter(order => order.status === 'verified').length;
        const inProgress = orders.filter(order => order.status === 'processing').length;
        const pending = orders.filter(order => order.status === 'pending').length;

        const totalOrders = orders.length;

        setData({
          labels: ['Completed', 'In Progress', 'Pending'],
          datasets: [
            {
              label: 'Progress Distribution',
              data: totalOrders > 0 ? [
                (completed / totalOrders * 100).toFixed(2), // Completed
                (inProgress / totalOrders * 100).toFixed(2), // In Progress
                (pending / totalOrders * 100).toFixed(2), // Pending
              ] : [0, 0, 0],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        setError('Error fetching orders');
        console.error('Error fetching orders', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="totalProgressWorkContainer">
      <div className="container">
        <h3>Total Progress Work</h3>
        <div style={{ width: '100%', height: '400px' }}> {/* Adjust height as needed */}
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TotalProgressWork;
