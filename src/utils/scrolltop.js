import { useEffect } from 'react';
import { getLenis } from "@/utils";

export default function ScrollToTop (){

    useEffect(() => {
        getLenis();
        window.scrollTo(0, 0);
    }, []);

    // useEffect(() => {
    //     getLenis();
    //     if ('scrollRestoration' in history) {
    //         window.history.scrollRestoration = 'manual';
    //     }
    //     window.scrollTo(0, 0)
    //     requestAnimationFrame(() => {
    //         window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    //     });
    // }, []);

    return null;
};