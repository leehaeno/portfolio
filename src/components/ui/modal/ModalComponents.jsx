import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { scrollLock, projectList, imageUrl, videoUrl, videoThumbUrl} from "@/utils";
//import { Swiper, SwiperSlide } from "swiper/react";
//import { Scrollbar, Mousewheel } from 'swiper/modules';
import { visible, translate, overflow} from './anim';

// style
import styles from "./ModalComponents.module.scss";
import 'swiper/css';

// images
import close from "@/assets/images/card/close.png";
import link from "@/assets/images/card/link.png";

const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

const Modal = () => {
    const { projectId } = useParams();
    const project = projectList.find(p => p.id === projectId);
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(true);
    const videoRefs = useRef([]);

    const handleClose = () => {
        setModalOpen(false);
        scrollLock(false);
    }

    useEffect(() => {
        const tryPlay = async (video) => {
            if (!video || !video.paused) return;
            try {
                await video.play();
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.log('Autoplay prevented:', error.name);
                }
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        tryPlay(video);
                    } else {
                        if(!video.paused) video.pause();
                    }
                });
            },
            { threshold: 0.1 }
        );

        videoRefs.current.forEach(video => {
            if (video) observer.observe(video);
        });

        return () => observer.disconnect();
    }, []);
       
    useEffect(() => {
        scrollLock(true);
        return () => {
            scrollLock(false);
        };
    },[])

    return (
        <AnimatePresence
            mode="wait"
            onExitComplete={() => navigate(-1)}
        >
            { modalOpen && (
                <motion.div id="modal" className={styles.modal}
                    {...anim(visible)}
                    onClick={handleClose}
                    data-lenis-prevent
                >
                    <motion.div className={styles.overlay}
                        {...anim(overflow)}
                    >
                        <motion.div className={styles.overlay__cnt} 
                            {...anim(translate)} 
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.close} onClick={handleClose}>
                                <span className="blind">Close</span>
                                <img src={close} alt="닫기" />
                            </button>
                            {/* <div className={styles.top} style={{ "--bg--color": `${project.bg}` }}> */}
                            <div className={styles.top}>
                                <div className={styles.top__logo}>
                                    {project.logo?.length > 0 ? ( 
                                        <img src={project.logo} alt="작업물 로고" /> 
                                    ) : (
                                        <p className={styles.tit}>{project.id}</p>    
                                    )}
                                </div>
                            </div>
                            <div className={styles.btm}>
                                <h2 className={styles.btm__title}>{project.title}</h2>
                                <div className={styles.btm__info}>
                                    <dl>
                                        <dt>타입</dt>
                                        <dd>
                                            {project.type.map((item, idx) => {
                                                return (
                                                    <span className={styles.tag} key={idx}>{item}</span>
                                                )
                                            })}
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>기간</dt>
                                        <dd><span className={styles.tag}>{project.date}</span></dd>
                                    </dl>
                                    <dl>
                                        <dt>기여</dt>
                                        <dd><span className={styles.tag}>{project.contrib}</span></dd>
                                    </dl>
                                    <dl>
                                        <dt>기술</dt>
                                        <dd>
                                            {project.tech.map((item, idx) => {
                                                return (
                                                    <span className={styles.tag} key={idx}>{item}</span>
                                                )
                                            })}
                                        </dd>
                                    </dl>
                                    {project.link?.length > 0 ? (
                                        <dl className={styles.item4}>
                                            <dt>링크</dt>
                                            <dd>
                                                {project.link.map((item, idx) => (
                                                    <div className={styles.cont} key={idx}>
                                                        
                                                        {item.title?.length > 0 && (
                                                            <div className={styles.tit}>{item.title}</div>
                                                        )}
                                                        
                                                        <div className={styles.links}>
                                                            {item.pc && (
                                                                <a
                                                                    href={item.pc}
                                                                    target="_blank"
                                                                    className={styles.tag}
                                                                >
                                                                    PC <img src={link} alt="이동하기 아이콘" />
                                                                </a>
                                                            )}

                                                            {item.mobile && (
                                                                <a
                                                                    href={item.mobile}
                                                                    target="_blank"
                                                                    className={styles.tag}
                                                                >
                                                                    M <img src={link} alt="이동하기 아이콘" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </dd>
                                        </dl>
                                    ) : (
                                        <dl className={styles.item4}>
                                            <dt>링크</dt>
                                            <dd>
                                                <p>정책에 따라 일부만 공개되는 점 <br />양해 부탁드립니다.</p>
                                            </dd>
                                        </dl>
                                    )}
                                </div>
                                <div className={styles.btm__content}>
                                    <dl className={styles.txts}>
                                        <dt>기능 및 특징</dt>
                                        <dd>
                                            <ol>
                                                {project.description.map((item, idx) => {
                                                    return(
                                                        <li key={idx}><p>{item}</p></li>
                                                    )
                                                })}
                                            </ol>
                                        </dd>
                                    </dl>
                                    <ul className={styles.imgs}>
                                        {project.video?.length > 0 && (
                                            project.video.map((item, idx) => {
                                                return(
                                                    <li className={styles.item} key={idx}>
                                                        <figure className={styles.figure}>
                                                            <div className={styles.box}>
                                                                <div className={styles.cover}>
                                                                    <video
                                                                        ref={el => (videoRefs.current[idx] = el)}
                                                                        src={videoUrl(item.src, "f_auto,q_auto")}
                                                                        preload="none"
                                                                        loop
                                                                        muted
                                                                        playsInline
                                                                        poster={videoThumbUrl(item.src, "so_0,f_jpg,q_auto")}
                                                                    />
                                                                </div>
                                                            </div>
                                                        
                                                            <figcaption>
                                                                {item.page}
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                )
                                            })
                                        )}
                                        {project.screenshot?.length > 0 && (
                                            project.screenshot.map((item, idx) => {
                                                return(
                                                    <li className={styles.item} key={idx}>
                                                        <figure className={styles.figure}>
                                                            <div className={styles.box}>
                                                                <div className={styles.cover}>
                                                                    <img 
                                                                        src={imageUrl(item.src)}
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        alt="작업물 스크린샷" 
                                                                    />
                                                                </div>
                                                            </div>
                                                        
                                                            <figcaption>
                                                                {item.page}
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                )
                                            })
                                        )}
                                    </ul>
                                   
                                    {/* {project.screenshot?.length > 0 && (
                                        <ul className={styles.imgs}>
                                            {project.screenshot.map((item, idx) => {
                                                return(
                                                    <li className={styles.item} key={idx}>
                                                        <figure className={styles.figure}>
                                                            <div className={styles.box}>
                                                                <div className={styles.cover}>
                                                                    <img src={item.src} alt="작업물 스크린샷" />
                                                                </div>
                                                            </div>
                                                        
                                                            <figcaption>
                                                                {item.page}
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )} */}
                                    {/* {project.screenshot && project.screenshot.length > 0 && (
                                        <Swiper 
                                            modules={[Scrollbar, Mousewheel]}
                                            className={styles.swiperContainer}
                                            slidesPerView={"auto"}
                                            spaceBetween={10}
                                            mousewheel={true}
                                            scrollbar={{ 
                                                hide: false,
                                                draggable: true, 
                                                dragSize: "auto", 
                                            }}
                                        >
                                            {project.screenshot.map((item, idx) => {
                                                return(
                                                    <SwiperSlide key={idx}>
                                                        <div className={styles.item} key={idx}>
                                                            <figure className={styles.figure}>
                                                                <div className={styles.box}>
                                                                    <div className={styles.cover}>
                                                                        <img src={item.src} alt="작업물 스크린샷" />
                                                                    </div>
                                                                </div>
                                                            
                                                                <figcaption>
                                                                    {item.page}
                                                                </figcaption>
                                                            </figure>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    )} */}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )} 
       </AnimatePresence>
    );
};

export { Modal };