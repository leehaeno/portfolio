import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// style
import styles from "./IntroduceSection.module.scss";

const IntroduceSection = () => {
    const introduceSectionRef = useRef(null);
    const q = gsap.utils.selector(introduceSectionRef);

    useGSAP(()=> {

        const mm = gsap.matchMedia();
        
        // 사이즈 1024 이상부터
        mm.add("(min-width: 1024px)", () => {
            
            //// introduce title - title
            gsap.set(q(`.${styles.title__tit} p`), {opacity: 0, yPercent: -80});
            gsap.to(q(`.${styles.title__tit} p`), {
                opacity:1,
                yPercent:0,
                scrollTrigger: {
                    trigger: q(`.${styles.title}`),
                    start: "top 80%",
                    end: "bottom bottom",
                    scrub: true,
                },
            });
            
            //// introduce title - icon
            const introduceIcon = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.title}`),
                    start: "top center-=10%",
                    end: "bottom bottom-=10%",
                    scrub:true,
                }
            });

            introduceIcon.set(q(`.${styles.title__tit} .${styles.icon1} img`) ,{ opacity: 1, yPercent:-60 })
            .set(q(`.${styles.title__tit} .${styles.icon2} img`) ,{ opacity: 1, yPercent:-40 });

            introduceIcon.to(q(`.${styles.title__tit} .${styles.icon1} img`) ,{ opacity: 1, yPercent:0 })
            .to(q(`.${styles.title__tit} .${styles.icon2} img`) ,{ opacity: 1, yPercent:0 });

            //// introduce title - list
            const introduceSticky = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.introduce__inner}`),
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            });
            
            introduceSticky.to(q(`.${styles.title__tit}`) ,{ opacity: 0 },">+=1.4")
            introduceSticky.to(q(`.${styles.introduce__inner}`) ,{ background: "#131313", duration:"1",ease: "none" },">")
            introduceSticky.to(q(`.${styles.list}`) ,{ yPercent: -110, duration:"9",ease: "none"},">-=1.4")
            introduceSticky.to(q(`.${styles.list}`) ,{ opacity: 1 , duration:"1"},">-=9")

            introduceSticky.to(q(`.${styles.list} li:nth-child(1)`) ,{ fontSize:"7rem", duration:"1"},">+=0.5")
            introduceSticky.to(q(`.${styles.list} li:nth-child(1) .${styles.txt}`), { maskPosition:"0% 100%", duration:"1" },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(1) .${styles.img}`), { opacity: 1,  width: "14rem",  duration:"1"  },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(1)`), { color: "#42454B",  fontSize:"4.5rem", duration:"1" },">+=0.8")
            introduceSticky.to(q(`.${styles.list} li:nth-child(1) .${styles.txt}`), { maskPosition:"100% 100%", duration:"0.5" },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(1) .${styles.img}`), { opacity: 0, width: "1rem", duration:"1"},">-=0.5")

            introduceSticky.to(q(`.${styles.list} li:nth-child(2)`) ,{ color: "#fff", fontSize:"7rem", duration:"1"},">-=1")
            introduceSticky.to(q(`.${styles.list} li:nth-child(2) .${styles.txt}`), { maskPosition:"0% 100%", duration:"1" },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(2) .${styles.img}`), { opacity: 1, width: "11rem", duration:"1"  },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(2)`), { color: "#42454B",  fontSize:"4.5rem", duration:"1" },">+=0.8")
            introduceSticky.to(q(`.${styles.list} li:nth-child(2) .${styles.txt}`), { maskPosition:"100% 100%", duration:"0.5" },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(2) .${styles.img}`), { opacity: 0,  width: "1rem", duration:"1"},">-=0.5")

            introduceSticky.to(q(`.${styles.list} li:nth-child(3)`) ,{ color: "#fff", fontSize:"7rem", duration:"1"},">-=1")
            introduceSticky.to(q(`.${styles.list} li:nth-child(3) .${styles.txt}`), { maskPosition:"0% 100%", duration:"1" },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(3) .${styles.img}`), { opacity: 1,  width: "11rem", duration:"1"  },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(3)`), { color: "#42454B",  fontSize:"4.5rem", duration:"1" },">+=0.8")
            introduceSticky.to(q(`.${styles.list} li:nth-child(3) .${styles.txt}`), { maskPosition:"100% 100%", duration:"0.5" },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(3) .${styles.img}`), { opacity: 0,  width: "1rem", duration:"1"},">-=0.5")

            introduceSticky.to(q(`.${styles.list} li:nth-child(4)`) ,{ color: "#fff", fontSize:"7rem", duration:"1"},">-=1")
            introduceSticky.to(q(`.${styles.list} li:nth-child(4) .${styles.txt}`), { maskPosition:"0% 100%", duration:"1" },"<")
            introduceSticky.to(q(`.${styles.list} li:nth-child(4) .${styles.img}`), { opacity: 1, width: "13rem", duration:"1"  },"<");

            //// introduce text - txt
            gsap.set(q(`.${styles.introduce__text} .${styles.txt} span`), {backgroundPositionX: "100%"});
            gsap.to(q(`.${styles.introduce__text} .${styles.txt} span`),{
                    backgroundPositionX: "0%",
                    scrollTrigger: {
                        trigger: q(`.${styles.introduce__text}`),
                        start: "top top+=10%",
                        end: "bottom bottom",
                        scrub: 1.5,
                    },
                }
            );

            //// introduce text - bg
            gsap.to( q(`.${styles.introduce__text}`) , {
                duration: 1,
                clipPath:"inset(2rem 2rem round 5rem)",
                scrollTrigger: {
                    trigger: q(`.${styles.introduce__text}`) ,
                    start: "bottom bottom",
                    end: "bottom center",
                    scrub: true,
                },
            });

        });

        // 사이즈 1023 이하부터
        mm.add("(max-width: 1023px)", () => {

            //// introduce title - title
            gsap.set(q(`.${styles.title__tit} p`), {opacity: 0, yPercent: -100});
            gsap.to(q(`.${styles.title__tit} p`), {
                opacity:1,
                yPercent:0,
                scrollTrigger: {
                    trigger: q(`.${styles.title}`),
                    start: "top 80%",
                    end: "center bottom",
                    scrub: true,
                },
            });

             //// introduce title - icon
            const introduceIcon = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.title}`),
                    start: "top center",
                    end: "center bottom",
                    scrub:true,
                }
            });

            introduceIcon.set(q(`.${styles.title__tit} .${styles.icon1} img`) ,{ opacity: 1, yPercent:-60 },)
            .set(q(`.${styles.title__tit} .${styles.icon2} img`) ,{ opacity: 1, yPercent:-40 },);

            introduceIcon.to(q(`.${styles.title__tit} .${styles.icon1} img`) ,{ opacity: 1, yPercent:0 },)
            .to(q(`.${styles.title__tit} .${styles.icon2} img`) ,{ opacity: 1, yPercent:0 },);

            //// introduce title - list
            const introduceTitle = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.title}`),
                    start: "20% top",
                    end: "center top",
                    scrub: true,
                },
            });
            introduceTitle.to(q(`.${styles.title__tit}`) ,{ opacity: 0 },)
            introduceTitle.to(q(`.${styles.introduce__inner}`) ,{ background: "#131313", duration:"1",ease: "none" },);

            q(`.${styles.list} li`).forEach(li => {
                const introduceList = gsap.timeline({
                    scrollTrigger: {
                        trigger: li,
                        start: "top center+=20%",
                        end: "bottom center",
                        scrub: true,
                    },
                });

                introduceList.to(li.querySelector(`.${styles.img}`), { scale: 1, opacity:1, duration:"1"})
                li.querySelectorAll(`.${styles.txt}`).forEach(txt => {
                    introduceList.to(txt, { maskPosition: "0% 100%" , duration:"1.5"},"<");
                });
            });

            //// introduce text - txt
            gsap.set(q(`.${styles.introduce__text} .${styles.txt} span`), {backgroundPositionX: "100%"});
            gsap.to(q(`.${styles.introduce__text} .${styles.txt} span`), {
                backgroundPositionX: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: q(`.${styles.introduce__text}`),
                    start: "top center+=20%",
                    end: "bottom bottom",
                    scrub: 2,
                },
            });

        });

        return () => mm.revert();

    },{scope:introduceSectionRef})

    return (
        <section id="introduce" className={styles.introduce} ref={introduceSectionRef}>
            <h2 className='blind'>introduce</h2>
            <article className={styles.introduce__inner}>
                <div className={styles.introduce__inner__sticky}>
                    <div className={styles.title}>
                        <div className={styles.title__tit}>
                            <p><span className={styles.gr}>경험을</span>설계하고 <br /><span className={styles.bl}>기억을</span>남기는<br />웹 퍼블리셔</p>
                            <div className={styles.icons}>
                                <div className={styles.icon1}><img className={styles.icon1} src="/images/about/sparkles.png" alt="" /></div>
                                <div className={styles.icon2}><img className={styles.icon2} src="/images/about/thinking.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <p className={styles.txt}><span>디자인을</span><span>이해하는</span></p>
                            <span className={styles.img}><img src="/images/about/eyes.png" alt="" /></span>
                            <p className={styles.txt}>눈과</p>
                        </li>
                        <li className={styles.list__item}>
                            <p className={styles.txt}><span>인터랙션을</span><span>그리는</span></p>
                            <span className={styles.img}><img src="/images/about/sign.png" alt="" /></span>
                            <p className={styles.txt}><span>손으로</span></p>
                        </li>
                        <li className={styles.list__item}>
                            <p className={styles.txt}><span>픽셀과</span></p>
                            <span className={styles.img}><img src="/images/about/dizzy.png" alt="" /></span>
                            <p className={styles.txt}><span>코드사이</span></p>
                        </li>
                        <li className={styles.list__item}>
                            <p className={styles.txt}><span>자연스럽게</span><span>흐리는</span></p>
                            <span className={styles.img}><img src="/images/about/hammer.png" alt="" /></span>
                            <p className={styles.txt}><span>웹을</span><span></span>만듭니다</p>
                        </li>
                    </ul>
                </div>
            </article>
            <article className={styles.introduce__shape}>
                <div className={styles.shape}>
                    <svg  viewBox="0 0 147 147" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z" fill="#1C46F5"/></svg>
                </div>
            </article>
            <article className={styles.introduce__text}>
                <div className={styles.introduce__text__inner}>
                    <p className={styles.txt}>
                        <span>
                                {/* 안녕하세요! 웹 퍼블리셔 이현호입니다.<br />
                                정적인 웹에서 동적인 인터페이스를 그려내는걸 좋아합니다. <br /><br />

                                웹을 만드는 과정에서 기획과 디자인의 의도를 이해하고, 유지보수를 고려한<br className={styles.block__none} />
                                최적화된 퍼블리싱을 중요하게 생각합니다. <br /><br />

                                컴포넌트 기반 구조적인 마크업, 어디서도 잘 보이는 반응형 UI, <br className={styles.block__none} />
                                웹 표준과 접근성을 고려한 페이지 제작까지 폭넓게 다루고 있습니다.<br /><br />

                                또한, 원활한 소통을 바탕으로 더 나은 방향을 함께 고민하며<br className={styles.block__none}/>
                                퍼블리싱을 넘어 프론트엔드 개발자로 성장하기 위한 기술적 기반도 꾸준히 쌓고 있습니다. */}

                                안녕하세요! 웹 퍼블리셔 이현호입니다.<br /><br />

                                저는 웹이 단순한 화면을 넘어 사용자가 경험을 쌓고<br className={styles.block__none} />
                                기억을 남기는 공간이라고 생각합니다. <br /><br />

                                정적인 화면에 스며드는 작은 디테일과 <br className={styles.block__none} />
                                자연스러운 움직임까지도 하나의 가치로 연결되도록 고민하며, <br className={styles.block__none} />
                                사용자가 신뢰할 수 있는 웹을 만드는 데 집중합니다. <br /><br />
                                
                                이런 경험을 더 완성도 있게 구현하기 위해 <br className={styles.block__none} />
                                컴포넌트 기반 구조와 유지보수를 고려한 퍼블리싱을 지향하고 <br className={styles.block__none} />
                                지속적으로 기술과 방법을 확장해 나가고 있습니다.

                                {/* 또한 컴포넌트 기반 구조와 유지보수에 유리한 퍼블리싱에 관심이 많아, <br className={styles.block__none} />
                                지속적으로 기술과 프로세스를 확장해 나가고 있습니다. */}
                        </span>
                    </p>
                </div>
            </article>
        </section>
    );
};

export { IntroduceSection };