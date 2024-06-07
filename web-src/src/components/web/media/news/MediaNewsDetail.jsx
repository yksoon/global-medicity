import React from "react";
import Header from "components/web/common/header";
import Footer from "components/web/common/footer";

const MediaNewsDetail = (props) => {
    return (
        <>
            <Header />
            <div id="subvisual">
                <div className="sub_txt">
                    <h2>MEDIA CENTER</h2>
                </div>
                <div id="leftmenu">
                    <a href="#sec01" className="active">
                        NEWS
                    </a>
                    <a href="#sec02">공지사항</a>
                </div>
            </div>
            <div id="con_area">
                <div className="notice">
                    <table className="board_Vtable">
                        <colgroup>
                            <col width="18%" />
                            <col width="*" />
                            <col width="*" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th colSpan="3">제목</th>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <ul>
                                        <li>2024-00-00 00:00:00</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="filetd">
                                    <ul>
                                        <li className="download_li">
                                            <a
                                                href=""
                                                className="attachment_parent"
                                            >
                                                첨부파일{" "}
                                                <img
                                                    src="img/common/file.svg"
                                                    alt=""
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3">dfsdf</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Previous</td>
                                <td colSpan="2"></td>
                            </tr>
                            <tr>
                                <td>Next</td>
                                <td colSpan="2">
                                    <a href=""></a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="board_btn_wrap">
                        <div className="boardW_btn">
                            <a href="" className="back_btn">
                                List
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MediaNewsDetail;
