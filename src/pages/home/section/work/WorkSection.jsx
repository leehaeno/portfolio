import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

// componets
import{ Button, Card } from "@/components/ui";

// data
import { projectList } from "@/utils/projects";

// style
import styles from "./WorkSection.module.scss";

const WorkSection = () => {
    const location = useLocation();
    const workSectionRef = useRef(null);
    const q = gsap.utils.selector(workSectionRef);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // 사이즈 861 이상부터
        mm.add("(min-width: 861px)", () => {

            //// work svg
            const workSvg = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.work__title}`),
                    start: "top top",
                    end: `top+=${innerHeight} center`,
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });

            workSvg.set(q(`.${styles.shape} clipPath`) ,{ scale: "0", rotate: "-180",})
            .to(q(`.${styles.work__title}`) ,{ filter: "blur(0px)", },"0")
            .to(q(`.${styles.shape} clipPath`) ,{ scale: 1, rotate: 0 },"0");

            //// work title
            const workTitle = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.work__title}`),
                    start: "10% top",
                    end: "55% bottom",
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });

            workTitle.to(q(`.${styles.work__title__inner} .${styles.title} p`) ,{ x: "0%", },"0-=0.4")
            .to(q(`.${styles.shape} clipPath`) ,{ scale: "50" },"-=0.35")
            .to(q(`.${styles.work__title__inner} .${styles.title} p`) ,{ autoAlpha: "0" },"1");

            //// work cards
            const workCards = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.work__horizontal}`),
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            });

            workCards.to(q(`.${styles.item1}`) ,{ rotate: 0 , translateY:0 },"0")
            .to(q(`.${styles.item2}`) ,{ rotate: 0 , translateY:0 },"0")
            .to(q(`.${styles.item3}`) ,{ rotate: 0 , translateY:0 },"0+=0.2")
            .to(q(`.${styles.item4}`) ,{ rotate: 0 , translateY:0 },"0+=0.3");

            //// work horizontal
            gsap.to(q(`.${styles.work__horizontal__inner} .${styles.contents}`), { 
                xPercent: -100,
                scrollTrigger: {
                    trigger: q(`.${styles.work__horizontal}`),
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            });

            gsap.to( q(`.${styles.work__inner}`) , {
                duration: 1,
                clipPath:"inset(2rem 2rem round 5rem)",
                scrollTrigger: {
                    trigger: q(`.${styles.work__inner}`) ,
                    start: "bottom bottom",
                    end: "bottom center",
                    scrub: true,
                },
            });
            
        });

        // 사이즈 860 이하부터
        mm.add("(max-width: 860px)", () =>{

             //// work svg
            const workSvg = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.work__title}`),
                    start: "top top",
                    end: `top+=${innerHeight} center`,
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });

            workSvg.set(q(`.${styles.shape} clipPath`) ,{ scale: "0", rotate: "-180",})
            .to(q(`.${styles.shape} clipPath`) ,{ scale: "1", rotate: "0", duration: 0.6, },"0");
            
            //// work title
            const workTitle = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.work__title}`),
                    start: "10% top",
                    end: "55% bottom",
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });
            workTitle
            .to(q(`.${styles.work__title__inner} .${styles.title} p`) ,{ x: "0"},"0-=0.8")
            .to(q(`.${styles.shape} clipPath`) ,{ scale: "50"},"-=0.8")
            .to(q(`.${styles.work__title__inner} .${styles.title} p`) ,{autoAlpha: "0"},"-=0.4");

            ScrollTrigger.create({
                trigger: q(`.${styles.work__title__inner}`),
                start: "top top",
                end:`bottom+=${innerHeight} top`,
                pin: true, 
                scrub: true,
                invalidateOnRefresh: true,
                anticipatePin: true,
            });
        });

    },{scope: workSectionRef})

    return (
        <section id="work" className={styles.work} ref={workSectionRef}>
            <h2 className='blind'>work</h2>
            <article className={styles.work__inner}>
                <div className={styles.work__title} >
                    <div className={styles.work__title__inner}>
                        <svg className={styles.shape} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 0 0" fill="none">
                            <defs>
                                <clipPath id="shape01">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={styles.title}>
                            <p>work</p>
                        </div>
                    </div>
                </div>
                <div className={styles.work__horizontal}>
                    <div className={styles.work__horizontal__inner}>
                        <div className={styles.contents}>
                            <div className={styles.list__wrap}>
                                <ul className={styles.list}>
                                    {projectList
                                    .filter(item => item.category === "work")
                                    .slice(0, 4)
                                    .map((project, i)=> (
                                        <li 
                                            key={project.id}
                                            className={`${styles.item} ${styles[`item${i + 1}`]}`}
                                        >
                                            <Card 
                                                to={`/index/${project.id}`}
                                                state={{ backgroundLocation: location }}
                                                project={project} 
                                            />
                                        </li>
                                    ))}
                                    <li className={`${styles.item} ${styles.button}`}>
                                        <Button color="green" href="/work">all work</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export { WorkSection };