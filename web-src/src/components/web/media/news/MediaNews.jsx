import React from 'react';
import Header from "components/web/common/header";

const MediaNews = () => {
    return (
        <>
        <Header />
        <div id="subvisual">
                <div className="sub_txt">
                    <h2>MEDIA CENTER</h2>
                </div>
                <div id="leftmenu">
                    <a href="#sec01" className="active">NEWS</a>
                    <a href="#sec02">공지사항</a>
                </div>
            </div>
            <div id="con_area">
                <div className="medicenter">
                        <h3 className="c_tit">
                            <span>메디씨티의 소식을 전합니다</span>
                            NEWS
                        </h3>
                    <div className="boxwrap" >
                        <div className="box">
                            <a href="">
                                <span><img src="img/web/sub/news_test.jpg" alt="테스트"></img></span>
                                <p className="name">제1회 메디씨티 쇼케이스 (인니) 현장스케치</p>
                                <a href="" className="btn_main">VIEW MORE</a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            </>
    );
};

export default MediaNews;
