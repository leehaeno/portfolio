import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// componets
import{ Button } from "@/components/ui";

// style
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
    const contactSectionRef = useRef(null);
    const q = gsap.utils.selector(contactSectionRef);

    useGSAP(() =>{

        const mm = gsap.matchMedia();

         //// contact resume - title
        const infoResume = gsap.timeline({
            scrollTrigger: {
                trigger: q(`.${styles.contact__inner}`),
                start: "center bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            }
        });

        infoResume.to(q(`.${styles.contact__inner} .${styles.title}`) ,{ opacity: 1, y:0 })
        .to(q(`.${styles.contact__inner} .${styles.button}`) ,{ opacity: 1, y:0 },'-=0.2');

        // 사이즈 540 이상부터
        mm.add("(min-width: 541px)", () => {

            //// contact - section bg
            gsap.to( q(`.${styles.contact__inner}`), {
                duration: 1,
                clipPath:"inset(2rem 2rem round 5rem)",
                scrollTrigger: {
                    trigger: contactSectionRef.current,
                    start: "bottom+=20 bottom",
                    end: "bottom+=20 center",
                    scrub: true,
                },
            });

            gsap.to( contactSectionRef.current, {
                duration: 1,
                background: "#131313",
                scrollTrigger: {
                    trigger: contactSectionRef.current,
                    start: "bottom+=20 bottom",
                    end: "bottom+=20 bottom",
                    scrub: true,
                },
            });
        });

    },{scope:contactSectionRef});
    

    return (
        <section id="contact" className={styles.contact} ref={contactSectionRef}>
            <h2 className='blind'></h2>
            <article className={styles.contact__inner}>
                <div className={styles.container}>
                    <div className={styles.title}><p><span className={styles.gr}>궁금한</span>내용이 있다면<br />편하게<span className={styles.bl}>연락</span>주세요</p></div>
                    <div className={styles.button}>
                        <Button color="blue" href="mailto:abcd1e34@gmail.com">메일 보내기</Button>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.icon1}><div className={styles.circle}><img src="/images/about/emoji1.png" alt="이모지" /></div></div>
                        <div className={styles.icon2}><div className={styles.circle}><img src="/images/about/emoji2.png" alt="이모지" /></div></div>
                        <div className={styles.icon3}><div className={styles.circle}><img src="/images/about/emoji3.png" alt="이모지" /></div></div>
                        <div className={styles.icon4}><div className={styles.circle}><img src="/images/about/emoji4.png" alt="이모지" /></div></div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export { ContactSection };