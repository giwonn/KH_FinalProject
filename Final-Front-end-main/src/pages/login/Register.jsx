 import React, { useState } from 'react';
import { useHistory } from 'react-router';
 import userService from '../../services/userService';

 const Register = ({email,logout}) => {
    const history = useHistory();
    const [nickName, setNickName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
    const [intro, setIntro] = useState("");
    const [location, setLocation] = useState("");

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
        
        if(phoneCheck(phoneNumber)){
            //console.log(nickName, phoneNumber,intro, location,email);
            const data = {
                email,
                nickName,
                phoneNumber,
                location,
                intro,
            }
        
            const res = await userService.memberInsert(data);
            //console.log(res);
            logout();
            history.push("/");
        }else{
            console.log("전화번호 양식이 틀렷습니다.");
            setPhoneNumber("");
            setErrorPhoneNumber(true);
        }

        
    }

    return(
        <>
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 className="text-xl font-semibold">안녕하세요 SWith에 오신걸 환영해요! 👋, <span className="font-normal"> 당신의 정보를 작성해 주세요</span></h1>
                    <div className="mt-6">
                        <label htmlFor="nickName" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">닉네임</label>
                        <input type="text" name="nickName" placeholder="닉네임을 작성해주세요"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={nickName} onChange={onChangeNickName}/>
                        
                        <label htmlFor="phoneNumber" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">핸드폰번호</label>
                        <input type="text" name="phoneNumber" placeholder="- 없이 작성해 주세요"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={phoneNumber} onChange={onChangePhoneNumber}/>
                        <br/>
                        {errorPhoneNumber&&<p className="text-red-600">전화번호 입력이 잘못되었습니다!</p>}
                        
                        <label htmlFor="location" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">지역</label>
                        <input  type="text" name="location" placeholder="거주지역을 작성해 주세요"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={location} onChange={onChangeLocation}/>
                        
                        <label htmlFor="intro" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">자기소개</label>
                        <input type="text" name="intro" placeholder="자기소개해주세요"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required value={intro} onChange={onChangeIntro} />
                        
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none" onClick={Regist}>
                            가입하기
                        </button>

                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none" onClick={logout}>
                            취소하기
                        </button>
                    </div>
                </div>
            </div>

            {/* <div>
                <label htmlFor="user-nick">닉네임</label><br/>
                <input name="nickName" value={nickName} required onChange={onChangeNickName} />
            </div>
            <div>
                <label htmlFor="user-phoneNum">핸드폰번호</label><br/>
                <input name="phoneNumber" value={phoneNumber} required onChange={onChangePhoneNumber} />
                {errorPhoneNumber&&<p>전화번호 입력이 잘못되었습니다!</p>}
            </div>
            <div>
                <label htmlFor="user-intro">자기소개</label><br/>
                <textarea rows="5" cols="40" name="intro" value={intro} onChange={onChangeIntro} />
            </div>
            <div>
                <label htmlFor="user-intro">지역</label><br/>
                <input name="location" value={location} onChange={onChangeLocation} />
            </div>
            <div>
                <button onClick={Regist}>가입하기</button>
            </div>      */}
        </>
    )
 }

 export default Register;