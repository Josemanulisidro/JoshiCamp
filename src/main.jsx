import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App/index' //Se cambia la ruta para redireccionar a lo nuestro

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
