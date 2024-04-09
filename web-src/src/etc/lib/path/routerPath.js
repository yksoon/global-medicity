// 기본 url
const base_url = "/";

// 콜론, slash
const colon = ":";
const slash = "/";

// const base_api_url = protocol + host + colon + port;
// const base_api_url = process.env.REACT_APP_DB_HOST;
// const base_api_url = "http://localhost:3005";
// "proxy": "http://jejujobara.com:60000"

// admin
const admin = "admin";

// route
const routerPath = {
    // ---------------------- web -------------------------
    // 메인
    // /
    web_main_url: `${base_url}`,

    // 메인 팝업
    // /popup/:id
    web_popup_url: `${base_url}popup${slash}`,

    // 프로그램
    // /program
    web_program_url: `${base_url}program`,

    // 가이드라인
    // /participation/guideline
    web_participation_guideline_url: `${base_url}participation/guideline`,

    // 사전등록
    // /signup/signup
    web_signup_signup_url: `${base_url}signup/signup`,

    // 사전등록 참가자 확인
    // /signup/check_entry
    web_signup_check_entry_url: `${base_url}signup/check-entry`,

    // 사전등록 확인
    // /signup/confirmation
    web_signup_confirmation_url: `${base_url}signup/confirmation`,

    // 아트버디 - 갤러리 리스트
    // /artbuddy/gallery-list
    web_artbuddy_gallery_list_url: `${base_url}artbuddy/gallery-list`,

    // 아트버디 - 아티스트 리스트
    // /artbuddy/artist-list
    web_artbuddy_artist_list_url: `${base_url}artbuddy/artist-list`,

    // 아트버디 - 갤러리 상세
    // /artbuddy/gallery
    web_artbuddy_gallery_url: `${base_url}artbuddy/gallery${slash}`,

    // 아트버디 - 아티스트 상세
    // /artbuddy/artist/
    web_artbuddy_artist_detail_url: `${base_url}artbuddy/artist${slash}`,

    // 아트버디 - 소개
    // /artbuddy/exhibition
    web_artbuddy_exhibition_url: `${base_url}artbuddy/exhibition`,

    // 사전등록 - 인도네시아
    // /local/signup
    web_local_signup_url: `${base_url}local/signup`,

    // 사전등록 참가자 확인 - 인도네시아
    // /local/check_entry
    web_local_check_entry_url: `${base_url}local/check-entry`,

    // 사전등록 확인 - 인도네시아
    // /local/confirmation
    web_local_confirmation_url: `${base_url}local/confirmation`,

    // 가이드라인 - 인도네시아
    // /local/guideline
    web_local_guideline_url: `${base_url}local/guideline`,

    // 방명록
    // /guest_book
    web_guest_book_url: `${base_url}guest-book`,

    // ---------------------- admin -------------------------
    // 메인
    // /admin
    admin_main_url: `${base_url + admin}`,

    // 로그인
    // /admin/signin
    admin_signin_url: `${base_url + admin + slash}signin${slash}`,
};

export default routerPath