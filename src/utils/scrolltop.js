import { useEffect } from 'react';
import { getLenis } from "@/utils";

export default function (){
    useEffect(() => {
        // getLenis();
        // if ('scrollRestoration' in history) {
        //     window.history.scrollRestoration = 'manual';
        // }
        // window.scrollTo(0, 0)
        // requestAnimationFrame(() => {
        //     window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        // });
        
        const lenis = getLenis();

        const forceTop = () => {
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('pageshow', forceTop);

        return () => {
            window.removeEventListener('pageshow', forceTop);
        };
    }, []);

    return null;
};