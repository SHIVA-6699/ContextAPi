import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginCarousel from './Slide.jsx'
import Ref from './Ref.jsx'
import { CartProvider } from './Context/CartApi.jsx'
import CartHome from './pages/CartHome.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <CartHome/>
    </CartProvider>
  </StrictMode>,
)
