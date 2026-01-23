import {useRef} from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// componets
import{ Button } from "@/components/ui";

// style
import styles from "./InfoSection.module.scss";

const InfoSection = () => {
    const infoSectionRef = useRef(null);
    const q = gsap.utils.selector(infoSectionRef);

     const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    useGSAP(()=> {
        
        const mm = gsap.matchMedia();
        
        //// info list - title
        gsap.to(q(`.${styles.info__intro} .${styles.title}`), {
            opacity:0,
            scrollTrigger: {
                trigger: q(`.${styles.list}`),
                start: "top bottom",
                end: "center bottom",
                scrub: true,
            },
        });

        //// info resume - title
        const infoResume = gsap.timeline({
            scrollTrigger: {
                trigger: q(`.${styles.info__resume__inner}`),
                start: "center bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            }
        });

        infoResume.to(q(`.${styles.info__resume} .${styles.title}`) ,{ opacity: 1, y:0 })
        .to(q(`.${styles.info__resume} .${styles.button}`) ,{ opacity: 1, y:0 },'-=0.2');

        // 사이즈 1024 이상부터
        mm.add("(min-width: 1024px)", () => {

            //// info list - item
            q(`.${styles.info__intro} .${styles.list} li`).forEach(li => { 
                gsap.to(li.querySelector(`.${styles.box}`), {
                    opacity:1,
                    scrollTrigger: {
                        trigger: li,
                        start: "top center+=20%",
                        end: "bottom center",
                        scrub: true,
                    },
                });
            });
        });

        // 사이즈 540 이상부터
        mm.add("(min-width: 541px)", () => {

            //// info list - section bg
            gsap.to( q(`.${styles.info__resume__inner}`), {
                duration: 1,
                clipPath:"inset(2rem 2rem round 5rem)",
                scrollTrigger: {
                    trigger: infoSectionRef.current,
                    start: "bottom bottom",
                    end: "bottom center",
                    scrub: true,
                },
            });
        });
        
    },{scope:infoSectionRef});

    return (
       <section id="info" className={styles.info} ref={infoSectionRef}>
            <h2 className='blind'>유연하게 소통하고 더 나은 방법을 고민합니다.</h2>
            <article className={styles.info__intro}>
                <div className={styles.info__intro__inner}>
                    <div className={styles.title}><p>유연하게<span className={styles.gr}>소통</span>하고<br />더 나은 방법을<span className={styles.bl}>고민</span>합니다.</p></div>
                    <ul className={styles.list}>
                        <li className={`${styles.item} ${styles.gray}`}>
                            <div className={styles.box}>
                                <dl>
                                    <dt>Markup</dt>
                                    <dd>기획과 디자인의 의도를 정확히 반영하며, 웹 표준·접근성·반응형을 고려한 구조화된 마크업을 지향합니다.</dd>
                                </dl>
                            </div>
                        </li>
                        <li className={`${styles.item} ${styles.black}`}>
                            <div className={styles.box}>
                                <dl>
                                    <dt>UI Development</dt>
                                    <dd>사용자 경험을 중심에 두고, 정적인 화면에 자연스러운 모션과 인터랙션을 더해 완성도 있는 UI를 그려냅니다.</dd>
                                </dl>
                            </div>
                        </li>
                        <li className={`${styles.item} ${styles.green}`}>
                            <div className={styles.box}>
                                <dl>
                                    <dt>Co-work</dt>
                                    <dd>다양한 직군과 소통을 통해 더 나은 방향을 함께 고민하며, 역할을 구분하지 않는 협업을 중요하게 생각합니다.</dd>
                                </dl>
                            </div>
                        </li>
                        <li className={`${styles.item} ${styles.blue}`}>
                            <div className={styles.box}>
                                <dl>
                                    <dt>Keep Going</dt>
                                    <dd>퍼블리싱에 머물지 않고 프론트엔드 전반으로 성장하기 위해, 새로운 기술과 더 나은 방법을 계속 배우고 있습니다.</dd>
                                </dl>
                            </div>
                        </li>
                    </ul>
                </div>
            </article>
            <article className={styles.info__resume}>
                <div className={styles.info__resume__inner}>
                    <div className={styles.title}><p><span className={styles.gr}>역량</span>과<span className={styles.bl}>경험</span>을 갖춘<br />웹 퍼블리셔를 찾고계신가요?</p></div>
                    <div className={styles.button}>
                        <Button color="blue" onClick={handleDownload}>이력서 보기</Button>
                    </div>
                </div>
            </article>
        </section>
    );
};

export { InfoSection };