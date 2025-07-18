import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import AppRouter from './Routes/AppRouter.jsx'
import { Authprovider } from './AuthProvider/Authprovider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={AppRouter} />
    </Authprovider>
  </StrictMode>,
)
