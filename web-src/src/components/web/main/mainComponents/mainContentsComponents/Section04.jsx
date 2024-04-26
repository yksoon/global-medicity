import React from "react";
import { Link } from "react-router-dom";
import Arrow from "components/web/common/Arrow";
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
                   <ul className="video">
                        <li>
                            <Link><img src="/img/web/main/noimg.png" alt="" /></Link>
                        </li>
                        <li>
                            <Link><img src="/img/web/main/noimg.png" alt="" /></Link>
                        </li>
                        <li>
                            <Link><img src="/img/web/main/noimg.png" alt="" /></Link>
                        </li>
                   </ul>
                </div>
            </div>
        </>
    );
};

export default Section04;
