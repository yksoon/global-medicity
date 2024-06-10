import React, { useEffect, useRef, useState } from "react";
import Header from "components/web/common/header";
import Footer from "components/web/common/footer";
import { Link, useLocation } from "react-router-dom";

const InfoWelcome = (props) => {
    const refs = {
        subvisual: useRef(null),
        greetings: useRef(null),
        introduce: useRef(null),
        certification: useRef(null),
        partners: useRef(null),
    };

    // url params
    const location = useLocation();
    const locationState = location.state;

    const headerRoute = locationState?.headerRoute;

    const [sectionState, setSectionState] = useState("");

    useEffect(() => {
        moveToSection(headerRoute);
    }, []);

    const moveToSection = (componentRef) => {
        setSectionState(componentRef);

        switch (componentRef) {
            case "greetings":
                refs.subvisual.current?.scrollIntoView({ behavior: "smooth" });
                break;

            case "introduce":
                refs.introduce.current?.scrollIntoView({ behavior: "smooth" });
                break;

            case "certification":
                refs.certification.current?.scrollIntoView({
                    behavior: "smooth",
                });
                break;

            case "partners":
                refs.partners.current?.scrollIntoView({ behavior: "smooth" });
                break;

            default:
                refs.subvisual.current?.scrollIntoView({ behavior: "smooth" });
                break;
        }
    };

    return (
        <>
            <Header />
            <div id="subvisual" ref={refs.subvisual}>
                <div className="sub_txt">
                    <h2>WE ARE</h2>
                </div>

                <div id="leftmenu">
                    <Link
                        to=""
                        onClick={() => moveToSection("greetings")}
                        className={sectionState === "greetings" && "active"}
                    >
                        인사말
                    </Link>
                    <Link
                        to=""
                        onClick={() => moveToSection("introduce")}
                        className={sectionState === "introduce" && "active"}
                    >
                        회사소개
                    </Link>
                    <Link
                        to=""
                        onClick={() => moveToSection("certification")}
                        className={sectionState === "certification" && "active"}
                    >
                        인증현황
                    </Link>
                    <Link
                        to=""
                        onClick={() => moveToSection("partners")}
                        className={sectionState === "partners" && "active"}
                    >
                        파트너
                    </Link>
                    <Link to="">회사소개서 다운로드</Link>
                </div>
            </div>
            <div id="con_area.wide_conarea ">
                <div className="weare">
                    <div className="boxing" id="sec01" ref={refs.greetings}>
                        <div className="flx_box">
                            <div>
                                <h3 className="c_tit">
                                    <span>인사말</span>
                                    GREETINGS
                                </h3>
                                <p className="normal">
                                    <h4>㈜메디씨티는</h4>
                                    환자와 의료진의 중심에서 글로벌 의료통합
                                    플랫폼 서비스를 통해 새로운 혁신을
                                    시작합니다. <br />
                                    또한 우수한 K메디컬 기술을 해외에 널리
                                    알리고 소통하는 장을 마련함으로써 지금도
                                    높은 사망률로 어려움을 겪고 있는 주변
                                    나라들에게 우수한 의료 정보의 전달과
                                    온/오프라인 교육을 통해“생명을 살리는 장을
                                    마련하겠다” 라는 사명감으로 의료분야의
                                    집중적인 투자 및 육성을 진행하고 있습니다.{" "}
                                    <br />
                                    좋은 제품과 서비스를 제공하는데 그치지
                                    않겠습니다. <br />전 임직원이 하나가 되어
                                    끊임없이 도전하고 성장하며 고객의 가치를
                                    최우선으로 여기는 NO.1 글로벌기업이
                                    되겠습니다.
                                </p>
                                <div className="sign">
                                    <p>(주)메디씨티 CEO</p>
                                    <img
                                        src="img/web/sub/sign.png"
                                        alt="박성민"
                                    />
                                </div>
                            </div>
                            <div>
                                <img src="img/web/sub/greeting_01.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec02" ref={refs.introduce}>
                        <div className="layout">
                            <div>
                                <h3 className="c_tit">
                                    <span>회사소개</span>
                                    What is Medi-City
                                </h3>
                            </div>
                            <div className="box_wrap">
                                <div className="graybox">
                                    <p>
                                        <img
                                            src="img/web/sub/intro_icon01.png"
                                            alt=""
                                        ></img>
                                    </p>
                                    <h5>REWARD 시스템 서비스</h5>
                                    <span>
                                        의료전문 동영상 컨텐츠 플랫폼 서비스를
                                        통한 REWARD 시스템 서비스를 제공합니다.
                                    </span>
                                </div>
                                <div className="graybox">
                                    <p>
                                        <img
                                            src="img/web/sub/intro_icon02.png"
                                            alt=""
                                        ></img>
                                    </p>
                                    <h5>MEMBERSHIP 서비스</h5>
                                    <span>
                                        의료인들만의 다양한 MEMBERSHIP 서비스를
                                        제공합니다.
                                    </span>
                                </div>
                                <div className="graybox">
                                    <p>
                                        <img
                                            src="img/web/sub/intro_icon03.png"
                                            alt=""
                                        ></img>
                                    </p>
                                    <h5>MICE 및 교육연계 서비스</h5>
                                    <span>
                                        의료관련 학회 및 기관의 MICE 및 교육연계
                                        서비스를 제공합니다.
                                    </span>
                                </div>
                                <div className="graybox">
                                    <p>
                                        <img
                                            src="img/web/sub/intro_icon04.png"
                                            alt=""
                                        ></img>
                                    </p>
                                    <h5>의료인들의 삶의 질 개선</h5>
                                    <span>
                                        의료인들의 삶의 질 개선 방향을
                                        연구합니다.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec03">
                        <div className="layout">
                            <div>
                                <h3 className="c_tit">
                                    <span>회사소개</span>
                                    Slogan
                                </h3>
                            </div>
                            <div className="txt">
                                <img
                                    src="img/web/sub/intro_txt.png"
                                    alt=""
                                ></img>
                                <p>
                                    글로벌 메디컬 교육 플랫폼 서비스는
                                    메디씨티가 함께합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec04">
                        <div className="layout">
                            <div className="flx_box">
                                <h3 className="c_tit">
                                    <span>회사소개</span>
                                    Management<br></br>
                                    Philosophy
                                </h3>
                                <p>
                                    메디씨티는 의료기관, 학회, Webinar(웨비나),
                                    MICE 서비스를 통해 4만여명의 의료인 데이터
                                    베이스와 수술, 강의 영상을 보유하고 있으며
                                    개원 컨설팅부터 홍보, 의료서비스 대상과의
                                    연계, 제휴기관의 다양한 혜택을 메디씨티
                                    회원들에게 제공합니다.
                                </p>
                            </div>
                            <div className="img_wrap">
                                <img
                                    src="img/web/sub/intro_graph.png"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec05">
                        <div className="layout">
                            <div className="flx_box">
                                <h3 className="c_tit">
                                    <span>회사소개</span>
                                    Mission<br></br>& Vision<br></br>
                                </h3>
                                <ul>
                                    <li>
                                        IT, MICE, MEDIA <span>융복합 실현</span>
                                        을 통한 의료인, 고객 동반 성장 기여
                                    </li>
                                    <li>
                                        국내 최고, 글로벌 확장을 통한{" "}
                                        <span>의료통합 플랫폼 서비스</span>를
                                        제공하는 기업 실현
                                    </li>
                                </ul>
                            </div>
                            <div className="bg"></div>
                        </div>
                    </div>

                    <div className="boxing" id="sec06">
                        <div className="layout">
                            <h3 className="c_tit c_tit_kr">
                                <span>회사소개</span>
                                메디씨티가 걸어온 길
                            </h3>
                            <div className="first line">
                                <div className="left">
                                    <div className="logobox">
                                        <img
                                            src="img/web/sub/logo01.png"
                                            alt=""
                                        ></img>
                                    </div>
                                    <h4>2006</h4>
                                    <h5>Hicomp 설립</h5>
                                    <p>
                                        Web Service<br></br>
                                        홈페이지제작<br></br>
                                        소프트웨어 개발<br></br>
                                        유지보수<br></br>
                                        시스템 구축
                                    </p>
                                </div>
                                <div className="left">
                                    <div className="logobox">
                                        <img
                                            src="img/web/sub/logo02.png"
                                            alt=""
                                        ></img>
                                    </div>
                                    <h4>2013</h4>
                                    <h5>Hicomp Int. 사명변경</h5>
                                    <p>
                                        All-in-one Service<br></br>
                                        Premium PCO<br></br>
                                        자체 인쇄,출판<br></br>
                                        Online/Offline 컨설팅<br></br>
                                        시스템 분석 설계
                                    </p>
                                </div>
                                <div className="left">
                                    <div className="logobox">
                                        <img
                                            src="img/web/sub/logo03.png"
                                            alt=""
                                        ></img>
                                    </div>
                                    <h4>2020</h4>
                                    <h5>㈜Able 설립</h5>
                                    <p>
                                        Webinar 시스템 구축<br></br>
                                        디자인 제작<br></br>
                                        기획/관리 홍보<br></br>
                                        전문 PCO 현장팀 운영<br></br>
                                        온라인 개발팀 운영
                                    </p>
                                </div>
                            </div>
                            <div className="second line">
                                <div className="right">
                                    <div className="logobox">
                                        <img
                                            src="img/web/sub/logo05.png"
                                            alt=""
                                        ></img>
                                    </div>
                                    <h4>2023</h4>
                                    <h5>㈜메디씨티 인도네시아 법인설립</h5>
                                    <p>
                                        K-MEDI 인니전용<br></br>
                                        APP 개발<br></br>
                                        문화교류 서비스
                                    </p>
                                </div>
                                <div className="right">
                                    <div className="logobox">
                                        <img
                                            src="img/web/sub/logo04.png"
                                            alt=""
                                        ></img>
                                    </div>
                                    <h4>2022</h4>
                                    <h5>㈜메디씨티 설립</h5>
                                    <p>
                                        의료통합 플랫폼<br></br>
                                        동영상 컨텐츠 제작<br></br>
                                        멤버십 서비스<br></br>
                                        Medi-Edu 서비스<br></br>
                                        Medi-Tour 서비스
                                    </p>
                                </div>
                            </div>
                            <div className="third line">
                                <div className="left">
                                    <div className="logobox">
                                        <img
                                            src="img/web/sub/logo04.png"
                                            alt=""
                                        ></img>
                                    </div>
                                    <h4>2024</h4>
                                    <h5>㈜메디씨티 강원 지사법인설립</h5>
                                    <p>
                                        국내 메디투어 운영<br></br>
                                        강원지역 MICE 사업 추진
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec07">
                        <div className="layout">
                            <h3 className="c_tit c_tit_kr">
                                <span>회사소개</span>
                                History
                            </h3>
                            <div className="history">
                                <div className="historybox">
                                    <div className="month right">
                                        <div>
                                            <p className="on">5월</p>
                                            <ul>
                                                <li>
                                                    임피리얼 팰리스 서울 MOU
                                                    체결
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>4월</p>
                                            <ul>
                                                <li>
                                                    (주)스카이인터내셔날 MOU
                                                    체결
                                                </li>
                                                <li>
                                                    제주 해비치 호텔 & 리조트
                                                    MOU 체결
                                                </li>
                                                <li>
                                                    RSUI ASTUTI 병원장 방한 및
                                                    국립암센터 메디컬 투어
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>3월</p>
                                            <ul>
                                                <li>
                                                    AYANA MidplazaJakarta 체결
                                                </li>
                                                <li>
                                                    CMS Entertainment MOU 체결
                                                </li>
                                                <li>
                                                    RumahSakitUniversitas
                                                    Indonesia MOU 체결
                                                </li>
                                                <li>
                                                    CheongdamKorean Aesthetic
                                                    Clinic MOU 체결
                                                </li>
                                                <li>
                                                    PT. Cashtreefor Indonesia
                                                    MOU 체결
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>2월</p>
                                            <ul>
                                                <li>
                                                    (주)아트버디 K-ART 전시회
                                                    개최 (The Westin Jakarta)
                                                </li>
                                                <li>
                                                    제1회 PT. MEDI CITY
                                                    INDONESIA Showcase (The
                                                    Westin Jakarta)
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>1월</p>
                                            <ul>
                                                <li>
                                                    (주)메디씨티 상표등록
                                                    (제40-2146903호)
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="year">
                                        <div className="num on">2024</div>
                                        <div>
                                            <img
                                                src="img/web/sub/history_img01.png"
                                                alt=""
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="historybox">
                                    <div className="year">
                                        <div className="num">2023</div>
                                        <div>
                                            <img
                                                src="img/web/sub/history_img02.png"
                                                alt=""
                                            ></img>
                                        </div>
                                    </div>
                                    <div className="month right">
                                        <div>
                                            <p>12월</p>
                                            <ul>
                                                <li>
                                                    올마이투어(allmytour) MOU
                                                    체결
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>11월</p>
                                            <ul>
                                                <li>(주)아트버디 MOU 체결</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>10월</p>
                                            <ul>
                                                <li>
                                                    국회등록
                                                    사)한국과학기술정책연구회
                                                    이지선 의장 이사 등재
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>7월</p>
                                            <ul>
                                                <li>
                                                    (주)메디씨티 K-Medi
                                                    인도네시아 서비스 Test
                                                    Version1.0 출시
                                                </li>
                                                <li>
                                                    (주)메디씨티 강원 지사법인
                                                    설립 (박종인 지사장)
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>6월</p>
                                            <ul>
                                                <li>
                                                    (주)메디씨티 Membership
                                                    Service 베타 서비스 출시
                                                </li>
                                                <li>
                                                    iADH2024 International
                                                    Conference Invited Speaker,
                                                    UdijantTedjosasongko협약
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>5월</p>
                                            <ul>
                                                <li>
                                                    PT. MEDI CITY INDONESIA
                                                    (인도네시아 해외법인 설립,
                                                    박성민 법인장)
                                                </li>
                                                <li>
                                                    'K-Medi' 인도네시아 해외법인
                                                    서비스 상표 등록
                                                </li>
                                                <li>
                                                    특허출원 제10-2023-0070316 :
                                                    대상 수술의 정보에 기초하여
                                                    리워드를 제공하는 컨텐츠
                                                    제공 방법 및 이를 수행하는
                                                    컨텐츠 제공 시스템
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="historybox">
                                    <div className="month right">
                                        <div>
                                            <p>10월</p>
                                            <ul>
                                                <li>제이제이진옴므 MOU 체결</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>9월</p>
                                            <ul>
                                                <li>
                                                    기술보호데스크 사업선정
                                                    (경기도 테크노파크)
                                                </li>
                                                <li>
                                                    킨텍스바이케이트리호텔 MOU
                                                    체결
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>7월</p>
                                            <ul>
                                                <li>
                                                    에어마카오 인천공항 MOU 체결
                                                </li>
                                                <li>
                                                    머큐어엠버서드호텔 울산 MOU
                                                    체결
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>4월</p>
                                            <ul>
                                                <li>
                                                    (주)메디씨티 상표등록 출원
                                                    (대한민국 특허청)
                                                </li>
                                                <li>세인트존스호텔 MOU 체결</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>3월</p>
                                            <ul>
                                                <li>
                                                    ㈜메디씨티 공식 홈페이지
                                                    오픈 Version1.0
                                                    (medi-city.co.kr)
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>2월</p>
                                            <ul>
                                                <li>㈜메디씨티 법인설립</li>
                                                <li>
                                                    제1회 Medi-City Day 개최 및
                                                    출범식 (강릉 세인트존스호텔)
                                                </li>
                                                <li>
                                                    중소기업 등록
                                                    ('중소기업기본법' 제2조 및
                                                    '소상공인기본법' 제2조)
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="year">
                                        <div className="num on">2022</div>
                                        <div>
                                            <img
                                                src="img/web/sub/history_img03.png"
                                                alt=""
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec08">
                        <div className="layout">
                            <h3 className="c_tit c_tit_kr">
                                <span>회사소개</span>
                                조직도
                            </h3>
                            <div>
                                <img
                                    src="img/web/sub/organization.png"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec09">
                        <div className="layout">
                            <h3 className="c_tit">
                                <span>회사소개</span>
                                CI & BI
                            </h3>
                            <div className="top">
                                <div className="flx_box">
                                    <h4>Corporate Identity</h4>
                                    <p className="normal">
                                        워드마크 디자인은 유연성과 단순함을
                                        강조하고 있으며,{" "}
                                        <span>
                                            다양한 네트워크 (Medical, Media, IT,
                                            Big Data)
                                        </span>
                                        를 융복합하여{" "}
                                        <span>
                                            세계 의료계 발전에 영향력이 있는
                                            기업
                                        </span>
                                        이 되고자 하는 목표를 나타내고자 하였다.
                                    </p>
                                </div>
                            </div>
                            <div className="flx_box">
                                <div>
                                    <img
                                        src="img/web/sub/medicity_ci.png"
                                        alt=""
                                    ></img>
                                </div>
                                <div className="colorbox">
                                    <div className="green color">
                                        <div>
                                            <h5>M_Green</h5>
                                            PANTONE 363C<br></br>
                                            Process Color_C69 M24 Y100 K7
                                            <br></br>
                                            RGB_R86 G145 B49<br></br>
                                            #5c903f
                                        </div>
                                        <span>
                                            의료의 기본 색상인 그린, 생명과
                                            자연, 평화의 의미로 그린을 가장
                                            앞으로 배치하였습니다.
                                        </span>
                                    </div>
                                    <div className="orange color">
                                        <div>
                                            <h5>E_Orange</h5>
                                            PANTONE 1575C<br></br>
                                            Process Color_C0 M62 Y100 K0
                                            <br></br>
                                            RGB_R239 G126 B0<br></br>
                                            #f57e20
                                        </div>
                                        <span>
                                            뜨겁지 않은 따뜻한 느낌으로 인류를
                                            따뜻하게 품으려 ㈜메디씨티의 마음을
                                            표현하였습니다.
                                        </span>
                                    </div>
                                    <div className="pink color">
                                        <div>
                                            <h5>D_Red</h5>
                                            PANTONE 1787 C<br></br>
                                            Process Color_C0 M84 Y62 K0<br></br>
                                            RGB_R233 G74 B75<br></br>
                                            #f05157
                                        </div>
                                        <span>
                                            ㈜메디씨티의 열정을 표현하였습니다.
                                        </span>
                                    </div>
                                    <div className="purple color">
                                        <div>
                                            <h5>I_Purple</h5>
                                            PANTONE 7664C<br></br>
                                            Process Color_C59 M78 Y22 K5
                                            <br></br>
                                            RGB_R124 G74 B129<br></br>
                                            #7a5184
                                        </div>
                                        <span>
                                            빨강과 파랑의 반대되는 성향이
                                            혼재되어 나타내는 색상, 파랑의
                                            신뢰를 바탕으로 붉은색의 활기찬
                                            에너지를 품은 ㈜메디씨티를
                                            표현하였습니다.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bi">
                                <div className="top">
                                    <div className="flx_box">
                                        <h4>Brand Identity</h4>
                                        <p className="normal">
                                            로고의 기본 컨셉은 세가지 시각적
                                            형태의 의미를 부여한다.<br></br>
                                            <span>
                                                대한민국의 우수한 의료 기술 및
                                                지식
                                            </span>
                                            을(문자 “K”), 해외 의료진에게 널리
                                            알려, <span>인간존중의 이념</span>에
                                            따라(좌측형상)<br></br>
                                            <span>의료계 성장 방향</span>(우측
                                            형상)을 형상화 하여 설명하였다
                                        </p>
                                    </div>
                                </div>
                                <div className="flx_box">
                                    <div>
                                        <img
                                            src="img/web/sub/kmedi_bi.png"
                                            alt=""
                                        ></img>
                                    </div>
                                    <div className="colorbox">
                                        <div className="red color">
                                            <div>
                                                <h5>I_RED</h5>
                                                Process Color_C0 M99 Y100 K0
                                                <br></br>
                                                RGB_R255 G0 B0<br></br>
                                                #FF0000
                                            </div>
                                            <span>
                                                인도네시아 국기를 나타내는 레드
                                            </span>
                                        </div>
                                        <div className="blue color">
                                            <div>
                                                <h5>K_BLUE</h5>
                                                Process Color_C100 M83 Y2 K0
                                                <br></br>
                                                RGB_R0 G71 B160<br></br>
                                                #0047A0
                                            </div>
                                            <span>
                                                대한민국의 국기를 나타내는 블루
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec10" ref={refs.certification}>
                        <div className="layout">
                            <h3 className="c_tit">
                                <span>인증현황</span>
                                Certification status
                            </h3>
                            <div className="box_wrap">
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi01.png"
                                        alt=""
                                    ></img>
                                    <p>상표등록출원</p>
                                </div>
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi02.png"
                                        alt=""
                                    ></img>
                                    <p>해외 특허 출원 (PCT)</p>
                                </div>
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi03.png"
                                        alt=""
                                    ></img>
                                    <p>인니상표등록</p>
                                </div>
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi04.png"
                                        alt=""
                                    ></img>
                                    <p>메디씨티 사업자등록증</p>
                                </div>
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi05.png"
                                        alt=""
                                    ></img>
                                    <p>관광사업등록증</p>
                                </div>
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi06.png"
                                        alt=""
                                    ></img>
                                    <p>외국인환자 유치업자 등록증</p>
                                </div>
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi07.png"
                                        alt=""
                                    ></img>
                                    <p>중소기업 확인서</p>
                                </div>
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi08.png"
                                        alt=""
                                    ></img>
                                    <p>인도네시아 법인 설립</p>
                                </div>
                                <div className="certi">
                                    <img
                                        src="img/web/sub/certi09.png"
                                        alt=""
                                    ></img>
                                    <p>강원지사 사업자등록증</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="boxing" id="sec11" ref={refs.partners}>
                        <div className="layout">
                            <h3 className="c_tit">
                                <span>파트너</span>
                                Partners
                            </h3>
                            <ul className="partner">
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner01.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner02.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner03.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner04.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner05.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner06.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner07.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner08.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner09.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner10.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner11.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner12.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner13.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner14.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner15.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner16.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner17.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner18.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner19.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner20.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner21.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner22.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img
                                            src="/img/web/partner/partner23.png"
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default InfoWelcome;
