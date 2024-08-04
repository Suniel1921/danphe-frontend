// // import React from 'react';
// // import { useLocation } from 'react-router-dom';
// // import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
// // import '../contact/orderProgress.css';

// // const steps = [
// //   { path: '/home', label: 'Order Received' },
// //   { path: '/quote-pricing', label: 'Quote Pricing' },
// //   { path: '/package-selection/:id', label: 'Package Selection' },
// //   { path: '/cart', label: 'Cart' },
// //   { path: '/contact-info', label: 'Contact Info' },
// //   { path: '/company-info', label: 'Company Info' },
// //   { path: '/order-completed', label: 'Order Completed' },
// // ];

// // const OrderProgress = () => {
// //   const location = useLocation();
// //   const currentPath = location.pathname;

// //   const getStatus = (stepPath) => {
// //     if (currentPath === stepPath) return 'current';
// //     const stepIndex = steps.findIndex(step => currentPath.includes(step.path));
// //     return stepIndex >= steps.findIndex(step => step.path === stepPath) ? 'completed' : 'pending';
// //   };

// //   return (
// //     <div className="order-progress">
// //       {steps.map((step, index) => (
// //         <div key={step.path} className={`step ${getStatus(step.path)}`}>
// //           {index + 1}. {step.label}
// //           {getStatus(step.path) === 'completed' ? (
// //             <FaCheckCircle className="step-icon completed-icon" />
// //           ) : (
// //             <FaRegCircle className="step-icon pending-icon" />
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default OrderProgress;





// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import '../contact/orderProgress.css';

// const steps = [
//   { path: '/home', label: 'State & Entity' },
//   { path: '/quote-pricing', label: 'Package Selection' },
//   { path: '/package-selection/:id', label: 'Contact Info' },
//   { path: '/company-info', label: 'Company Info' },
//   { path: '/review-checkout', label: 'Review & Checkout' },
// ];

// const OrderProgress = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const getStepStatus = (stepPath) => {
//     if (currentPath === stepPath) return 'current';
//     const stepIndex = steps.findIndex(step => currentPath.includes(step.path));
//     return stepIndex >= steps.findIndex(step => step.path === stepPath) ? 'completed' : 'pending';
//   };

//   return (
//     <div className="order-progress">
//       {steps.map((step, index) => (
//         <div key={step.path} className={`step ${getStepStatus(step.path)}`}>
//           {index + 1}. {step.label}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrderProgress;






import React from 'react';
import { useLocation } from 'react-router-dom';
import '../contact/orderProgress.css';
import { FaCheckCircle } from 'react-icons/fa';

const steps = [
  { path: '/quote-pricing', label: 'Quote Pricing' },
  { path: '/package-selection', label: 'Package Selection' },
  { path: '/cart', label: 'Cart' },
  { path: '/contact-info', label: 'Contact Info' },
  { path: '/company-info', label: 'Company Info' },
  { path: '/checkout', label: 'Review & Checkout' },
];

const OrderProgress = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getStatus = (stepPath) => {
    if (currentPath.startsWith(stepPath)) return 'current';
    const stepIndex = steps.findIndex(step => currentPath.startsWith(step.path));
    return stepIndex >= steps.findIndex(step => step.path === stepPath) ? 'completed' : 'pending';
  };

  return (
    <div className="order-progress">
      {steps.map(step => (
        <div key={step.path} className={`step ${getStatus(step.path)}`}>
          <FaCheckCircle className="icon" />
          {step.label}
        </div>
      ))}
    </div>
  );
};

export default OrderProgress;
