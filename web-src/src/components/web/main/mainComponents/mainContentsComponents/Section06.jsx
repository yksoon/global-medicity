import React from "react";
import { Link } from "react-router-dom";
import Arrow from "components/web/common/Arrow";
import routerPath from "etc/lib/path/routerPath";

const Section06 = () => {
    return (
        <>
            <div className="section06">
                <div className="sec_in">
                   <div className="title">
                        <h5>메디씨티는 세계를 향해 갑니다.</h5>
                        <div>
                            <h3>Respect for life</h3>
                        </div>
                        <p>
                            메디씨티는 한국의 의료기술을 세계에 알림으로써<br />
                            전세계의 많은 환자들이 보다 좋은 의료서비스를 통해<br />
                            건강해지기를 진심으로 기원합니다.
                        </p>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Section06;
