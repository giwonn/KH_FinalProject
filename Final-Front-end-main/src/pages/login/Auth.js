import userService from "../../services/userService";

export async function signIn(email){
    

    // 임시 코드
    if(email == "pass"){
        return email;
    }
    //console.log("진행중");

    const signUser = await userService.memberCheck({email})

    //console.log("받아온데이터의 값 : " + signUser.data);
    // 했을경우 =>  AAAAAAA@naver.com
    // 안했을 경우 => NotUser를 날려준다.
    return signUser.data;
}

export async function premium(email) {

    const premiumCheck = await userService.premiumCheck({email});
    console.log("premiumCheck", premiumCheck.data);
    return premiumCheck.data;
}