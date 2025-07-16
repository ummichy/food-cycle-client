import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router';
import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={<div className="text-center py-8 text-lg">Loading...</div>}
      />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
