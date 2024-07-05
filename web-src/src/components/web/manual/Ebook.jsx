import React from "react";

const Ebook = (props) => {
    /**
     * ebook 히스토리 여기에 지정
     * 240705 - test : /ebook/symposium
     * @returns {{__html: string}}
     */
    const ebookIndex = () => {
        return {
            __html: '<iframe src="/ebook/symposium/index.html" width="100%" height="100%"></iframe>',
        };
    };

    return (
        <>
            <div className="wrapper">
                <div
                    dangerouslySetInnerHTML={ebookIndex()}
                    style={{ height: "100vh" }}
                ></div>
            </div>
        </>
    );
};

export default Ebook;
