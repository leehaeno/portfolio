import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// componets
import{ Card } from "@/components/ui";
import{ Button } from "@/components/ui";

// data
import { projectList } from "@/utils/projects";

// style
import styles from "./ListSection.module.scss";

const ITEMS_TO_SHOW = 9;

const ListSection = () => {
    const location = useLocation();
    const worksSectionRef = useRef(null);
    const q = gsap.utils.selector(worksSectionRef);
    
    const [category, setCategory] = useState("all");
    const [isAnimating, setIsAnimating] = useState(false);
    const [showIndex, setShowIndex] = useState(ITEMS_TO_SHOW);

    const filteredList = category === "all" ? 
          projectList :  projectList.filter(item => item.category === category);

    const hasNext = showIndex < filteredList.length;

    const changeTab = (nextCategory) => {
        if (isAnimating) return; 
        if (category === nextCategory) return;

        setIsAnimating(true);

        gsap.to(q(`.${styles.list} li`), {
            autoAlpha: 0,
            y: -20,
            duration: 0.25,
            //stagger: 0.04,
            onStart: () =>{

            },
            onComplete: () => {
                setCategory(nextCategory);
                setShowIndex(ITEMS_TO_SHOW);
                requestAnimationFrame(() => {
                    gsap.fromTo( q(`.${styles.list} li`),
                    { autoAlpha: 0, y: 20 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.5,
                        //stagger: 0.06,
                        ease: "power2.out",
                        onComplete: () => setIsAnimating(false),
                    });
                });
            }
        });
    };

    const showMore = () => {
        if (!hasNext) return;
        setShowIndex(showIndex + ITEMS_TO_SHOW);
    };

    useGSAP(() =>{

        const mm = gsap.matchMedia();

        //// list - button, item motion
        const tabs = gsap.timeline({
            scrollTrigger: {
                trigger: q(`.${styles.works__inner__container}`),
                start: "top bottom-=30%",
                end: "bottom top",
            }
        });

        tabs.to(q(`.${styles.tabs}`) ,{ opacity: 1, y:0 })
        .to(q(`.${styles.list}`) ,{ opacity: 1, y:0 },'-=0.2');

        // 사이즈 540 이상부터
        mm.add("(min-width: 541px)", () => {

            //// list - section bg
            gsap.to( q(`.${styles.works__inner}`), {
                duration: 1,
                clipPath:"inset(2rem 2rem round 5rem)",
                scrollTrigger: {
                    trigger: worksSectionRef.current,
                    start: "bottom+=20 bottom",
                    end: "bottom+=20 center",
                    scrub: true,
                },
            });

            gsap.to( worksSectionRef.current, {
                duration: 1,
                background: "#131313",
                scrollTrigger: {
                    trigger: worksSectionRef.current,
                    start: "bottom+=20 bottom",
                    end: "bottom+=20 bottom",
                    scrub: true,
                },
            });
        });

    },{scope:worksSectionRef});

    useEffect(() =>{ 
        ScrollTrigger.refresh(); 
    },[category, showIndex])

    return (
        <section id="works" className={styles.works} ref={worksSectionRef}>
            <article className={styles.works__inner}>
                <div className={styles.works__inner__container}>
                    <div className={styles.tabs}>
                        <button
                            type="button" 
                            className={category === "all" ? styles.active : ""} 
                            onClick={() => changeTab("all")}
                        >
                            ALL
                        </button>
                        <button 
                            type="button" 
                            className={category === "work" ? styles.active : ""} 
                            onClick={() => changeTab("work")}
                        >
                            WORK
                        </button>
                        <button 
                            type="button" 
                            className={category === "project" ? styles.active : ""} 
                            onClick={() => changeTab("project")}
                        >
                            PROJECT
                        </button>
                    </div>
                    <ul className={styles.list}>
                        {filteredList.slice(0, showIndex).map( project => (
                            <li 
                                key={project.id}
                                // className={`${styles.item} ${styles[`item${i + 1}`]}`}
                            >
                                <Card 
                                    to={`/work/${project.id}`}
                                    state={{ backgroundLocation: location }}
                                    project={project} 
                                />
                            </li>
                        ))}
                    </ul>
                    {hasNext && <div className={styles.more}><Button onClick={showMore} color="blue">더 보기</Button></div>}
                </div>
            </article>
        </section>
    );
};

export { ListSection };