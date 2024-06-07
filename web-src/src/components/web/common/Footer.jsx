import { CommonSpinner } from "etc/lib/Common";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isSpinnerAtom } from "etc/lib/recoils/atoms";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import routerPath from "etc/lib/path/routerPath";

function Footer() {
    const isSpinner = useRecoilValue(isSpinnerAtom);
    const location = useLocation();
    useEffect(() => {
        // 상단으로이동 퀵버튼 등장
        // if (location.pathname === "/") {
        document.addEventListener("scroll", function () {
            let currentScrollValue = document.documentElement.scrollTop;
            let gotop = document.getElementById("go_top");

            if (gotop) {
                if (currentScrollValue > 100) {
                    gotop.style.opacity = "1";
                } else {
                    gotop.style.opacity = "0";
                }
            }
        });
        // }
    }, []);

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* footer //S */}
            <div id="go_top">
                <a onClick={goToTop} style={{ cursor: "pointer" }}>
                    <img src="img/common/go_top.png" alt="상단으로 이동" />
                </a>
            </div>

            <div id="footer">
                <div id="footer_content">
                    <div className="footer_top">
                        <img src="/img/web/main/logo.png" alt="" />
                        <ul>
                            <li>
                                <Link>WE ARE</Link>
                            </li>
                            <li>
                                <Link>K-MEDI</Link>
                            </li>
                            <li>
                                <Link>BUSINESS</Link>
                            </li>
                            <li>
                                <Link>MEDIA CENTER</Link>
                            </li>
                        </ul>
                    </div>
                    <address>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>사업자</th>
                                        <td>(주)메디씨티</td>
                                    </tr>
                                    <tr>
                                        <th>대표자</th>
                                        <td>박성민</td>
                                    </tr>
                                    <tr>
                                        <th>사업자등록번호</th>
                                        <td>588-86-02555</td>
                                    </tr>
                                    <tr>
                                        <th>주소</th>
                                        <td>
                                            경기도 고양시 일산동구 무궁화로
                                            43-55, 302호
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="f_logo">
                            <a
                                href="https://www.instagram.com/medicitykorea"
                                target="_blank"
                            >
                                <img src="/img/web/main/f_insta.png" alt="" />
                            </a>
                            <a
                                href="https://www.instagram.com/medicitykorea"
                                target="_blank"
                            >
                                <img src="/img/web/main/f_youtube.png" alt="" />
                            </a>
                        </div>
                    </address>
                    <div className="copy">
                        Copyright Medi-city. All rights reserved.
                        <br />
                        자사의 사이트에 게시된 모든 컨텐츠등 외 저작권은
                        (주)메디씨티에게 있습니다. 자사의 사이트의 무단적인
                        수집을 엄격히 금합니다.
                    </div>
                </div>
            </div>
            {/* footer //E */}
            {isSpinner && <CommonSpinner />}
        </>
    );
}

export default Footer;
