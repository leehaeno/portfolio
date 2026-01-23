import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from "./utils/scrolltop.js";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
)
