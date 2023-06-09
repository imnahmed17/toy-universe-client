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
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AddAToy from './pages/AddAToy/AddAToy.jsx';
import MyToys from './pages/MyToys/MyToys.jsx';
import ToyDetails from './pages/ToyDetails/ToyDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'all-toys',
        element: <AllToys />,
        loader: () => fetch('https://toy-universe-server-lake.vercel.app/totalToys')
      },
      {
        path: 'my-toys',
        element: <PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path: 'add-a-toy',
        element: <PrivateRoute><AddAToy /></PrivateRoute>
      },
      {
        path: 'toy/:id',
        element: <PrivateRoute><ToyDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-universe-server-lake.vercel.app/toys/${params.id}`)
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
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