import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Router } from './components/Router.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ModalProvider } from './components/ContextModal.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
       <Router />
      </ModalProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
