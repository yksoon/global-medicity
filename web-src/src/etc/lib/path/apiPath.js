/**
 * API PATH
 * 프로젝트 세팅시 ENV PREFIX 변경
 */

const gateway = import.meta.env.VITE_API_GATEWAY
const prefix = import.meta.env.VITE_API_PREFIX
const version = "v1"
const base_api_url = `${gateway}/${prefix}/${version}`;

// api list
const apiPath = {

    // ------------------ Information ------------------
    // /v1/_codes
    // POST
    // 공통 코드
    api_codes: `${base_api_url}/_codes`,
    // api_codes: `${slash + version + slash}_codes`,

    // /v1/info/result
    // GET
    // 공통 코드
    api_result: `${base_api_url}/info/result`,
    // api_result: `${slash + version + slash}info/result`,

    // /v1/_file/000/
    // GET
    // 파일 다운로드
    api_file: `${base_api_url}/_file/000/`,
};

export default apiPath