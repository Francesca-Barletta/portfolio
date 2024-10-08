import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { AppProvider } from './context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppProvider>
    <App />
    </AppProvider>
  </StrictMode>,
)
