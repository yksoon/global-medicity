import React from "react";
import { Link } from "react-router-dom";
import Arrow from "components/web/common/Arrow";
import routerPath from "etc/lib/path/routerPath";

const Section02 = () => {
    return (
        <>
            <div className="section02">
                <div className="sec_in">
                   <div className="title">
                        <h5>메디씨티는 이런 비즈니스를 제공합니다.</h5>
                        <div>
                            <h3>Business</h3>
                            <Link><img src="img/web/main/arrow.png" alt="" /></Link>
                        </div>
                   </div>
                   <ul>
                        <li>
                            <div><img src="img/web/main/sec02_01.png" alt="" /></div>
                            <div className="busi_txt">
                                <h5>K-Medi Platform</h5>
                                <p>
                                    대한민국 의료인들의 우수한 강의, 수술 및 실험 영상들을 의료동영상 플랫폼(K-Medi)에 제공하여 개발도상국 의료진들의 의료 수준 향상을 목적으로 하는 구독형 미디어 서비스입니다.
                                </p>
                                <Link to={routerPath.web_kmedi_intro_url} className="btn_main">VIEW MORE <Arrow /></Link>
                            </div>
                        </li>
                        <li>
                            <div><img src="img/web/main/sec02_02.png" alt="" /></div>
                            <div className="busi_txt">
                                <h5>Hotel Service</h5>
                                <p>
                                    (주)메디씨티 회원들에게 편안하고 차별화된 안식처를 믿고 예약하는 호텔 플랫폼 서비스를 제공하며 객실 특가 및 부대시설 등 다양한 할인 및 차별화된 프라이빗 서비스 혜택을 누리세요.
                                </p>
                                <Link to={routerPath.web_business_hotel_url} className="btn_main">VIEW MORE <Arrow /></Link>
                            </div>
                        </li>
                        <li>
                            <div><img src="img/web/main/sec02_03.png" alt="" /></div>
                            <div className="busi_txt">
                                <h5>Tax Consulting Service</h5>
                                <p>
                                    사업자가 부담해야 하는 세금을 최소화하기 위해서 (주)메디씨티 제휴사인 스마트 세무회계에서는 보다 정확하고 신속한 세무·회계 1:1상담을 제공합니다.
                                </p>
                                <Link to={routerPath.web_business_tax_url} className="btn_main">VIEW MORE <Arrow /></Link>
                            </div>
                        </li>
                        <li>
                            <div><img src="img/web/main/sec02_04.png" alt="" /></div>
                            <div className="busi_txt">
                                <h5>Medi-Art Service</h5>
                                <p>
                                    (주)메디씨티 회원들에게 가치 있는 미술품을 개인 소장, 구매를 통한 재테크, 렌탈을 통한 세금 절세 혜택을 누릴 수 있게 전문가와 상담을 도와드립니다.
                                </p>
                                <Link to={routerPath.web_business_art_url} className="btn_main">VIEW MORE <Arrow /></Link>
                            </div>
                        </li>
                   </ul>
                </div>
            </div>
        </>
    );
};

export default Section02;
