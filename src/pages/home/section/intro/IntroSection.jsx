import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// componets
import{ Button } from "@/components/ui";

// style
import styles from "./IntroSection.module.scss";

const IntroSection = () => {
    const containerRef = useRef(null);
    const q = gsap.utils.selector(containerRef);

    const canvasRef = useRef(null);
    const frameCount = 100;
    const currentFrame = index => `/images/emoji-png/emoji-${index}.png`;
    
    const images = [];
    const imageSeq = { frame: 1 };

    useGSAP(() => {

        const mm = gsap.matchMedia();
        
        //// intro emoji cavas
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = 330;  
        canvas.height = 320;

        // 모든 이미지 미리 로드
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }

        // 이미지가 로드된 후 첫 장면 그리기
        images[0].onload = () => render();

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[imageSeq.frame - 1], 0, 0);
        };

        // 스크롤 트리거 설정
        gsap.to(imageSeq, {
            frame: frameCount,
            snap: "frame", // 정수 프레임 스냅 
            ease: "none",
            scrollTrigger: {
                trigger: q(`.${styles.intro}`),
                start: "top top",
                end: "bottom bottom", // 스크롤 길이
                endTrigger: q(`.${styles.left__item}`),
                scrub: true,
                markers:false,
            },
            onUpdate: render
        });

        //// intro
        gsap.to(q(`.${styles.intro__inner}`), {
            duration: 1,
            startAt: {filter: 'brightness(100%) contrast(100%)'},
            filter:"brightness(60%) contrast(135%)",
            scrollTrigger: {
                trigger: q(`.${styles.intro}`),
                start: "center center",
                end: "50% top",
                scrub: true,
            },
        });
        
        //// about text bg
        gsap.to(q(`.${styles.about__inner__bg} .${styles.text}`), {
            duration: 1,
            xPercent: -20,
            scrollTrigger: {
                trigger: q(`.${styles.intro}`),
                start: "top top",
                end: "bottom 50%",
                scrub: true,
                markers: false,
            },
        });

        // 사이즈 1023 이상부터
        mm.add("(min-width: 1024px)", () => {
            //// about emoji bg
            gsap.to(q(`.${styles.right__bg}`), {
                opacity:1,
                duration:0.8,
                scrollTrigger: {
                    trigger: q(`.${styles.right__bg}`),
                    start: "bottom 50%",
                    end: "bottom top",
                    scrub: 0.5,
                    markers: false ,
                }
            });
              
        });

        // 사이즈 860 이상부터
        mm.add("(min-width: 861px)", () => {

            //// intro
            // gsap.to(q(`.${styles.intro__inner}`), {
            //     duration: 1,
            //     clipPath:"inset(2rem 2rem round 5rem)",
            //     scrollTrigger: {
            //         trigger: q(`.${styles.intro}`),
            //         start: "top top",
            //         end: "65% bottom",
            //         scrub: true,
            //     },
            // });
            
            //// about box
            gsap.to(q(`.${styles.right__item__box}`), {
                y: "0%",
                opacity: 1,
                duration: 1, 
                stagger: 0.5,
                scrollTrigger: {
                    trigger: q(`.${styles.about__inner__content}`),
                    start: "15% top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            //// about emoji box
            const emojiBox = gsap.timeline({
                scrollTrigger: {
                    trigger: q(`.${styles.left__item}`),
                    start: "top bottom",
                    end: "bottom 70%",
                    scrub: 1.5,
                }
            });
            emojiBox.to(q(`.${styles.left__item__bg}`), {
                opacity:1,
                duration: 1.2,
                ease:"power4.in",
            }, "0")
            .to(q(`.${styles.left__item__text}`), {
                rotation:-10,
                scale:1,
                opacity:1,
                duration:0.6,
                ease:"power2.out",
            }, "0=+0.06");
            
            //// emoji flip
            const [emoji = null] = q(`.${styles.emoji}`);
            const [aboutBox = null] = q(`.${styles.left__item__box}`);

            ScrollTrigger.create({
                trigger: q(`.${styles.intro}`),
                start: "clamp(top center)", 
                end: `clamp(top center)`,
                endTrigger: aboutBox,
                scrub: true,
                onLeave: () => {
                    gsap.set(emoji, {autoAlpha: 0 });
                    gsap.set(aboutBox,{autoAlpha:1})
                },
                onEnterBack:() => {
                    gsap.set(emoji, {autoAlpha: 1});
                    gsap.set(aboutBox,{autoAlpha:0})
                },
                onUpdate:(self) => {
                    const progress = self.progress;
                    const posX = (q(`.${styles.about__inner__content}`)[0].offsetWidth/2) - (q(`.${styles.left__item}`)[0].offsetWidth / 2) - (q(`.${styles.left__item}`)[0].offsetLeft);
                    const posY = (innerHeight /2) - (emoji.offsetTop);
                    const maxX = -posX;
                    const maxY = posY;
                    let localProgress = Math.max(0, (progress - 0.6) / 0.4);

                    gsap.set(emoji, {
                        duration: 1.2,
                        y: maxY * localProgress,
                        x: maxX * localProgress
                    });
                }  
            });
            
            //// emoji flip
            // const [emoji = null] = q(`.${styles.emoji}`);
            // //const [about = null] = q(`.${styles.about}`);
            // const [aboutBox = null] = q(`.${styles.left__item__box}`);
            // const second = Flip.getState(aboutBox);

            // const flipConfig = {
            //     ease: "none",
            //     duration: 2.5,
            // };
            // flip은 DOM element나 selector string을 직접 받아야됨
            // q()가 반환하는 건 NodeList 형태라서 그대로 넣으면 안 먹혀서 [0] 추가하거나
            // 반복해서 [0] 쓰는 건 보기 지저분하니까, 구조분해할당으로 미리 변수로 꺼내도됨
    
            // const flipEmoji = gsap.timeline({
            //     scrollTrigger:{
            //         trigger: q(`.${styles.intro}`),
            //         start: "clamp(top center)",
            //         end: "clamp(center bottom)",
            //         endTrigger: q(`.${styles.right__bg__dog}`),
            //         scrub: true,
            //         markers: false,
            //         onEnter: () =>{
            //             //gsap.set(emoji, {position: "absolute"});
            //         },
            //         onLeave: () => {
            //             gsap.set(emoji, {autoAlpha: 0 });
            //             gsap.set(aboutBox,{autoAlpha:1})
            //         },
            //         onLeaveBack:() => {
            //             //gsap.set(emoji, {position: "fixed"});
            //         },
            //         onEnterBack:() => {
            //             gsap.set(emoji, {autoAlpha: 1});
            //             gsap.set(aboutBox,{autoAlpha:0})
            //         },
            //         onUpdate:(e) => {
            //             console.log(e.progress);
            //             if(e.progress > 0.8){
                            
            //             }
            //         }  
            //     }
            // });
            //flipEmoji.add(Flip.fit(emoji, second, flipConfig));
       });

       // 사이즈 860 이하부터
        mm.add("(max-width: 860px)", () =>{
            ScrollTrigger.create({
                trigger: q(`.${styles.intro__inner}`),
                start: "top top",
                end: `+=${q(`.${styles.intro}`)[0].offsetHeight - innerHeight}`,
                pin: true, 
                scrub: true,
                invalidateOnRefresh: true,
                anticipatePin: true,
            });
        });

        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });

        return () => mm.revert();
        
    },{scope: containerRef})

    return (
        <section id="flip" ref={containerRef}>
            <div id="intro" className={styles.intro}>
                <h2 className='blind'>intro</h2>
                <article className={styles.intro__inner}>
                    <div className={styles.intro__inner__container}>
                        <div className={styles.intro__inner__top}>
                            <h1 className={styles.logo}>Haeno’s Web</h1>
                            <p className={styles.text}>Available</p>
                        </div>
                        <div className={styles.intro__inner__text}>
                            <div className={styles.text}>
                                <div className={styles.text__text1}><p>Welcome to my</p></div>
                                <div className={styles.text__text2}><p>PORTFOLIO</p></div>
                                <div className={styles.text__text3}><p>Markup Developer</p></div>
                            </div>
                        </div>
                    </div>
                </article>
                <div className={styles.emoji}>
                    <div><canvas ref={canvasRef} /></div>
                </div>
            </div> 

            <div id="about" className={styles.about}>
                <h2 className='blind'>about</h2>
                <article  className={styles.about__inner}>
                    <div className={styles.about__inner__bg}>
                        <p className={styles.text}>
                            <span>ABOUT</span> <span>ABOUT</span> <span>ABOUT</span> <span>ABOUT</span> <span>ABOUT</span> <span>ABOUT</span> <span>ABOUT</span> <span>ABOUT</span> <span>ABOUT</span> <span>ABOUT</span>
                        </p>
                    </div>
                    <div className={styles.about__inner__content}>
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <div className={styles.left__item}>
                                    <div className={styles.left__item__box}>
                                        <img src="/images/emoji-png/emoji-116.png" alt="" />
                                    </div>
                                    <div className={styles.left__item__bg}></div>
                                    <div className={styles.left__item__text}>HELLO</div>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right__inner}>
                                    <div className={styles.right__item}>
                                        <div className={styles.right__item__box}>
                                            <p>사용자에게 흥미로운 경험과 기억에 남는 웹사이트를 만드는 웹 퍼블리셔 이현호 입니다. </p>
                                        </div>
                                    </div>
                                    <div className={styles.right__item}>
                                        <div className={styles.right__item__box}>
                                            <p>저는 단순히 코드로 결과물을 그려내는게 아닌 기획과 디자인의 의도를 파악하고 기술을 더해 가치있는 결과물을 만드려고 노력합니다.</p>
                                        </div>
                                    </div>
                                    <div className={styles.right__item}>
                                        <div className={styles.right__item__box}>
                                            <p>또한, 팀원들과 원활하게 소통하고 마크업,스타일링을 위한 코드를 벗어나 FE개발자 되기위해 계속해서 성장하고 있습니다.</p>
                                        </div>
                                    </div>
                                    <div className={styles.right__item}>
                                        <div className={styles.right__item__box}>
                                            <Button color="green" href="/about">ABOUT ME</Button>
                                        </div>
                                    </div>
                                    <div className={styles.right__bg}>
                                        <div className={styles.right__bg__shape1}>
                                            <svg  viewBox="0 0 147 147" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z" fill="#6fff69"/></svg>
                                        </div>
                                        <div className={styles.right__bg__shape2}>
                                            <svg  viewBox="0 0 147 147" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z" fill="#1C46F5"/></svg>
                                        </div>
                                        {/* <div className={styles.right__bg__dog}>
                                            <svg  viewBox="0 0 147 147" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M73.838 6.1553e-06C73.8313 24.3987 66.4948 42.4719 54.504 54.4541C42.5131 66.4364 24.4299 73.7646 0.020488 73.7646C24.4299 73.7646 42.5091 81.0928 54.4933 93.0751C66.4775 105.057 73.804 123.13 73.7972 147.529C73.804 123.13 81.1404 105.057 93.1313 93.0751C105.122 81.0928 123.205 73.7646 147.615 73.7646C123.205 73.7646 105.126 66.4364 93.142 54.4541C81.1578 42.4719 73.8313 24.3987 73.838 6.1553e-06Z" fill="#000"/></svg>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export { IntroSection };