import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Homepage from './pages/HomePage'
import ArchivePage from './pages/ArchivePage'
import TrashPage from './pages/TrashPage'
import Menupage from './pages/MenuPage'
import AuthPage from './pages/AuthPage'
import AuthLayout from './Authlayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Menupage />,
        children: [
          {
            path: 'home',
            element: <Homepage />,
          },
          {
            path: 'archive',
            element: <ArchivePage />,
          },
          {
            path: 'trash',
            element: <TrashPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '*',
    element: <Navigate to="/auth" replace />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)