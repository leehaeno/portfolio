import { useEffect, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { getLenis } from "@/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// componets
import { CommonHeader, CommonFooter, CommonLoader, CommonTransition } from '@/components/common';

// gsap
gsap.registerPlugin(ScrollTrigger);

const routes = {
    "/": "index",
    "/about": "about",
    "/work": "work",
    "/contact": "contact",
    "/about/": "about",
    "/work/": "work",
    "/contact/": "contact"
} 

export const CommonInner = () => {
    const o = useOutlet();
    const [outlet] = useState(o);
    const location = useLocation(); 
    const pathName = routes[location.pathname]; 
    const visited = sessionStorage.getItem("hasVisited");
    const [loading, setLoading] = useState(false);
    const [transition, setTransition] = useState(false);

    let className;
    if (!visited && loading) {
        className = `${pathName} loading`;
    }else if (visited && transition) {
        className = `${pathName} active`;
    }else{
        className = `${pathName}`;
    }

    useEffect(() => { 
        
        //getLenis();
        
        //const lenis = getLenis();
        //window.history.scrollRestoration = 'manual';
        //window.scrollTo(0, 0);
        //lenis.scrollTo(0, { immediate: true, duration: 0 });
        
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    },[])

    return (
        <div id="wrap" className={className} >
            
            {/* 첫페이지 로딩 애니메이션 */}
            { !visited && <CommonLoader setLoading={setLoading} /> }

            {/* 트랜지션 로딩 애니메이션 */}
            <CommonTransition setTransition={setTransition}/>
            
            {/* header */}
            <CommonHeader /> 

            {/* main */}
            <main>
                {/*Outlet은 location.pathname은 라우터가 바뀌자마자 즉시 업데이트되지 않아서 useOutlet*/}
                {outlet}
            </main>

            {/* footer */}
            <CommonFooter />
        </div>
    );
};

