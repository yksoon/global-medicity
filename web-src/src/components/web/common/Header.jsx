import React, { useEffect } from "react";
import $ from "jquery";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { CommonOpenUrl } from "etc/lib/Common";
import routerPath from "etc/lib/path/routerPath";

function Header() {
    return (
        <>
            <div id="header">
                <div
                    id="header_content"
                    data-aos="fade-down"
                    data-aos-duration="1100"
                >
                    <h1 className="logo">
                        <Link to={routerPath.web_main_url}>
                            <img src="img/web/main/logo.png" alt="" />
                        </Link>
                    </h1>
                    <div id="gnb">
                        <ul>
                            <li>
                                <Link to="">WE ARE</Link>
                                <div className="submenu">
                                    <Link
                                        to={routerPath.web_info_greet_url}
                                        state={{ headerRoute: "greetings" }}
                                    >
                                        인사말
                                    </Link>
                                    <Link
                                        to={routerPath.web_info_greet_url}
                                        state={{ headerRoute: "introduce" }}
                                    >
                                        회사소개
                                    </Link>
                                    <Link
                                        to={routerPath.web_info_greet_url}
                                        state={{ headerRoute: "certification" }}
                                    >
                                        인증현황
                                    </Link>
                                    <Link
                                        to={routerPath.web_info_greet_url}
                                        state={{ headerRoute: "partners" }}
                                    >
                                        파트너
                                    </Link>
                                    <Link to="">회사소개서 다운로드</Link>
                                </div>
                            </li>
                            <li>
                                <Link to="">K-MEDI</Link>
                                <div className="submenu">
                                    <Link
                                        to={routerPath.web_kmedi_intro_url}
                                        state={{ headerRoute: "intro" }}
                                    >
                                        K-Medi 소개
                                    </Link>
                                    <Link
                                        to={routerPath.web_kmedi_intro_url}
                                        state={{ headerRoute: "app" }}
                                    >
                                        K-Medi App
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link to="">BUSINESS</Link>
                                <div className="submenu">
                                    <Link
                                        to={routerPath.web_business_hotel_url}
                                        state={{ headerRoute: "hotel" }}
                                    >
                                        Hotel Service
                                    </Link>
                                    <Link
                                        to={routerPath.web_business_hotel_url}
                                        state={{ headerRoute: "art" }}
                                    >
                                        Art Service
                                    </Link>
                                    <Link
                                        to={routerPath.web_business_hotel_url}
                                        state={{ headerRoute: "wine" }}
                                    >
                                        Wine Service
                                    </Link>
                                    {/*<Link to={routerPath.web_business_hotel_url}*/}
                                    {/*      state={{headerRoute: "wine"}}*/}
                                    {/*>*/}
                                    {/*    Tax/Accounting Consulting Service*/}
                                    {/*</Link>*/}
                                </div>
                            </li>
                            <li>
                                <Link to="">MEDIA CENTER</Link>
                                <div className="submenu">
                                    {/*<Link to={routerPath.web_media_video_url}>*/}
                                    {/*    영상 콘텐츠*/}
                                    {/*</Link>*/}
                                    <Link to={routerPath.web_media_news_url}>
                                        뉴스 / 영상 콘텐츠
                                    </Link>
                                    <Link to={routerPath.web_media_notice_url}>
                                        공지사항
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="submenu_bg"></div>
                    </div>
                    <div className="lang">
                        <a href="">KO</a>
                        <a href="">EN</a>
                        <a href="">ID</a>
                    </div>
                    <div className="">
                        <img src="img/web/main/book.png" alt="" />
                    </div>
                </div>
                {/* 모바일 메뉴 // S */}
                <MobileNav />
                {/* 모바일메뉴 // E */}
            </div>
        </>
    );
}

export default Header;
