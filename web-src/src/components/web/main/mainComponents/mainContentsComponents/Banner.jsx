import React from "react";
import $ from "jquery";


const Banner = () => {

    $(".btm_banner_cont").hide();
    const bannerOpen = () => {
        $(".btm_banner_cont").slideToggle();
        if($(".btm_banner").hasClass('close')){
            $(".click").children('img').attr('src', 'img/web/main/banner_click.png');
            $('.btm_banner').removeClass('close');
        }else{
            $(".click").children('img').attr('src', 'img/web/main/banner_close.png');
            $('.btm_banner').addClass('close');
        }
    };
    const bannerOpenMobile = () => {
        if($(".btm_banner_m").hasClass('close')){
            $(".btm_banner_cont_m").css({'width':'100%','height':'100vh'});
            $('.btm_banner_m').removeClass('close');
        }else{
            $(".btm_banner_cont_m").css({'width':'0','height':'0'});
            $('.btm_banner_m').addClass('close');
        }
    };

    return (
        <>
            <div className="btm_banner_wrap_pc" id="btm_banner" onClick={(e) => bannerOpen(e)}>
                <div>
                    <div className="btm_banner"><img src="img/web/main/btm_banner.png" alt="" />
                        <span className="click"><img src="img/web/main/banner_click.png" alt="" /></span>
                    </div>
                </div>
                <div className="btm_banner_cont">
                    <span><img src="img/web/main/banner_open_.png" alt="" /></span>
                </div>
            </div>

            <div className="btm_banner_wrap_m" onClick={(e) => bannerOpenMobile(e)}>
                <div className="btm_banner_m"><img src="img/web/main/btm_banner_mo.png" alt="" /></div>
                <div className="btm_banner_cont_m">
                    <span><img src="img/web/main/banner_open_m_.png" alt="" /></span>
                </div>
            </div>
        </>
    );
};

export default Banner;
