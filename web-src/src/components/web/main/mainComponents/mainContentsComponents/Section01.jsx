import React, { useEffect, useState } from "react";
import useConfirm from "hook/useConfirm";
import useAlert from "hook/useAlert";
import { CommonErrModule, CommonNotify } from "etc/lib/Common";
import { useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "etc/lib/recoils/atoms";
import { successCode } from "etc/lib/resultCode";
import { Skeleton } from "@mui/material";
import { commaOfNumber } from "etc/lib/Pattern";
import { Link } from "react-router-dom";
import Arrow from "components/web/common/Arrow";
import routerPath from "etc/lib/path/routerPath";

const Section01 = (props) => {
    return (
        <>
            <div className="section01">
                <div className="sec_in">
                    <h5>ABOUT US</h5>
                    <p>
                        메디씨티는 의료기관, 학회, Webinar(웨비나), MICE
                        서비스를 통해 4만여명의 의료인 데이터 베이스와 수술,
                        강의 영상을 보유하고 있으며
                        <br />
                        개원 컨설팅부터 홍보, 의료서비스 대상과의 연계,
                        제휴기관의 다양한 혜택을 메디씨티 회원들에게 제공합니다.
                    </p>
                    <h3>What is MEDI-CITY</h3>
                    <Link
                        to={routerPath.web_info_greet_url}
                        state={{ headerRoute: "greetings" }}
                        className="btn_main"
                    >
                        VIEW MORE <Arrow />
                    </Link>
                    <div className="sec01_img">
                        <div>
                            <span>
                                <img src="img/web/main/sec01_01.png" alt="" />
                            </span>
                        </div>
                        <div>
                            <span>
                                <img src="img/web/main/sec01_02.png" alt="" />
                            </span>
                            <span>
                                <img src="img/web/main/sec01_03.png" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section01;
