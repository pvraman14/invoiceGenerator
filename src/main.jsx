import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InvoiceGen from './invoiceGen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoiceGen />
  </StrictMode>,
)
