import { useState, useEffect, useRef } from 'react';
import styles from './CommonLoader.module.scss';
import gsap from 'gsap';
import { scrollLock } from '@/utils';

const CommonLoader = ({setLoading}) => {
    
    const counts = [[9, 8, 7, 4, 2, 0], [9, 5, 9, 7, 4, 0]];
    const loaderRef = useRef(null);
    const countRefs = useRef([]);
    const countWrapRefs = useRef([]);
    const svgRefs = useRef([]);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {

        // 첫화면 lenis 정지
        scrollLock(true);

        // 첫화면 loading 시작
        setLoading(true);
        
        // 애니메이션
        const tl = gsap.timeline();
        const windowWidth = window.innerWidth;
        const wrapperWidth = countWrapRefs.current[0].offsetWidth;
        const wrapperCountWidth = countRefs.current[0].offsetWidth - wrapperWidth;
        const finalPosition  = windowWidth - wrapperWidth;
        const stepDistance = finalPosition  / 6;

        // count 애니메이션
        tl.to(countRefs.current, {
            x: -wrapperCountWidth,
            duration: 0.75,
            delay: 0.5,
            ease: "power4.inOut",
        });

        for (let i = 1; i <= 6; i++) {
            const xPosition = -wrapperCountWidth + i * wrapperWidth;
            tl.to(countRefs.current, {
                x: xPosition,
                duration: 0.75,
                ease: "power4.inOut",
                onStart: () => {
                    gsap.to(countWrapRefs.current, {
                        x: stepDistance * i,
                        duration: 0.75,
                        ease: "power4.inOut",
                    });
                }
            });
        }

        // revealer svg 애니메이션
        // const duration = [0, 0.25, 0.45];
        // const delays = [0, 2, 4];
        const duration = [0.4, 0.25, 0.4];
        const delays = [1, 2.5, 4];
        const colors = ['#F7F7F7', '#131313', '#F7F7F7'];
        const visited = sessionStorage.getItem("hasVisited");

        svgRefs.current.forEach((el, i) => {
            gsap.to(el, {
                scale: 45,
                duration: 1.5,
                ease: "power4.inOut",
                delay: delays[i],
                onStart: () =>{
                    gsap.to(countRefs.current, {
                        duration: duration[i],
                        ease: "power4.inOut",
                        color:colors[i],
                        delay: 0.5,
                    });
                },
                onComplete: () => {
                    if (i === svgRefs.current.length - 1) {
                        gsap.to(loaderRef.current, {
                            opacity: 0,
                            duration: 0.2,
                            onComplete: () =>{ 
                                // 로딩 애니메이션 후 lenis 시작
                                scrollLock(false);
                                setShowLoader(false);
                                setLoading(false);
                                if (!visited) {
                                    sessionStorage.setItem("hasVisited", "true");
                                }
                            },
                        });
                    }
                }
            });
        });
    }, []);
   
    if (!showLoader) return null;

    return (
        <div className={styles.loader} ref={loaderRef}>
            {counts.map((digits, i) => (
                <div
                    className={styles.countWrapper}
                    ref={el =>  countWrapRefs.current[i] = el}
                    key={i}
                >
                    <div
                        className={styles.count}
                        ref={el => countRefs.current[i] = el}
                    >
                        {digits.map((num, idx) => (
                            <div className={styles.digit} key={idx}>
                                <span>{num}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className={`${styles.levealer} ${styles.levealer1}`}>
                <svg
                    ref={el => svgRefs.current[0] = el}
                    width="147"
                    height="147"
                    viewBox="0 0 147 147"
                    xmlns="http://www.w3.org/2000/svg"
                >   
                    <path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z" fill="#131313"/>
                </svg>
            </div>
            <div className={`${styles.levealer} ${styles.levealer2}`}>
                <svg
                    ref={el => svgRefs.current[1] = el}
                    width="147"
                    height="147"
                    viewBox="0 0 147 147"
                    xmlns="http://www.w3.org/2000/svg"
                >   
                    <path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z" fill="#6fff69"/>
                </svg>
            </div>
            <div className={`${styles.levealer} ${styles.levealer3}`}>
                <svg
                    ref={el => svgRefs.current[2] = el}
                    width="147"
                    height="147"
                    viewBox="0 0 147 147"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z" fill="#1C46F5"/>
                </svg>
            </div>
        </div>
    );
};

export { CommonLoader };
