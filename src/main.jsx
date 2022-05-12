import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home'
import { GlobalStyle } from './global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <GlobalStyle />
      <Home />
    </React.StrictMode>
)
