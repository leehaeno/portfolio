import { Route, Routes, useLocation  } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./utils/scrolltop.js";

// page
import Home from '@/pages/home/Home';
import About from '@/pages/about/About';
import Work from '@/pages/work/Work';
import Contact from '@/pages/contact/Contact';

// component
import { CommonSkip, CommonInner } from '@/components/common';
import{ Modal } from "@/components/ui";

// style
import './assets/scss/style.scss';

function App() {
    const location = useLocation();
    const background = location.state && location.state.backgroundLocation;
    let basePath;

    if (location.pathname.startsWith("/work/")) {
        basePath = "/work";
    } else if (location.pathname.startsWith("/index/")) {
        basePath = "/";
    } else {
        basePath = location.pathname;
    }

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    return (
    <>
        <ScrollToTop />
        <CommonSkip />
        <AnimatePresence mode="wait" initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
            <Routes key={basePath} location={background || location}>
                <Route path="/" element={<CommonInner background={background}/>}>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </AnimatePresence>
        
        {background && (
            <Routes>
                <Route path="index/:projectId" element={<Modal />} />
                <Route path="work/:projectId" element={<Modal />} />   
            </Routes>
        )} 
    </>
    )
}

export default App
