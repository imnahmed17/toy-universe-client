import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Home from './pages/Home/Home.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import AllToys from './pages/AllToys/AllToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'all-toys',
        element: <AllToys />
      },
      {
        path: 'blogs',
        element: <Blogs />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);