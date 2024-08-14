import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import AdminRoute from './components/admin/adminProtectedRoute/AdminProtectedRoute';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import ClientDashboard from './components/clientDashboard/ClientDashboard';
import QuotePricing from './pages/pricing/QuotePricing';
import Package from './pages/pricing/Package';
import CreatePackage from './components/admin/dashboardMainContent/packages/CreatePackage';
import Cart from './pages/cart/Cart';
import UserContactInfo from './pages/contact/UserContactInfo';
import UserCompanyInfo from './pages/contact/UserCompanyInfo';
import Contact from './pages/contact/Contact';
import Checkout from './pages/cart/Checkout';
import EditInfo from './components/clientDashboard/clientInfo/EditInfo';
import ManageOrders from './components/admin/dashboardMainContent/manageOrders/ManageOrders';
import UploadDocuments from './components/clientDashboard/clientInfo/UploadDocuments';
import About_Ascend from './pages/Navbar_aboutus/About_Ascend.com/About_Ascend';
import Corporate_Gurantee from './pages/Navbar_aboutus/Corporate Compilance Gurantee/Corporate_Gurantee';
import Customer_review from './pages/Navbar_aboutus/Recent Customer Reviews/Customer_review';
import Benefits_of_Incorporating from "./pages/Learning Center Navbar/Benefits of Incorporating/Benefits_of_Incorporating";
import StartUp_Task from "./pages/Learning Center Navbar/Start-up Tasks/StartUp_Task";
import Corporation_VS_LLC from "./pages/Learning Center Navbar/Corporation vs. LLC/Corporation_VS_LLC";
import Incorporation_101 from "./pages/Learning Center Navbar/Incorporation 101/Incorporation_101";
import Industry_specific_information from "./pages/Learning Center Navbar/Industry Specific Information/Industry_specific_information";
import Tax_filings from "./pages/Learning Center Navbar/Tax Filings & Deducations/Tax_filings";
import State_guides from "./pages/Learning Center Navbar/State Guides/State_guides";

// const StartingBusiness = lazy(() => import('./pages/StartingBusiness'));
// const MaintainingBusiness = lazy(() => import('./pages/MaintainingBusiness'));
// const LearningCenter = lazy(() => import('./pages/LearningCenter'));
// const AboutUs = lazy(() => import('./pages/AboutUs'));

const App = () => {
  return (
    <>
      <Router>
<<<<<<< HEAD
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/quote-pricing' element={<QuotePricing />} />
              <Route path='/package-selection/:id' element={<Package />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/new-order' element={<Contact/>} />
              <Route path='/existing-order' element={<Contact/>} />
              <Route path='/contact-info' element={<UserContactInfo />} />
              <Route path='/company-info' element={<UserCompanyInfo />} />
              <Route path='/checkout' element={<Checkout />} />
=======
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/quote-pricing' element={<QuotePricing />} />
            <Route path='/package-selection/:id' element={<Package />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/new-order' element={<Contact/>} />
            <Route path='/existing-order' element={<Contact/>} />
            <Route path='/contact-info' element={<UserContactInfo />} />
            <Route path='/company-info' element={<UserCompanyInfo />} />
            <Route path='/checkout' element={<Checkout />} />
            


            {/* Suman */}
            <Route path='/About_Ascend' element= { <About_Ascend/> }/> 
            <Route path='/Corporate_Gurantee' element= { <Corporate_Gurantee/> }/> 
            <Route path='/Customer_review' element= { <Customer_review/> }/>

            {/* learning navbar by suman */}
            < Route path='/StartUp_Task' element ={ <StartUp_Task/> } />
            < Route path='/Corporation_VS_LLC' element ={ <Corporation_VS_LLC/> } />
            < Route path='/Benefits_of_Incorporating' element ={ <Benefits_of_Incorporating/> } />
            < Route path='/Incorporation_101' element ={ <Incorporation_101/> } />
            < Route path='/Industry_specific_information' element ={ <Industry_specific_information/> } />
            < Route path='/Tax_filings' element ={ <Tax_filings/> } />
            < Route path='/State_guides' element ={ <State_guides/> } />


>>>>>>> a20daa49b4260944282287a8d4ddfd51cf48c133

              {/* Normal Route */}
              {/* <Route path="/starting-business" element={<StartingBusiness />} />
              <Route path="/maintaining-business" element={<MaintainingBusiness />} />
              <Route path="/learning-center" element={<LearningCenter />} />
              <Route path="/about-us" element={<AboutUs />} /> */}

              {/* Protected route */}
              <Route element={<ProtectedRoute />}>
                <Route path='/client-dashboard' element={<ClientDashboard />} />
                <Route path='/edit-info' element={<EditInfo />} />
                <Route path='/upload-documents' element={<UploadDocuments />} />
              </Route>

              {/* Admin protected route */}
              <Route path='/dashboard' element={<AdminRoute />}>
                <Route path='admin' element={<AdminDashboard />} />
                <Route path='admin/createPackage' element={<CreatePackage />} />
                <Route path='admin/manage-orders' element={<ManageOrders />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
