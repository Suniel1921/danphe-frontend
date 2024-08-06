
import React from 'react';
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

const App = () => {
  return (
    <>
      <Router>
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

            {/* Protected route */}
            <Route element={<ProtectedRoute />}>
              <Route path='/client-dashboard' element={<ClientDashboard />} />
              <Route path='/edit-info' element={<EditInfo/>} />
            </Route>

            {/* Admin protected route */}
            <Route path='/dashboard' element={<AdminRoute />}>
              <Route path='admin' element={<AdminDashboard />} />
              <Route path='admin/createPackage' element={<CreatePackage />} />
              <Route path='admin/manage-orders' element={<ManageOrders />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
