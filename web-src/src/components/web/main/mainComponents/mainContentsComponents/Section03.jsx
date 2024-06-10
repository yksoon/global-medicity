import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "components/web/common/Arrow";
import routerPath from "etc/lib/path/routerPath";
import useConfirm from "hook/useConfirm";
import useAlert from "hook/useAlert";
import {
    CommonConsole,
    CommonErrModule,
    CommonParseHTMLString,
} from "etc/lib/Common";
import { useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "etc/lib/recoils/atoms";
import apiPath from "etc/lib/path/apiPath";
import { boardType } from "etc/lib/static";
import { CommonRestAPI } from "etc/lib/CommonRestAPI";
import { successCode } from "etc/lib/resultCode";

const Section03 = () => {
    const { confirm } = useConfirm();
    const { alert } = useAlert();
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    /**
     * 리스트에 보여질 항목 갯수
     * @type {number}
     */
    const pageSize = 4;

    /**
     * 리스트 state
     */
    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [categoryState, setCategoryState] = useState("뉴스");

    useEffect(() => {
        getBoardList(1, pageSize, categoryState);
    }, [categoryState]);

    /**
     * 리스트 가져오기
     * @param pageNum
     * @param pageSize
     * @param searchKeyword
     */
    const getBoardList = (pageNum, pageSize, searchKeyword) => {
        setIsSpinner(true);

        // /v1/_boards
        // POST
        const url = apiPath.api_admin_boards;
        const data = {
            pageNum: pageNum,
            pageSize: pageSize,
            searchKeyword: searchKeyword,
            boardType: boardType.etc, // 공지사항
        };

        // 파라미터
        const restParams = {
            method: "post",
            url: url,
            data: data,
            err: err,
            callback: (res) => responsLogic(res),
        };

        CommonRestAPI(restParams);

        // 완료 로직
        const responsLogic = (res) => {
            let resultCode = res.headers.resultcode;

            // 성공
            if (
                resultCode === successCode.success ||
                resultCode === successCode.noData
            ) {
                let resultInfo = res.data.resultInfo;
                let pageInfo = res.data.pageInfo;

                setBoardList(resultInfo);
                setPageInfo(pageInfo);

                setIsSpinner(false);
            } else {
                // 에러
                CommonConsole("log", res);

                setIsSpinner(false);
            }
        };
    };

    return (
        <>
            <div className="section03">
                <div className="sec_in">
                    <div className="title">
                        <h5>메디씨티의 새로운 소식을 전합니다.</h5>
                        <div>
                            <h3>highlight</h3>
                            <Link to={routerPath.web_media_news_url}>
                                <img src="img/web/main/arrow.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <ul className="notice">
                        {boardList.length !== 0 &&
                            boardList.map((item, i) => (
                                <li key={`main_news_${item.boardIdx}`}>
                                    <div>
                                        <h5>{item.subject}</h5>
                                        <p>
                                            {CommonParseHTMLString(
                                                item.content,
                                            )}
                                        </p>
                                    </div>
                                    <Link
                                        to={`${routerPath.web_media_news_detail_url}${item.boardIdx}`}
                                        className="btn_main"
                                    >
                                        VIEW MORE <Arrow />
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Section03;
