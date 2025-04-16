import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import ShopProvider from './components/context/ShopContext.jsx' 

import "./styles/main.scss"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ShopProvider> 
      <App/>
    </ShopProvider>
    </BrowserRouter>
  </StrictMode>,
)



