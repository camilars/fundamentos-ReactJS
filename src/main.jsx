import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home'
import GlobalStyle from './blobal-styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle/>
  </React.StrictMode>
)
