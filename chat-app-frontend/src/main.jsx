import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Approutes from './config/routes'
import { Toaster } from 'react-hot-toast'
import { ChatProvider } from './Context/ChatContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    <Toaster position="top-center" />
    <ChatProvider>
      <Approutes />
    </ChatProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
