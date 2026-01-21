import { Link } from "react-router-dom";

// style
import styles from "./CardComponents.module.scss";

const Card = ({to, state, project}) => {

    if (!project) return null;

    return (
        <Link className={styles.box} to={to} state={state} >
            <div className={styles.box__content}>
                <div className={styles.btm}>
                    <div className={styles.btm__tag}>
                        <span className={styles.blue}>{project.date}</span>
                        {project.type.map((item, idx) => {
                            return (
                                <span key={idx}>{item}</span>
                            )
                        })}
                    </div>
                    <div className={styles.btm__tit}>
                        {project.title}
                    </div>
                </div>
            </div>
            {/* <div className={styles.box__bg} style={{ "--bg--color": `${project.bg}` }}> */}
            <div className={styles.box__bg}>
                {project.logo?.length > 0 ? (  // ? 추가
                    <div className={styles.img}>
                        <img src={project.logo} alt="작업물 로고" />
                    </div>
                ) : (
                    <div className={styles.tit}>
                        <p className={styles.txt}>{project.id}</p>
                    </div>
                )}  
            </div>
        </Link>
    );
};

export { Card };



// // style
// import styles from "./CardComponents.module.scss";

// const Card = ( {thum, logo} ) => {
//     return (
//         <a href="" className={styles.box}>
//             <div className={styles.box__content}>
//                 <div className={styles.top}>
//                     <div className={styles.top__img}>
//                         <img src={thum} alt="" />
//                     </div>
//                 </div>
//                 <div className={styles.btm}>
//                     <div className={styles.btm__tag}>
//                         <span className={styles.blue}>2025</span>
//                         <span>react</span>
//                         <span>next</span>
//                         <span>gsap</span>
//                     </div>
//                     <div className={styles.btm__tit}>
//                         <p>PORTFOLIO</p>
//                     </div>
//                     <div className={styles.btm__txt}>
//                         <p>더미 텍스트 입니다 더미 텍스트 입니다 더미 텍스트 입니다 더미 텍스트 입니다 더미 텍스트 입니다 더미 텍스트 입니다 더미 텍스트 입니다 더미 .</p>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.box__bg}>
//                 <div className={styles.img}>
//                     <img src={logo} alt="" />
//                 </div>
//             </div>
//         </a>
//     );
// };

// export { Card };