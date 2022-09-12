import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NightModeContextProvider } from './context/nightModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NightModeContextProvider>
    <App />
    </NightModeContextProvider>
  </React.StrictMode>
)
