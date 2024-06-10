import React, { useEffect, useState } from "react";
import Header from "components/web/common/header";
import Footer from "components/web/common/footer";
import Arrow from "components/web/common/Arrow";
import { Link } from "react-router-dom";
import routerPath from "etc/lib/path/routerPath";
import useConfirm from "hook/useConfirm";
import useAlert from "hook/useAlert";
import { CommonConsole, CommonErrModule } from "etc/lib/Common";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "etc/lib/recoils/atoms";
import apiPath from "etc/lib/path/apiPath";
import { boardType } from "etc/lib/static";
import { CommonRestAPI } from "etc/lib/CommonRestAPI";
import { successCode } from "etc/lib/resultCode";

const MediaNews = (props) => {
    const { confirm } = useConfirm();
    const { alert } = useAlert();
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    const isSpinner = useRecoilValue(isSpinnerAtom);

    /**
     * 리스트에 보여질 항목 갯수
     * @type {number}
     */
    const pageSize = 9;

    /**
     * 리스트 state
     */
    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [categoryState, setCategoryState] = useState("");

    const handleCategory = (category) => {
        setCategoryState(category);

        switch (category) {
            case "":
                document.getElementById("전체").classList.add("on");
                document.getElementById("영상").classList.remove("on");
                document.getElementById("뉴스").classList.remove("on");
                break;

            case "영상":
                document.getElementById("영상").classList.add("on");
                document.getElementById("전체").classList.remove("on");
                document.getElementById("뉴스").classList.remove("on");
                break;

            case "뉴스":
                document.getElementById("뉴스").classList.add("on");
                document.getElementById("영상").classList.remove("on");
                document.getElementById("전체").classList.remove("on");
                break;
        }
    };

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

    /**
     * 페이지네이션 이동
     * @param e
     * @param value
     */
    const handleChange = (e, value) => {
        getBoardList(value, pageSize, categoryState);
    };

    // const parser = new DOMParser();
    // const doc = parser.parseFromString(
    //     resultInfo[0].content,
    //     "text/html",
    // );
    //
    // console.log(doc);
    //
    // const firstImage = doc.querySelector("img").src;
    // console.log(firstImage);

    const isHaveImg = (content) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");

        const firstImage = doc.querySelector("img")?.src;

        return firstImage;
    };

    return (
        <>
            <Header />
            <div id="subvisual">
                <div className="sub_txt">
                    <h2>MEDIA CENTER</h2>
                </div>
                <div id="leftmenu">
                    <Link to={routerPath.web_media_news_url} className="active">
                        NEWS
                    </Link>
                    <Link to={routerPath.web_media_notice_url}>공지사항</Link>
                </div>
            </div>
            <div id="con_area">
                <div className="medicenter">
                    <div className="top">
                        <h3 className="c_tit">
                            <span>메디씨티의 소식을 전합니다</span>
                            NEWS
                        </h3>
                        <div className="tab">
                            <Link
                                to=""
                                onClick={() => handleCategory("")}
                                id="전체"
                                className="on"
                            >
                                전체보기
                            </Link>
                            <Link
                                to=""
                                onClick={() => handleCategory("영상")}
                                id="영상"
                            >
                                영상콘텐츠
                            </Link>
                            <Link
                                to=""
                                onClick={() => handleCategory("뉴스")}
                                id="뉴스"
                            >
                                NEWS
                            </Link>
                        </div>
                    </div>
                    <div className="boxwrap">
                        {/*반복 시작*/}
                        {boardList.length !== 0 &&
                            boardList.map((item) => (
                                <figure key={`contentsList_${item.boardIdx}`}>
                                    <div
                                        // to={`${routerPath.web_media_news_detail_url}${item.boardIdx}`}
                                        className="box"
                                    >
                                        {isHaveImg(item.content) && (
                                            <div className="imgwrap">
                                                <img
                                                    src={isHaveImg(
                                                        item.content,
                                                    )}
                                                    alt={item.subject}
                                                ></img>
                                            </div>
                                        )}

                                        <div className="txtwrap">
                                            <p className="name">
                                                {item.subject}
                                            </p>
                                            <Link
                                                to={`${routerPath.web_media_news_detail_url}${item.boardIdx}`}
                                                className="btn_main"
                                            >
                                                VIEW MORE <Arrow />
                                            </Link>
                                        </div>
                                    </div>
                                </figure>
                            ))}
                        {/*반복 끝*/}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MediaNews;
