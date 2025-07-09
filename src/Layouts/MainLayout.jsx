import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />

            {/* Toast Notification Container */}
            <ToastContainer />
        </div>
    );
};

export default MainLayout;
