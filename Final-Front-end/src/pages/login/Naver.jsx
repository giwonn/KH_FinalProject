import React,{ useEffect } from "react";

import "./login.css"; // 일단 이렇게 넣었심다 

const Naver = ({signUserIn}) => {
    useEffect(() => {
        // 네이버 헤더 sdk 추가
        const naverScript = document.createElement("script");
        naverScript.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
        document.head.appendChild(naverScript);

        // Naver Script 로드시에
        naverScript.onload = () => {
            const naverLogin = new window.naver.LoginWithNaverId({
                clientId : "uBhSLeIhOd_5giBX121t", // 내 네이버 아이디 쓸것
                callbackUrl : "http://qclass.iptime.org:3000", // 로그인 성공 이후 URL
                callbackHandle : true,
                isPopup : false , // 팝업 여부
                loginButton : {color : "green", type : 3, height : 60 },
            });
            

            naverLogin.init();
            naverLogin.logout(); //네이버 로그인이 계속 유지될 경우 , 초기화시 로그아웃
            naverLogin.getLoginStatus((status) => {
                if(status){
                    //console.log("Naver 로그인 상태" , naverLogin.user.email);
                    signUserIn(naverLogin.user.email);
                    //const {id, email, gender} = naverLogin.user;

                    // // 필수 제공 동의 조건
                    // if(email == undefined){
                    //     alert("이메일은 필수 동의입니다. 정보제공을 동의해주세요");
                    //     naverLogin.reprompt();
                    //     return;
                    // }
                }else {
                    console.log("비로그인 상태");
                }
            });
        };
    });
    return (<div id="naverIdLogin"></div>);
}

export default Naver;