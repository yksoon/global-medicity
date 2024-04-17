import React from "react";
import { Link } from "react-router-dom";
import Arrow from "components/web/main/mainComponents/mainContentsComponents/Arrow";
import routerPath from "etc/lib/path/routerPath";

const Section04 = () => {
    return (
        <>
            <div className="section04">
                <div className="sec_in">
                   <div className="title">
                        <h5>메디씨티의 지난 활동을 기록합니다.</h5>
                        <div>
                            <h3>medi video</h3>
                            <Link><img src="img/web/main/arrow.png" alt="" /></Link>
                        </div>
                   </div>
                   <ul className="notice">
                        <li>
                            <a href=""><img src="" alt="" /></a>
                        </li>
                        <li>
                            <div>
                                <h5>글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범</h5>
                                <p>
                                    글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고...
                                </p>
                            </div>
                            <Link to={routerPath.web_kmedi_intro_url} className="btn_main">VIEW MORE <Arrow /></Link>
                        </li>
                        <li>
                            <div>
                                <h5>글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범</h5>
                                <p>
                                    글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고...
                                </p>
                            </div>
                            <Link to={routerPath.web_kmedi_intro_url} className="btn_main">VIEW MORE <Arrow /></Link>
                        </li>
                        <li>
                            <div>
                                <h5>글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범</h5>
                                <p>
                                    글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고...
                                </p>
                            </div>
                            <Link to={routerPath.web_kmedi_intro_url} className="btn_main">VIEW MORE <Arrow /></Link>
                        </li>
                   </ul>
                </div>
            </div>
        </>
    );
};

export default Section04;
