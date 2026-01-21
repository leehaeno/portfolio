
export const projectList = [
    {   
        id: "boostx",
        logo: "/images/card/logo/boostx.png",
        title: "부스트X" ,
        category: "work",
        type: [ "PC", "M", "반응형"],
        date: "2024.06",
        contrib: "100%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        link: [
            {
                title: "메인 페이지",
                pc: "https://lehyho.dothome.co.kr/boostx/",
                mobile: "https://lehyho.dothome.co.kr/boostx/m/"
            },
            {
                title: "로그인 페이지",
                pc: "https://lehyho.dothome.co.kr/boost-x.co.kr/signin/join.php",
            },
            {
                title: "유저 페이지",
                pc: "https://lehyho.dothome.co.kr/boost-x.co.kr/",
            },
            {
                title: "광고주 페이지",
                pc: "https://lehyho.dothome.co.kr/boost-x.co.kr/advertiser/",
                mobile: "https://lehyho.dothome.co.kr/boost-x.co.kr/advertiser/m/"
            },
            {
                title: "관리자 페이지",
                pc: "https://lehyho.dothome.co.kr/boost-x.co.kr/admin/boostx/",
            }
        ],
        description: [
            "컴포넌트 단위의 퍼블리싱 구조를 설계하고, 공통 UI를 모듈화했습니다.",
            "중복 스타일 정리 및 유지보수 친화적 코드 구조 개선했습니다.",
            "인터랙션 로직 설계 및 GSAP 모션 구현했습니다.",
            "메시지 데이터를 fetch로 불러와 랜덤 노출 로직 구현했습니다.",
            "D3.js를 활용한 데이터 시각화 화면 제작 하였습니다.",
        ],
        video: [
            { src: "v1768976622/video1_p3agvx.mp4" , page: "메인 페이지"},
        ],
        screenshot: [
            { src: "v1768976622/img2_vbb7ea.png" , page: "로그인 페이지"},
            { src: "v1768976621/img3_alqokh.png" , page: "유저 페이지"}, 
            { src: "v1768976622/img4_csy9yc.png" , page: "광고주 페이지"},
            { src: "v1768976621/img5_i1mmbi.png" , page: "관리자 페이지"}
        ]
    },
    {   
        id: "fasttrack",
        logo: "/images/card/logo/fasttrack.png",
        title: "패스트 트랙" ,
        category: "work",
        type: [ "PC", "M", "반응형"],
        date: "2024.02",
        contrib: "100%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        description: [
            "GNB와 Aside 메뉴에 섹션 기반 활성화 기능을 적용해, 사용자가 어느 위치에 있든 직관적으로 현재 섹션을 확인할 수 있도록 구현했으며, Aside는 배경과 겹치지 않도록 대비 색상으로 자동 전환되게 작업했습니다.",
            "리뷰 클릭 시 나오는 팝업에 해당 내용과 이미지를 fetch로 로드하여 유지보수가 쉬운 구조로 구현했습니다.",
            "PC와 모바일 환경에서 공통으로 사용되는 상담창 영역을 모듈화하여 유지보수성 향상시켰습니다.",
            "Variable Font 적용을 통해 텍스트 선명도·가독성 최적화 및 성능을 향상시켰습니다.",
        ],
        video: [
            { src: "v1768976683/video1_zdiemg.mp4" , page: "PC"},
            { src: "v1768976681/video2_bf003h.mp4" , page: "리뷰 팝업"},
            { src: "v1768976691/video3_jmdbmz.mp4" , page: "M"},
        ]
    },
    {   
        id: "cloudstone",
        logo: "/images/card/logo/cloudstone.png",
        title: "클라우드스톤" ,
        category: "work",
        type: [ "PC", "M", "반응형"],
        date: "2024.07",
        contrib: "100%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        link: [
            {
                pc: "https://lehyho.dothome.co.kr/cloudstone.co.kr/",
                mobile: "https://lehyho.dothome.co.kr/cloudstone.co.kr/m"
            },
        ],
        description: [
            "PC·모바일에 반복되고 공통으로 사용되는 기능을 모듈화하여 Common JS로 관리했습니다.",
            "CSS Grid를 활용해 PC 해상도별로 자연스럽게 변하는 유동형 레이아웃 구현했습니다.",
            "이미지 최적화(Lazy Loading)로 성능 개선을 향상시켰습니다."
        ],
        screenshot: [
            { src: "v1768976652/img1_quksp1.png" , page: "PC"},
            { src: "v1768976662/img2_k6fftg.png" , page: "M"}
        ]
    },
    {   
        id: "automobilelabs",
        logo: "/images/card/logo/automobilelabs.png",
        title: "오토모빌랩스" ,
        category: "work",
        type: [ "PC", "M", "반응형"],
        date: "2024.05",
        contrib: "100%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        description: [
            "대형 자동차 이미지와 다양한 모션 효과를 활용하여 속도감·역동성·브랜드 아이덴티티를 시각적으로 전달하는 UI를 구현하는 데 중점을 두었습니다",
            "리뷰 클릭 시 나오는 팝업에 해당 내용과 이미지를 fetch로 로드하여 유지보수가 쉬운 구조로 구현했습니다.",
            "Variable Font 적용을 통해 텍스트 선명도·가독성 최적화 및 성능을 향상시켰습니다.",
            "메인 숫자 카운트 애니메이션을 JS로 구현했습니다.",
        ],
        video: [
            { src: "v1768976620/video1_cdtlgm.mp4" , page: "PC"},
            { src: "v1768976620/video2_qizzc7.mp4" , page: "리뷰 팝업"},
            { src: "v1768976622/video3_hgokek.mp4" , page: "M"}
        ]
    },
    {   
        id: "evsolution",
        logo: "/images/card/logo/evsolution.png",
        title: "EV 솔루션" ,
        category: "work",
        type: [ "PC", "M", "반응형"],
        date: "2024.01",
        contrib: "100%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        description: [
            "헤더·퀵 메뉴 Active 클래스를 동적으로 부여하는 인터랙션 로직을 Vanilla JS로 구현했습니다.",
            "관리자 모달 콘텐츠 길이에 따라 푸터가 가려지는 문제를 동적 위치 조정 스크립트로 해결했습니다.",
            "SVG 활용 데이터 시각화 애니메이션 구현했습니다.",
        ],
        video: [
            { src: "v1768976664/video1_adwfyc.mp4" , page: "PC"},
            { src: "v1768976663/video2_idwm52.mp4" , page: "M"},
        ],
        screenshot: [
            { src: "v1768976662/img3_otlwbs.png" , page: "관리자"}
        ]
    },
    {   
        id: "classeum",
        logo: "/images/card/logo/classeum.png",
        title: "클라세움" ,
        category: "work",
        type: [ "PC", "M", "반응형"],
        date: "2023.08",
        contrib: "100%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        description: [
            "스크롤 방향을 감지해 헤더를 숨김/노출시키는 동적 UI 로직을 구현하여 사용성 및 화면 가독성을 향상시켰습니다.",
            "디자인 맞춤형 커스텀 비디오 플레이어(재생/정지, 타임라인, 사운드 등)를 Vanilla JS로 구현했습니다.",
        ],
        video: [
            { src: "v1768976623/video1_qcljw6.mp4" , page: "PC"},
            { src: "v1768976623/video2_szquys.mp4" , page: "비디오 플레이어"},
            { src: "v1768976624/video3_rpthdu.mp4" , page: "M"},
        ]
    },
    {   
        id: "slimcare",
        logo: "/images/card/logo/slimcare.png",
        title: "깨고빼고" ,
        category: "work",
        type: [ "PC", "M", "반응형"],
        date: "2023.07",
        contrib: "50%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        link: [
            {
                pc: "https://lehyho.dothome.co.kr/slimcare/",
                mobile: "https://lehyho.dothome.co.kr/slimcare/m"
            },
        ],
        description: [
            "모바일 Vanilla JS 사용하여 스크롤 기반 애니메이션을 구현했습니다.",
            "모바일 반응형으로 제작하였고 디바이스 환경에 맞춰 스크롤 애니메이션도 최적화했습니다.",
        ],
        video: [
            { src: "v1768976766/video1_kbt49g.mp4" , page: "PC"},
            { src: "v1768976763/video2_sedmf6.mp4" , page: "M"}
        ]
    },
    {   
        id: "leadersautosolution",
        logo: "/images/card/logo/leadersautosolution.png",
        title: "리더스 오토 솔루션" ,
        category: "work",
        type: [ "PC", "M", "반응형"],
        date: "2023.06",
        contrib: "100%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        description: [
            "다양한 데이터가 유입되는 UI 특성에 맞춰 레이아웃 변형을 최소화하는 구조로 설계했습니다.",
            "단조로울 수 있는 배너 영역에는 애니메이션을 추가해 시각적 완성도와 사용자 흥미를 높였습니다.",
        ],
        video: [
            { src: "v1768976749/video1_krazdp.mp4"},
        ],
        screenshot: [
            { src: "v1768976746/img2_nunrbx.png"}
        ]
    },
    {   
        id: "koreafinance",
        logo: "/images/card/logo/koreafinance.png",
        title: "한국재무컨설팅센터" ,
        category: "work",
        type: [ "PC", "M"],
        date: "2022.09",
        contrib: "50%",
        tech: [ "HTML", "CSS", "JavaScript" ],
        description: [
            "iOS 기기에서 사이드 메뉴 오픈 시 발생하는 배경 스크롤 이슈를 스크립트로 해결해 안정적인 UX 구현했습니다.",
            "SEO 준수하고 오픈 그래프 메타 태그 관리했습니다.",
        ],
        video: [
            { src: "v1768976720/video1_xaqcyd.mp4"}
        ],
        screenshot: [
            { src: "v1768976683/img2_yos59o.png"}
        ]
    },
    {   
        id: "mkfly",
        logo: "/images/card/logo/mkfly.png",
        title: "마케팅 플라이" ,
        category: "work",
        type: [ "반응형"],
        date: "2022.06",
        contrib: "50%",
        tech: [ "HTML", "SCSS", "jquery" ],
        description: [
            "SCSS Mixin·변수·중첩 구조를 적극 활용해 스타일 코드를 최적화하고 재사용성을 높옆습니다.",
            "스크롤 애니메이션에 Throttling을 적용해 성능 저하 없이 부드러운 사용자 경험을 구현했습니다.",
        ],
        screenshot: [
            { src: "v1768976748/img1_t6zm1b.png" , page: "메인 페이지"},
            { src: "v1768976754/img2_u0fke2.png" , page: "인플루언서 페이지"},
            { src: "v1768976755/img3_hmo6ru.png" , page: "관리자 페이지"}
        ]
    },
    {   
        id: "license",
        logo: "/images/card/logo/license.png",
        title: "소방직 공무원" ,
        category: "work",
        type: [ "반응형"],
        date: "2022.06",
        contrib: "50%",
        tech: [ "HTML", "SCSS", "jquery" ],
        description: [
            "반응형 웹사이트로 제작했습니다.",
            "템플릿 기반(테마 컬러, UI 스타일을 설계) 구조로 개발하여 다양한 비주얼 적용할 수 있는 확장성을 만들었습니다.",
            "추후 약 40개의 자격증 관련 사이트에 재사용할 수 있는 형태로 구축했습니다."
        ],
        screenshot: [
            { src: "v1768976748/img1_j1nvne.png"},
            { src: "v1768976747/img2_rgjhzv.png"}
        ]
    },
    {   
        id: "kba",
        logo: "/images/card/logo/kba.png",
        title: "KBA 한국중소기업평가원" ,
        category: "work",
        type: [ "PC", "M"],
        date: "2021.04",
        contrib: "60%",
        tech: [ "HTML", "CSS", "jquery" ],
        description: [
            "시각적 완성도를 위해 스크롤 기반 모션 효과를 중점적으로 설계하고 구현했습니다.",
            "스크롤 위치에 따른 내비게이션이 활성화, 이동 기능 구현했습니다.",
            "인사노무, 매연저감, 청년추가고용 등 다양한 서비스형 웹사이트의 제작에 참여했습니다."
        ],
        video: [
            { src: "v1768976685/video1_qv8fqm.mp4" , page: "KBA 인사 노무"},
            { src: "v1768976686/video2_bxen6e.mp4" , page: "KBA 매연저감"},
            { src: "v1768976684/video3_j9zbp1.mp4" , page: "KBA 청년 추가고용"},
        ]
    },
    {   
        id: "usedcarleas",
        logo: "/images/card/logo/usedcarleas.png",
        title: "카빌리지" ,
        category: "work",
        type: [ "PC", "M"],
        date: "2021.03",
        contrib: "100%",
        tech: [ "HTML", "CSS", "jquery" ],
        description: [
            "fullpage.js 기반 원페이지 스크롤 구현했습니다.",
            "상담창 팝업 UI 및 4단계 스텝 전환 로직 개발했습니다.",
            "상담창 팝업 단계별로 UI·데이터가 동적으로 변경되도록 설계하여, 입력 과정의 가독성과 편의성을 높인 상담 프로세스를 구현했습니다."
        ],
        video: [
            { src: "v1768976768/video1_a4clkz.mp4" },
            { src: "v1768976768/video2_z9v9ar.mp4" },
            { src: "v1768976771/video3_yhxona.mp4" },
        ]
    },
    {   
        id: "nanum",
        logo: "/images/card/logo/nanum.png",
        title: "나눔플러스" ,
        category: "work",
        type: [ "PC", "M"],
        date: "2021.02",
        contrib: "40%",
        tech: [ "HTML", "CSS", "jquery" ],
        description: [
            "다양한 비즈니스 유형에 대응할 수 있도록 확장성을 고려한 구조로 퍼블리싱했습니다.",
        ],
        video: [
            { src: "v1768976760/video1_j8rcu9.mp4" , page: "템플릿 버전1" },
            { src: "v1768976760/video2_ifwmln.mp4" , page: "템플릿 버전2" },
        ]
    },
    {   
        id: "leaderscpa",
        logo: "/images/card/logo/leaderscpa.png",
        title: "리더스CPA" ,
        category: "work",
        type: [ "PC", "M"],
        date: "상시업무",
        contrib: "30%",
        tech: [ "HTML", "CSS", "Jquery" ],
        description: [
            "유지 보수 및 업데이트 상시 작업했습니다.",
            "리뉴얼 작업 (메인/인트로팝업/마이데이터/입점문의) 참여했습니다.",
            "매출증대 관련 TF (미션/가이드 기획 및 제작) 참여했습니다.",
            "미션/가이드 관련 룰렛판, 퀴즈, 콘페티 모션 구현했습니다."
        ],
        video: [
            { src: "v1768976747/video1_zgxvl4.mp4" , page: "미션 리스트 페이지" },
            { src: "v1768976750/video2_iqksdd.mp4" , page: "미션 룰렛 페이지" },
            { src: "v1768976747/video3_ylnmcb.mp4" , page: "미션 현황 페이지" }
        ],
    },
    {   
        id: "portfolio",
        title: "포토폴리오" ,
        category: "project",
        type: [ "반응형"],
        date: "2025.07",
        contrib: "100%",
        tech: [ "React", "SCSS", "GSAP", "framer-motion" ],
        link: [
            {
                pc: "https://hyho-portfolio.vercel.app/",
            },
        ],
        description: [
            "사용자들에게 인터렉티브 하면서도 정보를 쉽게 전달할 수 있도록 작업했습니다.",
            "GSAP과 Framer Motion을 활용하여 페이지 진입부터 전환까지 자연스러운 사용자 흐름을 설계했습니다.",
            "Cloudinary CDN을 활용해 동영상 리소스를 외부 호스팅하고, 초기 로딩 성능 저하 문제를 해결하기 위해 IntersectionObserver 기반으로 화면에 노출되는 시점에만 동영상을 로드 및 재생하도록 구현했습니다.",
            "다양한 효과를 추가해 기억에 남을 수 있도록 구성하였습니다."
        ],
        video: [
            { src: "v1768976769/video1_pwtacx.mp4"},
        ],
        screenshot: [
            { src: "v1768976757/img3_fqozvv.png"},
            { src: "v1768976757/img2_c5rxvf.png"},
        ]
    },
    {   
        id: "shadcn-board",
        title: "투두 리스트" ,
        category: "project",
        type: [ "PC"],
        date: "2025.05",
        contrib: "100%",
        tech: [ "React", "Tailwind", "Next", "TS", "Supabase" ],
        link: [
            {
                pc: "https://hyho-shadcn-board.vercel.app/",
            }
        ],
        description: [
            "Supabase Database를 활용한 Todo CRUD 기능 구현했습니다.",
            "Supabase Auth를 활용하여 회원가입, 로그인, 로그아웃, 탈퇴 기능 구현했습니다.",
            "Middleware를 활용하여 user 데이터를 기준으로 페이지 리다이렉션 관리했습니다.",
            "Jotai를 활용해 사용자 인증 정보 및 Todo 상태를 공유했습니다."
        ],
        screenshot: [
            { src: "v1768976761/img1_cpldp8.png" },
            { src: "v1768976761/img2_ilrx61.png" },
            { src: "v1768976761/img3_b8ntei.png" }
        ]
    },
    {   
        id: "unsplash",
        title: "언플래쉬 검색 사이트" ,
        category: "project",
        type: [ "PC"],
        date: "2025.03",
        contrib: "100%",
        tech: [ "React", "SCSS", "TS" ],
        link: [
            {
                pc: "https://hyho-react-album.vercel.app/",
            },
        ],
        description: [
            "Unsplash API를 활용한 키워드 기반 이미지 검색 기능 구현했습니다.",
            "검색어, 페이지 정보, 결과 데이터를 Recoil로 관리했습니다.",
            "사용자가 북마크한 이미지를 별도의 북마크 페이지 저장되게 구현했습니다.",
            "Unsplash API 규칙에 맞춰 다운로드 버튼 구현했습니다",
        ],
        screenshot: [
            { src: "v1768976766/img1_lomsmr.png" },
            { src: "v1768976768/img2_v4ccxo.png" },
            { src: "v1768976767/img3_foag0u.png" }
        ]
    },
]