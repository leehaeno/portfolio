import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// style
import styles from "./TitleComponents.module.scss";

const Title = ({title, subject}) => {
    const containerRef = useRef(null);
    const q = gsap.utils.selector(containerRef);

    useGSAP(() => {
        //// title
        gsap.to(containerRef.current, {
            duration: 1,
            startAt: {filter: 'brightness(100%) contrast(100%)'},
            filter:"brightness(60%) contrast(135%)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "80% center",
                end: "bottom top",
                scrub: true,
            },
        });
    },{scope: containerRef})
    
    return (
        <section id="sub_top" className={styles.sub__top}>
            <h2 className='blind'>{title}</h2>
            <article className={styles.title} ref={containerRef}>
                <div className={styles.title__inner}>
                    <h1 className={styles.logo}>Haeno’s Web</h1>
                    <p className={styles.text}>Available</p>
                </div>
                <div className={styles.subject}>
                    <div className={styles.tit1}><span>{title}</span></div>
                    <div className={styles.shape}>
                        <svg  viewBox="0 0 147 147" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z" fill="#6fff69"/></svg>
                    </div>
                    <div className={styles.tit2}><span>{subject}</span></div>
                </div>
            </article>
        </section>
    );
};

export { Title };


