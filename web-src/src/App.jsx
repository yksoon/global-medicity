import React, { useEffect } from "react";
import { RestServer } from "etc/lib/CommonRestAPI";
import axios from "axios";
import Router from "Router";
import { useLocation, useNavigate } from "react-router";
import { ConfirmContextProvider } from "etc/lib/context/ContextProvider";
import { AlertContextProvider } from "etc/lib/context/ContextProvider";
import ConfirmModal from "etc/lib/commonNoti/ConfirmModal";
import AlertModal from "etc/lib/commonNoti/AlertModal";
import {
    useRecoilState,
    useRecoilValue,
    useResetRecoilState,
    useSetRecoilState,
} from "recoil";
import {
    codesAtom,
    countryBankAtom,
    ipInfoAtom,
    resultCodeAtom,
    userInfoAtom,
    userTokenAtom,
} from "etc/lib/recoils/atoms";
import Aos from "aos";
import { registration_idx } from "etc/lib/static";
import {CommonNotify} from "etc/lib/Common";
import { successCode } from "etc/lib/resultCode";
import apiPath from "etc/lib/path/apiPath";

let currentPath = "";
function App() {
    useEffect(() => {
        Aos.init();
    });
    // let ipInfo = useSelector((state) => state.ipInfo.ipInfo);
    const [ipInfo, setIpInfo] = useRecoilState(ipInfoAtom);

    // const ipInfo = useRecoilValue(ipInfoAtom);
    // const setIpInfo = useSetRecoilState(ipInfoAtom);

    const navigate = useNavigate();
    const location = useLocation();

    const resetUserInfo = useResetRecoilState(userInfoAtom);
    const resetUserToken = useResetRecoilState(userTokenAtom);

    const userToken = useRecoilValue(userTokenAtom);
    // const userToken = useSelector((state) => state.userInfo.userToken);
    // const userInfo = useSelector((state) => state.userInfo.userInfo);

    const setResultCode = useSetRecoilState(resultCodeAtom);
    const setCodes = useSetRecoilState(codesAtom);
    const codes = useRecoilValue(codesAtom)
    const setCountryBank = useSetRecoilState(countryBankAtom);

    useEffect(() => {
        if (ipInfo === "") {
            getIpInfo();
        } else {
            // socketCon()
            // getResultCode();
            getCodes();
            // setInterval(getResultCode, 3600000);
            // setInterval(getCodes, 3600000);
        }
    }, []);

    // 사전등록 페이지 벗어날 시 로그아웃처리
    useEffect(() => {
        const pathname = location.pathname;

        if (pathname !== "/signup_mod" && userToken === " ") {
            RestServer("post", apiPath.api_auth_signout, {})
                .then((response) => {
                    if (response.data.resultInfo === true) {
                        // dispatch(init_user_info(null));
                        resetUserInfo();
                        resetUserToken();
                    } else {
                        // dispatch(init_user_info(null));
                        resetUserInfo();
                        resetUserToken();
                    }
                })
                .catch((error) => {
                    // 오류발생시 실행
                    // console.log(decodeURI(error));
                    // dispatch(init_user_info(null));
                    resetUserInfo();
                    resetUserToken();
                });
        }
    }, [location]);

    // Spinner
    // const spinnerOption = useSelector((state) => state.common_old.spinner);

    // IP
    const getIpInfo = async () => {
        let ip;

        await axios
            .get("https://geolocation-db.com/json/")
            .then((res) => {
                ip = res.data.IPv4;
                setIpInfo(ip);
                sessionStorage.setItem("ipInfo", ip);

                // console.log("@@@@@@@@@@@", ip);
                getResultCode();
                getCodes();
                setInterval(getResultCode, 3600000);
                setInterval(getCodes, 3600000);

                // callback(ip);
                // dispatch(set_ip_info(ip));
            })
            .catch((error) => {
                ip = "";
                setIpInfo(ip);
                sessionStorage.setItem("ipInfo", ip);
                // callback(ip);
                // dispatch(set_ip_info(ip));
            });

        return ip;
    };

    // result code
    const getResultCode = () => {
        RestServer("get", apiPath.api_result, {})
            .then((response) => {
                // console.log("result_code", response);

                setResultCode(response.data.result_info);
                // dispatch(
                //     set_result_code(JSON.stringify(response.data.result_info))
                // );
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    // codes
    const getCodes = () => {
        RestServer("post", apiPath.api_codes, {
            code_types: [],
            exclude_code_types: [
                // "INTER_PHONE_TYPE",
                // "BANK_TYPE",
                // "LANGUAGE_TYPE",
                // "CURRENCY_TYPE",
            ],
        })
            .then((response) => {
                // console.log("codes", response);

                // dispatch(set_codes(JSON.stringify(response.data.result_info)));
                // setCodes(response.data.result_info);

                const codesObject = convertCodesData(response.data.resultInfo)
                // console.log(codesObject)
                setCodes(codesObject)

                // 추출할 코드 유형들
                const targetCodeTypes = [
                    "INTER_PHONE_TYPE",
                    "BANK_TYPE",
                    "LANGUAGE_TYPE",
                    "CURRENCY_TYPE",
                ];

                const targetCodes = extractDataByCodeTypes(response.data.resultInfo, targetCodeTypes)
                // console.log(targetCodes)
                setCountryBank(targetCodes);
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    /**
     * 데이터를 가공하여 React에서 사용할 수 있는 형식으로 변환하는 함수
     * @param dataArray
     * @returns {{}}
     */
    const convertCodesData = (dataArray) => {
        // 코드 유형별로 코드 데이터를 담을 객체 생성
        const codeObjects = {};

        // 배열 데이터를 순회하며 코드 유형별로 데이터를 그룹화
        dataArray.forEach(item => {
            const { codeType, codeKey, codeName, codeValue, codeParentKey } = item;

            // 코드 유형이 이미 객체에 있는지 확인하고 없으면 빈 배열을 초기값으로 설정
            if (!codeObjects[codeType]) {
                codeObjects[codeType] = [];
            }

            // 해당 코드 유형의 배열에 코드 데이터 추가
            codeObjects[codeType].push({
                codeType,
                codeKey,
                codeName,
                codeValue,
                codeParentKey
            });
        });

        return codeObjects;
    };

    /**
     * 주어진 코드 유형들에 해당하는 데이터만 추출하는 함수
     * @param dataArray
     * @param codeTypes
     * @returns {{}}
     */
    const extractDataByCodeTypes = (dataArray, codeTypes) => {
        // 주어진 함수를 통해 데이터를 그룹화
        const groupedData = convertCodesData(dataArray);

        // 추출된 데이터를 담을 객체
        const extractedData = {};

        // 주어진 코드 유형 배열을 순회하며 해당 코드 유형에 해당하는 데이터를 추출하여 새로운 객체에 추가
        codeTypes.forEach(codeType => {
            if (groupedData[codeType]) {
                extractedData[codeType] = groupedData[codeType];
            }
        });

        return extractedData;
    };

    /**
     * web socket connection
     */
    const socketCon = () => {
        const protocol = document.location.protocol
        // 서버와의 WebSocket 연결
        const socket = new WebSocket(`${protocol === "http:" ? "ws" : "wss"}://websocket.hicompint.com/moye_dev`);

        socket.onopen = function() {
            console.log('WebSocket connected');
        };

        socket.onclose = function() {
            console.log('WebSocket disconnected');
        };

        // 서버로부터 데이터를 수신하는 함수
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('Received message:', message);
            // window.alert("안녕!");

            const convertData = convertCodesData(message)

            setCodes(mergeData(codes, convertData))
        };
    }


    // 두 데이터를 비교하여 key가 같으면 value를 교체하고, 없으면 새로 추가하는 함수
    const mergeData = (data1, data2) => {
        // 결과를 담을 객체
        const mergedData = {};

        // 첫 번째 데이터의 모든 항목을 복사하여 결과 객체에 추가
        Object.keys(data1).forEach(key => {
            mergedData[key] = data1[key];
        });

        // 두 번째 데이터의 각 항목을 순회하면서 처리
        Object.keys(data2).forEach(key => {
            // 결과 객체에 해당 key가 이미 있는지 확인
            if (mergedData[key]) {
                // 이미 있는 경우, 해당 key의 값을 두 번째 데이터의 값으로 교체
                mergedData[key] = data2[key];
            } else {
                // 없는 경우, 새로운 key를 추가하고 값으로 빈 배열을 할당
                mergedData[key] = data2[key];
            }
        });

        return mergedData;
    };

    return (
        <>
            <div className="wrapper">
                <ConfirmContextProvider>
                    <AlertContextProvider>
                        <Router />
                        <AlertModal />
                        <ConfirmModal />
                    </AlertContextProvider>
                </ConfirmContextProvider>
                {/* {isSpinner && <CommonSpinner />} */}
            </div>
            {/* <div>{spinnerOption.isLoading && <CommonSpinner />}</div> */}
        </>
    );
}

export default App;
