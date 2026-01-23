import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function (){

  useEffect(() => {

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, []);

    return null;
};