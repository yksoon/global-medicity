import React from 'react';
import Header from "components/web/common/header";
import Footer from "components/web/common/footer";

const InfoWelcome = () => {
    return (
        <>
        <Header />
        <div id="subvisual">
                <div className="sub_txt">
                    <h2>WE ARE</h2>
                </div>

                <div id="leftmenu">
                    <a href="#sec01" className="active">인사말</a>
                    <a href="#sec02">회사소개</a>
                    <a href="#sec03">인증현황</a>
                    <a href="#sec04">파트너</a>
                    <a href="#sec05">회사소개서 다운로드</a>
                </div>
            </div>
            <div id="con_area">
                <div className="weare">
                        <h3 className="c_tit">
                            <span>인사말</span>
                            GREETINGS
                        </h3>
                    <div className="boxing" id="sec01">
                        <div className="flx_box">
                            <div>
                                <p className="normal">
                                    <h4>㈜메디씨티는</h4>
                                    환자와 의료진의 중심에서 글로벌 의료통합 플랫폼 서비스를 통해 새로운 혁신을 시작합니다. <br />
                                    또한 우수한 K메디컬 기술을 해외에 널리 알리고 소통하는 장을 마련함으로써 지금도 높은 사망률로 어려움을 겪고 있는 주변 나라들에게 우수한 의료 정보의 전달과 온/오프라인 교육을 통해“생명을 살리는 장을 마련하겠다” 라는 사명감으로 의료분야의 집중적인 투자 및 육성을 진행하고 있습니다. <br />
                                    좋은 제품과 서비스를 제공하는데 그치지 않겠습니다. <br />
                                    전 임직원이 하나가 되어 끊임없이 도전하고 성장하며 고객의 가치를 최우선으로 여기는 NO.1 글로벌기업이 되겠습니다.
                                </p>
                                <div className="sign">
                                    <p>(주)메디씨티 CEO</p>
                                    <img src="img/web/sub/sign.png" alt="박성민" />
                                </div>
                            </div>
                            <div><img src="img/web/sub/greeting.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer /> 
        </>
    );
};

export default InfoWelcome;
