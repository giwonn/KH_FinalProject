import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import userService from '../../services/userService';

const MyProfile = () => {
    const email = window.localStorage.getItem("email");
    const history = useHistory();
    const [nickName, setNickName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
    const [intro, setIntro] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
           (async () => {
            const getData = await userService.profileSelect(email);
            if(getData.data){
                setNickName(getData.data[0]?.nickName);
                setPhoneNumber(getData.data[0]?.phoneNumber);
                setLocation(getData.data[0]?.location);
                setIntro(getData.data[0]?.intro);
                setLoading(false);
            }
        })();
    }
    return () => {
        if (loading) {
            setLoading(false);
        }
    };
}, [loading]);



    const onChangeNickName = (e) => {
        setNickName(e.target.value);
        //console.log(nickName);
    }

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
        //console.log(phoneNumber);
    }

    const onChangeIntro = (e) => {
        setIntro(e.target.value);
        //console.log(nickName);
    }

    const onChangeLocation = (e) => {
        setLocation(e.target.value);
        //console.log(location);
    }

    const Regist = async () => {

        const phoneCheck = (value) => {
            const regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
            return regExp.test(value);
        }

        if (phoneCheck(phoneNumber)) {
            //console.log(nickName, phoneNumber, intro, location, email);
            const data = {
                email,
                nickName,
                phoneNumber,
                location,
                intro,
            }

            const res = await userService.profileUpdate(data);
            // console.log("data",res.data);
            // console.log(typeof (res.data));
            // console.log(res);
            if (res.data) {
                alert("수정이 완료되었습니다.")
                history.push("/");
            } else {
                alert("수정에 실패했습니다.");
                history.push("/myprofile")
            }

        } else {
            setPhoneNumber("");
            setErrorPhoneNumber(true);
        }
    }

    const Checkout = () => {
        if(confirm('정말로 탈퇴하시겠습니까? ㅜㅜ')){
            alert("탈퇴되었습니다.")
            history.push("../")
        } else {

        }
    }

    return (
        <>
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 className="text-xl font-semibold">내 프로필 수정하기 👋<br /> <span className="font-normal"> 수정할 부분을 작성해 주세요</span></h1>
                    <div className="mt-6">
                        <label htmlFor="nickName" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">닉네임</label>
                        <input type="text" name="nickName" placeholder="닉네임을 작성해주세요" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={nickName} onChange={onChangeNickName} />

                        <label htmlFor="phoneNumber" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">핸드폰번호</label>
                        <input type="text" name="phoneNumber" placeholder="- 없이 작성해 주세요" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={phoneNumber} onChange={onChangePhoneNumber} />
                        <br />
                        {errorPhoneNumber && <p className="text-red-600">전화번호 입력이 잘못되었습니다!</p>}

                        <label htmlFor="location" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">지역</label>
                        <input type="text" name="location" placeholder="거주지역을 작성해 주세요" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={location} onChange={onChangeLocation} />

                        <label htmlFor="intro" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">자기소개</label>
                        <input type="text" name="intro" placeholder="자기소개해주세요" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={intro} onChange={onChangeIntro} />

                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none" onClick={Regist}>
                            수정하기
                        </button>
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-red-600 shadow-lg focus:outline-none hover:bg-red-600 hover:shadow-none" onClick={Checkout}>
                            SWith 탈퇴하기
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}




export default MyProfile;