import { useState ,useRef } from "react";
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InertiaPlugin } from "gsap/InertiaPlugin";

// style
import styles from "./ContactComponents.module.scss";

gsap.registerPlugin(InertiaPlugin);

const Contact = () => {
    const contactRef = useRef(null);
    const q = gsap.utils.selector(contactRef);
    const [isActive, setIsActive] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: q(`.${styles.contact__inner}`),
            start: "center bottom",
            end: "top center",
            onEnter: () => { 
                setIsActive(true);
            }
        });

        const boxEl = q(`.${styles.box}`)[0];
        let oldX = 0, oldY = 0, deltaX = 0, deltaY = 0;

        const mousemoveHandler = (e) => {
            deltaX = e.clientX - oldX;
            deltaY = e.clientY - oldY;
            oldX = e.clientX;
            oldY = e.clientY;
        };

        boxEl.addEventListener("mousemove", mousemoveHandler);

        const tagEls = q(`.${styles.tag}`);
        const enterHandlers = [];

        tagEls.forEach(el => {
            const enterHandler = () => {
                const tl = gsap.timeline({ onComplete: () => { tl.kill(); }});

                tl.timeScale(1.2);
                tl.to(el, {
                    inertia: {
                        x: { velocity: deltaX * 30, end: 0 },
                        y: { velocity: deltaY * 30, end: 0 }
                    }
                });
                tl.fromTo(el, {rotate: 0
                }, {
                    duration: 0.4,
                    rotate: (Math.random() - 0.5) * 30,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power1.inOut'
                }, '<');
            };

            el.addEventListener("mouseenter", enterHandler);
            enterHandlers.push({el, enterHandler});
        });

        return () => {
            boxEl.removeEventListener("mousemove", mousemoveHandler);
            enterHandlers.forEach(({el, enterHandler}) => {
                el.removeEventListener("mouseenter", enterHandler);
            });
        };
    },{scope: contactRef});

    return (
         <div id="contact" className={`${styles.contact} ${isActive ? styles.active : ''}`} ref={contactRef} >
            <h2 className='blind'>contact</h2>
            <article className={styles.contact__inner}>
                <div className={styles.box}>
                    <div className={styles.box__top}>
                        <div className={styles.left}>
                            <dl>
                                <dt>EXPLORE</dt>
                                <dd><Link to="/">Index</Link></dd>
                                <dd><Link to="/about">About</Link></dd>
                                <dd><Link to="/work">Work</Link></dd>
                                <dd><Link to="/contact">Contact</Link></dd>
                            </dl>
                        </div>
                        <div className={styles.right}>
                            <ul>
                                <li><a href="mailto:abcd1e34@gmail.com">Email</a></li>
                                <li><a onClick={handleDownload}>Resume</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.box__contents}>
                        <div className={styles.text}>
                            <div className={styles.list}>

                                <div className={`${styles.item} ${styles.item1}`}>
                                    <p><span>T</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Visitors</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item2}`}>
                                    <p><span>h</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Inspiration</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item3}`}>
                                    <p><span>a</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Feedback</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item4}`}>
                                    <p><span>n</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Support</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item5}`}>
                                    <p><span>k</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Time</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item6}`}>
                                    <p><span>s</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Curiosity</div>
                                    </div>
                                </div>

                                {/* <div className={`${styles.item} ${styles.item1}`}>
                                    <p><span>T</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>포토폴리오</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item2}`}>
                                    <p><span>h</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>열람해주셔서</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item3}`}>
                                    <p><span>a</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>감사합니다</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item4}`}>
                                    <p><span>n</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>새로운</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item5}`}>
                                    <p><span>k</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>기회를</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item6}`}>
                                    <p><span>s</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>기다립니다</div>
                                    </div>
                                </div> */}

                                {/* <div className={`${styles.item} ${styles.item1}`}>
                                    <p><span>T</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Danke!</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item2}`}>
                                    <p><span>h</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Salamat!</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item3}`}>
                                    <p><span>a</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Arigato!</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item4}`}>
                                    <p><span>n</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Gracias!</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item5}`}>
                                    <p><span>k</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Merci!</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item6}`}>
                                    <p><span>s</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>감사합니다!</div>
                                    </div>
                                </div> */}

                                 {/* <div className={`${styles.item} ${styles.item1}`}>
                                    <p><span>H</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Markup</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item2}`}>
                                    <p><span>a</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Accessibility</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item3}`}>
                                    <p><span>e</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Responsive</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item4}`}>
                                    <p><span>n</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Interaction</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item5}`}>
                                    <p><span>o</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Detail</div>
                                    </div>
                                </div> */}
                                
                                {/* <div className={`${styles.item} ${styles.item1}`}>
                                    <p><span>T</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Markup</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item2}`}>
                                    <p><span>h</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Interface</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item3}`}>
                                    <p><span>a</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Responsive</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item4}`}>
                                    <p><span>n</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Motion</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item5}`}>
                                    <p><span>k</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Detail</div>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item6}`}>
                                    <p><span>s</span></p>
                                    <div className={styles.tag}>
                                        <div className={styles.tag__text}>Interaction</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.box__copy}>
                        <div className={styles.copyright}>
                            <p>Copyright 2026. leehyunho all rights reserved.</p>
                            <p>본 포트폴리오 취업을 위한 비상업적 용도로 제작되었습니다.</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export { Contact };