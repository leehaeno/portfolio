import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from "./utils/scrolltop.js";

import App from './App.jsx'

if ('scrollRestoration' in history) {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>

)
