import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import routerPath from "etc/lib/path/routerPath";

import NotFoundPage from "NotFoundPage";
import Admin from "components/admin/Admin";
import SignIn from "components/admin/signin/SignIn";
import MainPopupModal from "components/web/main/mainComponents/mainContentsComponents/modal/MainPopupModal";
import InfoWelcome from "components/web/infos/welcome/InfoWelcome";
import InfoCompany from "components/web/infos/company/InfoCompany";
import InfoCertification from "components/web/infos/certification/InfoCertification";
import InfoPartners from "components/web/infos/partners/InfoPartners";
import KmediIntro from "components/web/kmedi/intro/KmediIntro";
import KmediApp from "components/web/kmedi/app/KmediApp";
import BusinessHotel from "components/web/business/hotel/BusinessHotel";
import BusinessTax from "components/web/business/tax/BusinessTax";
import BusinessArt from "components/web/business/art/BusinessArt";
import MediaVideo from "components/web/media/video/MediaVideo";
import MediaNews from "components/web/media/news/MediaNews";
import MediaNotice from "components/web/media/notice/MediaNotice";
import MediaNewsDetail from "components/web/media/news/MediaNewsDetail";


// Router
const Router = () => {
    // 레이지 로딩 추가
    const Main = React.lazy(() => import("components/web/Main"));

    // 페이지 url 라우팅 추가 필요시 아래에 추가하세요
    return (
        <>
            {/* Route 밖에 Suspense로 감싼다 */}
            <Suspense
                fallback={
                    <Backdrop
                        sx={{
                            color: "#fff",
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={true}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                }
            >
                <Routes>
                    {/* /link를 입력하면 LinkPage 오픈 */}
                    {/* -------------------------------------------------------------- */}
                    {/* |                      web                                    | */}
                    {/* -------------------------------------------------------------- */}
                    {/* 메인 */}
                    {/* URL : / */}
                    <Route path={routerPath.web_main_url} element={<Main />} />

                    {/*--------------------- infos ----------------------*/}
                    {/* 인포 - 인사말 */}
                    {/* URL : /info/welcome */}
                    <Route path={routerPath.web_info_greet_url} element={<InfoWelcome />} />

                    {/* 인포 - 회사소개 */}
                    {/* URL : /info/company */}
                    <Route path={routerPath.web_info_company_url} element={<InfoCompany />} />

                    {/* 인포 - 인증현황 */}
                    {/* URL : /info/certification */}
                    <Route path={routerPath.web_info_certification_url} element={<InfoCertification />} />

                    {/* 인포 - 파트너 */}
                    {/* URL : /info/partners */}
                    <Route path={routerPath.web_info_partners_url} element={<InfoPartners />} />

                    {/*--------------------- K-MEDI ----------------------*/}
                    {/* K-MEDI - 소개 */}
                    {/* URL : /kmedi/intro */}
                    <Route path={routerPath.web_kmedi_intro_url} element={<KmediIntro />} />

                    {/* K-MEDI - 앱 */}
                    {/* URL : /kmedi/app */}
                    <Route path={routerPath.web_kmedi_app_url} element={<KmediApp />} />

                    {/*--------------------- BUSINESS ----------------------*/}
                    {/* 비즈니스 - 호텔 */}
                    {/* URL : /business/hotel */}
                    <Route path={routerPath.web_business_hotel_url} element={<BusinessHotel />} />

                    {/* 비즈니스 - tax */}
                    {/* URL : /business/tax */}
                    <Route path={routerPath.web_business_tax_url} element={<BusinessTax />} />

                    {/* 비즈니스 - art */}
                    {/* URL : /business/art */}
                    <Route path={routerPath.web_business_art_url} element={<BusinessArt />} />

                    {/*--------------------- MEDIA ----------------------*/}
                    {/* 미디어 - 영상 */}
                    {/* URL : /media/video */}
                    <Route path={routerPath.web_media_video_url} element={<MediaVideo />} />

                    {/* 미디어 - 뉴스 */}
                    {/* URL : /media/news */}
                    <Route path={routerPath.web_media_news_url} element={<MediaNews />} />

                    {/* 미디어 - 뉴스 - 상세 */}
                    {/* URL : /media/news/{boardIdx} */}
                    <Route path={`${routerPath.web_media_news_detail_url}:boardIdx`} element={<MediaNewsDetail />} />

                    {/* 미디어 - 공지 */}
                    {/* URL : /media/notice */}
                    <Route path={routerPath.web_media_notice_url} element={<MediaNotice />} />

                    {/*/!* 메인 팝업 *!/*/}
                    {/*/!* URL : /popup/:id *!/*/}
                    {/*<Route*/}
                    {/*    path={routerPath.web_popup_url + ":id"}*/}
                    {/*    element={<MainPopupModal />}*/}
                    {/*/>*/}

                    {/* -------------------------------admin------------------------------- */}
                    {/* 메인 */}
                    {/* URL : /admin */}
                    <Route
                        path={routerPath.admin_main_url}
                        element={<Admin />}
                    />

                    {/* 로그인 */}
                    {/* URL : /admin/signin */}
                    <Route
                        path={routerPath.admin_signin_url}
                        element={<SignIn />}
                    />

                    {/* 404 */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default Router;
