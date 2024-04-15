import React, { useEffect, useState } from "react";
import useConfirm from "hook/useConfirm";
import useAlert from "hook/useAlert";
import { CommonErrModule, CommonNotify } from "etc/lib/Common";
import { useSetRecoilState } from "recoil";
import { isSpinnerAtom } from "etc/lib/recoils/atoms";
import { successCode } from "etc/lib/resultCode";
import { Skeleton } from "@mui/material";
import { commaOfNumber } from "etc/lib/Pattern";

const Section01 = (props) => {

    return (
        <>
            <div className="section01">

            </div>
        </>
    );
};

export default Section01;
