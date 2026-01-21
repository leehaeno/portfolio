import { getLenis } from "./lenis";

export function scrollLock(locked = true) {
    const lenis = getLenis();
    if (locked) {
        document.body.classList.add('scroll-disable');
        lenis.stop();
    } else {
        document.body.classList.remove('scroll-disable');
        lenis.start();
    } 
}