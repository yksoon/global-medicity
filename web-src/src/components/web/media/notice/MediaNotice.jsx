import React from 'react';
import Header from "components/web/common/header";
import Footer from "components/web/common/footer";
import Arrow from "components/web/common/Arrow";

const MediaNotice = () => {
    return (
        <>
        <Header />
        <div id="subvisual">
                <div className="sub_txt">
                    <h2>MEDIA CENTER</h2>
                </div>
                <div id="leftmenu">
                    <a href="#sec01">NEWS</a>
                    <a href="#sec02" className="active">공지사항</a>
                </div>
            </div>
            <div id="con_area">
               <div className="notice">
                    <h3 className="c_tit">
                            <span>공지사항</span>
                            NOTICE
                    </h3>
                    {/*반복 시작*/}
                    <div className="list_box">
                        <div className="txt_wrap">
                            <h5>글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범 글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범 글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범</h5>
                            <p>글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고</p>
                        </div>
                        <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                    </div>
                    {/*반복 끝*/}
                    <div className="list_box">
                        <div className="txt_wrap">
                            <h5>글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범 글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범 글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범</h5>
                            <p>글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고</p>
                        </div>
                        <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                    </div>
                    <div className="list_box">
                        <div className="txt_wrap">
                            <h5>글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범 글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범 글로벌 의료통합 서비스 플랫폼 ‘메디씨티’ 출범</h5>
                            <p>글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고글로벌 의료통합 서비스 플랫폼 기업 (주)메디씨티가 본격적인 행보를 나선다. (주)메디씨티가 강릉 세인트존스 호텔에서 지난 11일과 12일 양일간 ‘제1회 메디씨티데이’를 개최하고</p>
                        </div>
                        <a href="" className="btn_main">VIEW MORE  <Arrow /></a>
                    </div>
               </div>
            </div>
        <Footer /> 
        </>
    );
};

export default MediaNotice;
