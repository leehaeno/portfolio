import { useState, useRef } from "react";
import Matter from "matter-js";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// style
import styles from "./SkillSection.module.scss";

const SkillSection = () => {
    const skillSectionRef = useRef(null);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useGSAP(()=> {
        const Engine = Matter.Engine,
              World = Matter.World,
              Render = Matter.Render,
              Bodies = Matter.Bodies,
              Common = Matter.Common,
              runner = Matter.Runner.create(), // 러너도 만들어줘야함.
              engine = Engine.create();
              engine.gravity.y = 1; // 중력의 세기를 설정합니다.
          
        const render = Render.create({
            element: canvasRef.current,
            engine: engine,
            options: {
                width: innerWidth,
                height: innerHeight,
                background: 'transparent',
                wireframes: false,
                showBounds: false,
            }
        });

        const w = innerWidth,
              h = innerHeight,
              radius = 20;
        
        // 바닥 벽 
        const walls = [
            Bodies.rectangle((w / 2) + 160, h + 80, w + 320, 160,{ isStatic: true, render: {fillStyle: 'transparent'} }),
            Bodies.rectangle( -80, h / 2, 160,   h, { isStatic: true, render: {fillStyle: 'transparent'} }),
            Bodies.rectangle(w + 80, h / 2, 160, 1200, { isStatic: true, render: {fillStyle: 'transparent'} }),
            Bodies.rectangle((w / 2) + 160, -80, w + 320, 160, { isStatic: true, render: {fillStyle: 'transparent'} })
        ];

        const svgs = "./src/assets/images/skill/";  
        let randomX = (w / 2); // x: 0부터 w 사이의 랜덤 값 
        let randomY = Common.random(200, 400); // y: 200부터 400 사이의 랜덤 값 (예: 상단 절반 영역만)
        
        // 모양
        const elements = [   
            Bodies.rectangle(randomX - 10 , randomY, 196, 80, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}html.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 100 , randomY, 166, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}css.svg`, xScale: 1, yScale: 1} }
            }), 
            Bodies.rectangle(randomX + 220, randomY, 200, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}scss.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 500, randomY, 352, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}javscript.svg`, xScale: 1, yScale: 1} }
            }), 
            Bodies.rectangle(randomX - 400, randomY, 249, 80, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}jquery.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 22, randomY, 200, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}gsap.svg`, xScale: 1, yScale: 1} }
            }),
            // Bodies.rectangle(randomX - 490, randomY, 449, 80, {
            //     chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}framer.svg`, xScale: 1, yScale: 1} }
            // }), 
            Bodies.rectangle(randomX + 130, randomY, 151, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}d3.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 350, randomY, 164, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}php.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX - 120, randomY, 233, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}react.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX - 110, randomY, 364, 80, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}photoshop.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 140, randomY, 377, 80, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}illustrator.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 50, randomY, 221, 80, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}figma.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 600, randomY, 387, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}source.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX - 420, randomY, 253, 80, {     
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}notion.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX - 650, randomY, 361, 80, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}typescript.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 480, randomY, 206, 80, {
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}next.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX - 420, randomY, 146, 80, {     
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}git.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX - 420, randomY, 261, 80, {     
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}github.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 50, randomY, 110, 110, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}shape_wh.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX - 350, randomY, 110, 110, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}shape_gr.svg`, xScale: 1, yScale: 1} }
            }),
            Bodies.rectangle(randomX + 200, randomY, 110, 110, { 
                chamfer: { radius: radius }, render: { sprite: { texture: `${svgs}shape_bk.svg`, xScale: 1, yScale: 1} }
            }),
        ]

        // 마우스를 이용해 조작을 가능하게 해줍니다.
        const mouse = Matter.Mouse.create(render.canvas),
            mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                visible: false,
                },
            },
        });

        World.add(engine.world, [...walls, ...elements, mouseConstraint]);

        let started = false;
        const trigger = ScrollTrigger.create({
            trigger: skillSectionRef.current,
            start: "10% bottom-=200",
            onEnter: () => { 
                if (!started) {
                    Matter.Runner.run(runner,engine); //러너 추가해야함.
                    Render.run(render);
                    setIsActive(true);
                    started = true;
                }
            }
        });
        
        return () => {
            trigger.kill(); 
            Render.stop(render); 
            Engine.clear(engine);
            Matter.Runner.stop(runner);
            World.clear(engine.world, false);
            render.canvas.remove();
            render.textures = {};
        };
    },{scope:skillSectionRef});

    return (
        <section id="skill" className={`${styles.skill} ${isActive ? styles.active : ''}`} ref={skillSectionRef}>
            <h2 className='blind'>skill</h2>
            <article className={styles.skill__inner}>
                <div className={styles.skill__inner__box} ref={containerRef}>
                    <div ref={canvasRef}></div>
                </div>
                <div className={styles.skill__inner__text}>
                    {/* <p>TOOLS & TECH</p> */}
                    {/* <p>I’ve Used</p> */}
                    <p>I have used</p>
                </div>
                <div className={styles.skill__inner__bg}></div>
            </article>
        </section>
    );
};

export { SkillSection };