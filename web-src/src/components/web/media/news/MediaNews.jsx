import React, { useEffect, useRef, useState } from "react";
import Header from "components/web/common/header";
import Footer from "components/web/common/footer";
import Arrow from "components/web/common/Arrow";
import { Link } from "react-router-dom";
import routerPath from "etc/lib/path/routerPath";
import useConfirm from "hook/useConfirm";
import useAlert from "hook/useAlert";
import {
    CommonConsole,
    CommonErrModule,
    CommonGetYoutubeThumbnailUrl,
} from "etc/lib/Common";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "etc/lib/recoils/atoms";
import apiPath from "etc/lib/path/apiPath";
import { boardType } from "etc/lib/static";
import { CommonRestAPI } from "etc/lib/CommonRestAPI";
import { successCode } from "etc/lib/resultCode";
import { useTranslation } from "react-i18next";
import { Pagination } from "@mui/material";

const MediaNews = (props) => {
    const { t, i18n } = useTranslation();

    const { confirm } = useConfirm();
    const { alert } = useAlert();
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    const isSpinner = useRecoilValue(isSpinnerAtom);

    /**
     * 리스트에 보여질 항목 갯수
     * @type {number}
     */
    const pageSize = 20;

    const searchInput = useRef(null);

    /**
     * 리스트 state
     */
    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [categoryState, setCategoryState] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

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
        getBoardList(1, pageSize, searchKeyword, categoryState);
    }, [categoryState]);

    /**
     * 리스트 가져오기
     * @param pageNum
     * @param pageSize
     * @param searchKeyword
     */
    const getBoardList = (pageNum, pageSize, searchKeyword, category) => {
        setIsSpinner(true);

        // /v1/_boards
        // POST
        const url = apiPath.api_admin_boards;
        const data = {
            pageNum: pageNum,
            pageSize: pageSize,
            searchKeyword: searchKeyword,
            boardType: boardType.etc, // 공지사항
            boardCategory: category,
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
        getBoardList(value, pageSize, searchKeyword, categoryState);
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

    const doSearch = () => {
        const inputValue = searchInput.current.value;
        setSearchKeyword(inputValue);

        getBoardList(1, pageSize, inputValue, categoryState);
    };

    return (
        <>
            <Header />
            <div id="subvisual">
                <div className="sub_txt">
                    <h2>{t("media.subvisual.title")}</h2>
                </div>
                <div id="leftmenu">
                    <Link to={routerPath.web_media_news_url} className="active">
                        {t("media.subvisual.subtitle.news")}
                    </Link>
                    <Link to={routerPath.web_media_notice_url}>
                        {t("media.subvisual.subtitle.notice")}
                    </Link>
                </div>
            </div>
            <div id="con_area">
                <div className="medicenter">
                    <div className="top">
                        <h3 className="c_tit">
                            <span>{t("media.news.subtitle")}</span>
                            {t("media.news.title")}
                        </h3>
                        <div className="search_wrap">
                            <div className="search">
                                <input
                                    type="text"
                                    defaultValue={searchKeyword}
                                    ref={searchInput}
                                />
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={doSearch}
                                >
                                    {t("media.search")}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="tab">
                        <Link
                            to=""
                            onClick={() => handleCategory("")}
                            id="전체"
                            className="on"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19" height="19" viewBox="0 0 19 19">
                            <defs>
                                <clipPath id="clip-path">
                                <rect id="사각형_273" data-name="사각형 273" width="19" height="19" transform="translate(0 -0.5)" fill="none" stroke="#888" stroke-width="1"/>
                                </clipPath>
                            </defs>
                            <g id="그룹_346" data-name="그룹 346" transform="translate(0 0.5)">
                                <g id="그룹_345" data-name="그룹 345" clip-path="url(#clip-path)">
                                <path id="패스_2209" data-name="패스 2209" d="M18.379,19.379H1.561A1.562,1.562,0,0,1,0,17.818V1.561A1.562,1.562,0,0,1,1.561,0H18.939a1,1,0,0,1,1,1V17.818A1.562,1.562,0,0,1,18.379,19.379ZM2,17.379H17.939V2H2Z" transform="translate(-0.439 -0.439)" fill="#888"/>
                                <path id="선_82" data-name="선 82" d="M18,1H0V-1H18Z" transform="translate(1 6.5)" fill="#888"/>
                                <path id="선_83" data-name="선 83" d="M18,1H0V-1H18Z" transform="translate(1 12.5)" fill="#888"/>
                                <path id="선_84" data-name="선 84" d="M1,17H-1V0H1Z" transform="translate(7 1.5)" fill="#888"/>
                                </g>
                            </g>
                            </svg>
                            {t("media.news.category.all")}
                        </Link>
                        <Link
                            to=""
                            onClick={() => handleCategory("영상")}
                            id="영상"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="17" viewBox="0 0 23 17">
                            <defs>
                                <clipPath id="clip-path">
                                <rect id="사각형_275" data-name="사각형 275" width="30" height="17" transform="translate(0 -0.11)" fill="none" stroke="#888" stroke-width="1"/>
                                </clipPath>
                            </defs>
                            <g id="그룹_349" data-name="그룹 349" transform="translate(0 0.099)">
                                <g id="그룹_348" data-name="그룹 348" transform="translate(0 0.011)" clip-path="url(#clip-path)">
                                <path id="패스_2210" data-name="패스 2210" d="M1,0H17.252a1,1,0,0,1,1,1v1.95L21.409,1.6a1,1,0,0,1,1.394.919v11.7a1,1,0,0,1-1.394.919l-3.157-1.353V16.6a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0ZM16.252,2H2V15.6H16.252V12.268a1,1,0,0,1,1.394-.919L20.8,12.7V4.033L17.646,5.386a1,1,0,0,1-1.394-.919Z" transform="translate(-0.35 -0.362)" fill="#888"/>
                                </g>
                            </g>
                            </svg>
                            {t("media.news.category.video")}
                        </Link>
                        <Link
                            to=""
                            onClick={() => handleCategory("뉴스")}
                            id="뉴스"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="그룹_352" data-name="그룹 352" width="24" height="20" viewBox="0 0 24 20">
                            <defs>
                                <clipPath id="clip-path">
                                <rect id="사각형_277" data-name="사각형 277" width="24" height="20" fill="none" stroke="#888" stroke-width="1"/>
                                </clipPath>
                            </defs>
                            <g id="그룹_351" data-name="그룹 351" clip-path="url(#clip-path)">
                                <path id="패스_2211" data-name="패스 2211" d="M1,0h9.223A3.041,3.041,0,0,1,13.25,3.048v16.7a1,1,0,0,1-2,0A1.039,1.039,0,0,0,10.223,18.7H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0ZM11.25,16.883V3.048A1.039,1.039,0,0,0,10.223,2H2V16.7h8.223A3,3,0,0,1,11.25,16.883Z" transform="translate(-0.375 -0.571)" fill="#888"/>
                                <path id="패스_2212" data-name="패스 2212" d="M21.027,0H30.25a1,1,0,0,1,1,1V17.7a1,1,0,0,1-1,1H21.027A1.039,1.039,0,0,0,20,19.75a1,1,0,0,1-2,0V3.048A3.041,3.041,0,0,1,21.027,0ZM29.25,2H21.027A1.039,1.039,0,0,0,20,3.048V16.883a3,3,0,0,1,1.027-.181H29.25Z" transform="translate(-7.125 -0.571)" fill="#888"/>
                                <path id="선_85" data-name="선 85" d="M6.184,1H0V-1H6.184Z" transform="translate(3.196 4.239)" fill="#888"/>
                                <path id="선_86" data-name="선 86" d="M6.184,1H0V-1H6.184Z" transform="translate(3.196 7.246)" fill="#888"/>
                                <path id="선_87" data-name="선 87" d="M6.184,1H0V-1H6.184Z" transform="translate(3.196 10.253)" fill="#888"/>
                                <path id="선_88" data-name="선 88" d="M6.184,1H0V-1H6.184Z" transform="translate(3.196 13.261)" fill="#888"/>
                                <path id="선_89" data-name="선 89" d="M6.184,1H0V-1H6.184Z" transform="translate(14.37 4.239)" fill="#888"/>
                                <path id="선_90" data-name="선 90" d="M6.184,1H0V-1H6.184Z" transform="translate(14.37 7.246)" fill="#888"/>
                                <path id="선_91" data-name="선 91" d="M6.184,1H0V-1H6.184Z" transform="translate(14.37 10.253)" fill="#888"/>
                                <path id="선_92" data-name="선 92" d="M6.184,1H0V-1H6.184Z" transform="translate(14.37 13.261)" fill="#888"/>
                            </g>
                            </svg>
                            {t("media.news.category.news")}
                        </Link>
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
                                        <Link
                                            to={`${routerPath.web_media_news_detail_url}${item.boardIdx}`}
                                        >
                                            {item.subTitle === "뉴스"
                                                ? isHaveImg(item.content) && (
                                                      <div className="imgwrap">
                                                          <img
                                                              src={isHaveImg(
                                                                  item.content,
                                                              )}
                                                              alt={item.subject}
                                                          ></img>
                                                      </div>
                                                  )
                                                : CommonGetYoutubeThumbnailUrl(
                                                      item.email,
                                                  ) && (
                                                      <div className="imgwrap">
                                                          <img
                                                              src={CommonGetYoutubeThumbnailUrl(
                                                                  item.email,
                                                              )}
                                                              alt={item.subject}
                                                          ></img>
                                                      </div>
                                                  )}

                                            <div className="txtwrap">
                                                <p className="name">
                                                    {item.subject.replaceAll(
                                                        "&amp;",
                                                        "&",
                                                    )}
                                                </p>
                                                <Link
                                                    to={`${routerPath.web_media_news_detail_url}${item.boardIdx}`}
                                                    className="btn_main"
                                                >
                                                    {t("media.view_more")}{" "}
                                                    <Arrow />
                                                </Link>
                                            </div>
                                        </Link>
                                    </div>
                                </figure>
                            ))}
                        {/*반복 끝*/}
                    </div>

                    {Object.keys(pageInfo).length !== 0 &&
                        pageInfo.total !== 0 && (
                            <div className="pagenation">
                                <Pagination
                                    count={pageInfo.pages}
                                    onChange={handleChange}
                                    shape="rounded"
                                    color="primary"
                                />
                            </div>
                        )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MediaNews;
