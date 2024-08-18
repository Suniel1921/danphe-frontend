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
import Learningcenter from "./pages/Learning Center Navbar/Learning-center/Learningcenter";
import Starting_A_Business from "./pages/Starting Business Navbar/Starting_A_Business/Starting_A_Business";
import None_Profit_Corporation from "./pages/Starting Business Navbar/None_Profit_Corporation/None_Profit_Corporation";
import C_Corporation from "./pages/Starting Business Navbar/C_Corporation/C_Corporation";
import S_Corporation from "./pages/Starting Business Navbar/S_Corporation/S_Corporation";
import Limited_Liability_Company from "./pages/Starting Business Navbar/Limited_Liability_Company/Limited_Liability_Company";
import Incorporate_In_Welfare from "./pages/Starting Business Navbar/Incorporate_In_Welfare/Incorporate_In_Welfare";
import Employer_ID_Number from "./pages/Starting Business Navbar/Employer_ID_Number/Employer_ID_Number";
import Registered_Agent_Service from "./pages/Starting Business Navbar/Registered_Agent_Service/Registered_Agent_Service";


const App = () => {
  return (
    <>
      <Router>
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
              <Route path='/new-order' element={<Contact />} />
              <Route path='/existing-order' element={<Contact />} />
              <Route path='/contact-info' element={<UserContactInfo />} />
              <Route path='/company-info' element={<UserCompanyInfo />} />
              <Route path='/checkout' element={<Checkout />} />

              {/* Suman */}
              <Route path='/About_Ascend' element={<About_Ascend />} />
              <Route path='/Corporate_Gurantee' element={<Corporate_Gurantee />} />
              <Route path='/Customer_review' element={<Customer_review />} />

              {/* Learning Center */}
              <Route path='/StartUp_Task' element={<StartUp_Task />} />
              <Route path='/Corporation_VS_LLC' element={<Corporation_VS_LLC />} />
              <Route path='/Benefits_of_Incorporating' element={<Benefits_of_Incorporating />} />
              <Route path='/Incorporation_101' element={<Incorporation_101 />} />
              <Route path='/Industry_specific_information' element={<Industry_specific_information />} />
              <Route path='/Tax_filings' element={<Tax_filings />} />
              <Route path='/State_guides' element={<State_guides />} />
              <Route path='/Learningcenter' element={<Learningcenter />} />



              {/* starting a business navbar */}
              <Route path='/Registered_Agent_Service' element={ <Registered_Agent_Service/> } />
              <Route path='/Employer_ID_Number' element={ <Employer_ID_Number/> } />
              <Route path='/Incorporate_In_Welfare' element={ <Incorporate_In_Welfare/> } />
              <Route path='/Limited_Liability_Company' element={ <Limited_Liability_Company/> } />
              <Route path='/S_Corporation' element={ <S_Corporation/> } />
              <Route path='/C_Corporation' element={ <C_Corporation/> } />
              <Route path='/None_Profit_Corporation' element={ <None_Profit_Corporation/> } />
              <Route path='/Starting_A_Business' element={ <Starting_A_Business/> } />


              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path='/client-dashboard' element={<ClientDashboard />} />
                <Route path='/edit-info' element={<EditInfo />} />
                <Route path='/upload-documents' element={<UploadDocuments />} />
              </Route>

              {/* Admin Protected Routes */}
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
