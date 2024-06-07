import React from 'react';
import Header from "components/web/common/header";
import Footer from "components/web/common/footer";
import Arrow from "components/web/common/Arrow";


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
                    <div className="top">
                        <h3 className="c_tit">
                            <span>메디씨티의 소식을 전합니다</span>
                            NEWS
                        </h3>
                        <div className="tab">
                            <a href="" className="on">전체보기</a>
                            <a href="">영상콘텐츠</a>
                            <a href="">NEWS</a>
                        </div>
                    </div>
                    <div className="boxwrap" >
                        {/*반복 시작*/}
                        <figure>
                            <a href="" className="box">
                                <div className="imgwrap"><img src="img/web/sub/news_test.jpg" alt="테스트"></img></div>
                                <div className="txtwrap">
                                    <p className="name">제1회 메디씨티 쇼케이스 (인니) 현장스케치제1회 메디씨티 쇼케이스 (인니) 현장스케치제1회 메디씨티 쇼케이스 (인니) 현장스케치</p>
                                    <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                                </div>
                            </a>
                        </figure>
                        {/*반복 끝*/}
                        <figure>
                            <a href="" className="box">
                                <div className="imgwrap"><img src="img/web/sub/thumb03.jpg" alt="테스트"></img></div>
                                <div className="txtwrap">
                                    <p className="name">제1회 메디씨티 쇼케이스 (인니) 현장스케치</p>
                                    <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                                </div>
                            </a>
                        </figure>
                        <figure>
                            <a href="" className="box">
                                <div className="imgwrap"><img src="img/web/sub/news_test.jpg" alt="테스트"></img></div>
                                <div className="txtwrap">
                                    <p className="name">제1회 메디씨티 쇼케이스 (인니) 현장스케치</p>
                                    <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                                </div>
                            </a>
                        </figure>
                        <figure>
                            <a href="" className="box">
                                <div className="imgwrap"><img src="img/web/sub/news_test.jpg" alt="테스트"></img></div>
                                <div className="txtwrap">
                                    <p className="name">제1회 메디씨티 쇼케이스 (인니) 현장스케치</p>
                                    <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                                </div>
                            </a>
                        </figure>
                        <figure>
                            <a href="" className="box">
                                <div className="imgwrap"><img src="img/web/sub/news_test.jpg" alt="테스트"></img></div>
                                <div className="txtwrap">
                                    <p className="name">제1회 메디씨티 쇼케이스 (인니) 현장스케치</p>
                                    <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                                </div>
                            </a>
                        </figure>
                        <figure>
                            <a href="" className="box">
                                <div className="imgwrap"><img src="img/web/sub/news_test.jpg" alt="테스트"></img></div>
                                <div className="txtwrap">
                                    <p className="name">제1회 메디씨티 쇼케이스 (인니) 현장스케치</p>
                                    <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                                </div>
                            </a>
                        </figure>

                    </div>
                </div>
            </div>
        <Footer /> 
        </>
    );
};

export default MediaNews;
