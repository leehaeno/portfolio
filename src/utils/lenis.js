import Lenis from "@studio-freight/lenis";

let lenisInstance = null;

export function getLenis() {
    if (!lenisInstance) {
        lenisInstance = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
        });

        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
    return lenisInstance;
}