// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // Register the required components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const ClientProgress = () => {
//   // Sample data for the chart
//   const data = {
//     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // x-axis labels
//     datasets: [
//       {
//         label: 'Progress',
//         data: [3, 6, 4, 8], // Sample progress data
//         fill: false,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         tension: 0.1, // Line smoothness
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
//             return `Progress: ${context.raw}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Weeks',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Progress',
//         },
//       },
//     },
//   };

//   return (
//     <>
//       <div className="clientProgressContainer">
//         <div className="container">
//           <h3>Client Progress</h3>
//           <div style={{ width: '100%', height: '120px' }}> {/* Adjust the height as needed */}
//             <Line data={data} options={options} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClientProgress;







import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Week 1', uv: 70 },
  { name: 'Week 2', uv: 80 },
  { name: 'Week 3', uv: 75 },
  { name: 'Week 4', uv: 90 },
];

const ClientProgress = () => (
  <div className='client_charts box2'>
    <h4>Progress</h4>
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ClientProgress;
