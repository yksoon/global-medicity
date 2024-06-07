import React, { useEffect, useRef, useState } from "react";
import Header from "components/web/common/header";
import Footer from "components/web/common/footer";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

const BusinessHotel = (props) => {
    const refs = {
        subvisual: useRef(null),
        hotel: useRef(null),
        art: useRef(null),
        wine: useRef(null),
    };

    // url params
    const location = useLocation();
    const locationState = location.state;

    const headerRoute = locationState?.headerRoute;

    const [sectionState, setSectionState] = useState("hotel");

    useEffect(() => {
        moveToSection(headerRoute);
    }, []);

    const moveToSection = (componentRef) => {
        setSectionState(componentRef);

        switch (componentRef) {
            case "hotel":
                refs.hotel.current?.scrollIntoView({ behavior: "smooth" });
                break;

            case "art":
                refs.art.current?.scrollIntoView({ behavior: "smooth" });
                break;

            case "wine":
                refs.wine.current?.scrollIntoView({ behavior: "smooth" });
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
                    <h2>BUSINESS</h2>
                </div>
                <div id="leftmenu">
                    <Link
                        to=""
                        onClick={() => moveToSection("hotel")}
                        // className="active"
                        className={sectionState === "hotel" && "active"}
                    >
                        Hotel Service
                    </Link>
                    <Link
                        to=""
                        onClick={() => moveToSection("art")}
                        className={sectionState === "art" && "active"}
                    >
                        Art Service
                    </Link>
                    <Link
                        to=""
                        onClick={() => moveToSection("wine")}
                        className={sectionState === "wine" && "active"}
                    >
                        Wine Promotion
                    </Link>
                </div>
            </div>
            <div id="con_area">
                <div className="business">
                    <div className="hotel" ref={refs.hotel}>
                        <div className="txt_wrap">
                            <div className="top">
                                <h3 className="c_tit">
                                    <span>호텔서비스</span>
                                    Hotel Service
                                    <Link>
                                        <img
                                            src="img/web/sub/arrow.png"
                                            alt=""
                                        />
                                    </Link>
                                </h3>
                                <p>
                                    휴식의 가치를 더하는 Private 힐링 숙박
                                    서비스
                                </p>
                            </div>
                            <div className="line">
                                <h5>Room Special Service</h5>
                                <p>객실특가 서비스</p>
                            </div>
                            <div className="line">
                                <h5>Supplementary Facilities</h5>
                                <p>부대시설할인 </p>
                            </div>
                            <div className="line">
                                <h5>Special Service</h5>
                                <p>(주)메디씨티 회원만의 특별서비스제공</p>
                            </div>
                        </div>
                        <div className="img_wrap">
                            <img src="img/web/sub/hotel_img.jpg" alt="" />
                        </div>
                    </div>

                    <div className="art" ref={refs.art}>
                        <div className="img_wrap">
                            <img src="img/web/sub/art_img.jpg" alt="" />
                        </div>
                        <div className="txt_wrap">
                            <div className="top">
                                <h3 className="c_tit">
                                    <span>아트 서비스</span>
                                    <Link>
                                        <img
                                            src="img/web/sub/arrow_left.png"
                                            alt=""
                                        />
                                    </Link>
                                    Art Service
                                </h3>
                                <p>
                                    고급스럽고 분위기 있는 공간 연출,<br></br>
                                    절세 혜택에 비용처리까지, 메디아트 서비스
                                </p>
                            </div>
                            <div className="line">
                                <h5>미술품 개인소장</h5>
                                <p>
                                    국내외 인기있는 작가들의 원화 작품을 개인
                                    소장하여 시각적인 만과 삶의 품격을 높이세요.
                                </p>
                            </div>
                            <div className="line">
                                <h5>미술품 재테크</h5>
                                <p>
                                    계약한 미술품을 통해 어떠한 재테크
                                    플랫폼보다 안정적이면서 높은 수익률을 경험해
                                    보세요.{" "}
                                </p>
                            </div>
                            <div className="line">
                                <h5>미술품 구매/렌탈</h5>
                                <p>
                                    미술품 구매 또는 렌탈을 통해 강력한 법인,
                                    개인 세금 절감 혜택을 누려보세요.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="wine" ref={refs.wine}>
                        <div className="txt_wrap">
                            <div className="top">
                                <h3 className="c_tit">
                                    <span>빈티지 와인 프로모션</span>
                                    Wine Promotion
                                    <Link>
                                        <img
                                            src="img/web/sub/arrow.png"
                                            alt=""
                                        />
                                    </Link>
                                </h3>
                                <p>몰도바(Moldova) 와인</p>
                            </div>
                            <p>
                                ㈜메디씨티는 회원들에게 국내에서 쉽게 접할 수
                                없는 몰도바의 특별한 와인을 제공합니다.<br></br>
                                몰도바의 풍부한 와인 문화와 독특한 포도 품종이
                                반영된 이 희귀 와인들의 국내 유일 총판을 통한
                                공급을 제공하고 있으며,<br></br>
                                메디씨티 회원 (Medi-People)만이 누릴 수 있는
                                Private하고 차별화된 경험을 제공합니다.<br></br>
                                각 와인은 몰도바의 진정한 맛과 전통을 담고 있어,
                                와인 애호가들에게 놓칠 수 없는 기회를
                                제공합니다.<br></br>
                                몰도바의 깊은 맛을 즐길 수 있는 본 서비스는
                                메디씨티 회원들에게만 드리는 특별한 혜택입니다
                            </p>
                        </div>
                        <div className="img_wrap">
                            <img src="img/web/sub/wine_img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BusinessHotel;
