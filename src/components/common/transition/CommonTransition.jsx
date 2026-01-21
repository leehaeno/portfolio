import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { visible, text, curve, translate, curve2, translate2 } from './anim';

// style
import styles from "./CommonTransition.module.scss";

const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

function getRouteName(pathname) {
    if (pathname === "/") return "index";
    if (pathname.startsWith("/index")) return "index";
    if (pathname.startsWith("/work")) return "work";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/contact")) return "contact";
    return "unknown"; 
}

const CommonTransition = ({setTransition}) => {
    // 트랜지션 텍스트 즉각적으로 바뀌지않아서 useLocation 에서 window.location 변경 
    const transitionPathName = getRouteName(window.location.pathname);

    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    });

    useEffect(() => { 
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResize();
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    return (
        <motion.div className={styles.curveLoader} {...anim(visible)} 
            onAnimationComplete={(definition) => {
                if (definition === "enter") {
                    setTransition(true);
                }
            }}
        >
            <div style={{opacity: dimensions.width > 0 ? 0 : 1 }} className={styles.background}></div>
            <motion.p  className={styles.route} {...anim(text)}>
                {transitionPathName}
            </motion.p>
            {dimensions.width > 0 && <SVG {...dimensions} />}
        </motion.div>
    );
};

const SVG = ({width, height }) => {

    const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `
    const topPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `
    const bottomPath = `
        M0 0 
        Q${width/2} 0 ${width} 0
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <>
            <motion.svg {...anim(translate)} fill="#6fff69" >
                <motion.path {...anim(curve(initialPath, topPath, bottomPath))} ></motion.path>
            </motion.svg>
            <motion.svg {...anim(translate2)} fill="#eaeaea">
                <motion.path {...anim(curve2(initialPath, topPath, bottomPath))}></motion.path>
            </motion.svg>
        </>
    )
}

export { CommonTransition };