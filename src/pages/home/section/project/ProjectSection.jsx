import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

// componets
import{ Card } from "@/components/ui";

// data
import { projectList } from "@/utils/projects";

// style
import styles from "./ProjectSection.module.scss";

const ProjectSection = () => {
    const location = useLocation();
    const projectSectionRef = useRef(null);
    const q = gsap.utils.selector(projectSectionRef);

    useGSAP(() => {

        const mm = gsap.matchMedia();

        // 사이즈 861 이상부터
        mm.add("(min-width: 861px)", () => {

            //// project title
            gsap.to( q(`.${styles.project} .${styles.title} p`), {
                y: 0,
                scale:1,
                scrollTrigger: {
                    trigger:  projectSectionRef.current,
                    start: "top top",
                    end: `top+=${innerHeight + 500} center`,
                    scrub: true,
                },
            });
            
            //// project cards
            const projectCards = gsap.timeline({
                scrollTrigger: {
                    trigger: projectSectionRef.current,
                    start: `top+=${innerHeight} top`,
                    end: "bottom-=500 bottom",
                    scrub: true,
                }
            });

            projectCards
            .to(q(`.${styles.item1}`) ,{ y: "0vh", x: "0%",  rotate: "0", },"0+=0.2")
            .to(q(`.${styles.item2}`) ,{ y: "0vh", x: "0%", },"0+=0.3")
            .to(q(`.${styles.item3}`) ,{  y: "0vh",  x: "0%", rotate: "0", },"0+=0.4");

        });

        // 사이즈 860 이하부터
        mm.add("(max-width: 860px)", () => {

            //// project cards
            const projectTitle = gsap.timeline();
            projectTitle.to(q(`.${styles.project} .${styles.title}`) ,{autoAlpha: "0", duration: 0.4,},"+=0.5");

            ScrollTrigger.create({
                animation: projectTitle,
                trigger: q(`.${styles.project__inner} .${styles.title}`),
                start: "top top",
                end: `+=${q(`.${styles.project__inner}`)[0].offsetHeight - (q(`.${styles.list__wrap}`)[0].offsetHeight / 2)}`,
                pin: true, 
                scrub: true,
                invalidateOnRefresh: true,
                anticipatePin: true,
            });

        });

        // 사이즈 540 이상부터
        mm.add("(min-width: 541px)", () => {
            gsap.to( q(`.${styles.project__inner}`), {
                duration: 1,
                clipPath:"inset(2rem 2rem round 5rem)",
                scrollTrigger: {
                    trigger:  projectSectionRef.current,
                    start: "bottom bottom",
                    end: "bottom center",
                    scrub: true,
                },
            });
        });
        

    },{scope: projectSectionRef})

    return (
        <section id="project" className={styles.project} ref={projectSectionRef} >
            <h2 className='blind'>project</h2>
            <article className={styles.project__inner}>
                <div className={styles.project__inner__contents}>
                    <div className={styles.title}>
                        <p>project</p>
                    </div>
                    <div className={styles.list__wrap}>
                        <ul className={styles.list}>
                            {projectList
                            .filter(item => item.category === "project")
                            .slice(0, 3)
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

                            {/* <li className={`${styles.item} ${styles.item1}`}>
                                <Card thum={thum} logo={logo}/>
                            </li>
                            <li className={`${styles.item} ${styles.item2}`}>
                                <Card thum={thum} logo={logo}/>
                            </li>
                            <li className={`${styles.item} ${styles.item3}`}>
                                <Card thum={thum} logo={logo}/>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
};

export { ProjectSection };