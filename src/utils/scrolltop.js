import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLenis } from "@/utils";

export default function (){

  useEffect(() => {
    const lenis = getLenis();
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    lenis.scrollTo(0, { immediate: true, duration: 0 });

    requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, []);

    return null;
};