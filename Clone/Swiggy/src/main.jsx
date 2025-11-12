import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Body from './components/Body.jsx'
import Signin from './components/Signin.jsx'
import Offer from './components/Offer.jsx'
import Help from './components/Help.jsx'
import Cart from './components/Cart.jsx'
import Error from './components/Error.jsx'
import Restaurantdetails from './components/Restaurantdetails.jsx'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element: <Body/>
      },
      {
        path:'/offer',
        element:<Offer/>
      },
      {
        path:'/help',
        element:<Help/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/restaurantdetails',
        element:<Restaurantdetails/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
)

