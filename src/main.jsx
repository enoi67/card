import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Routers from './routes/Route'
import BasketProvider from './Context/basket'
import UserProvider from './Context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  <BasketProvider>
    <UserProvider>
      <Routers />
    </UserProvider>
  </BasketProvider>
  </div>
)