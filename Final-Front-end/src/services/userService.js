import ApiService from "./.apiservice";

const userService = () => {

};

userService.memberCheck = (data) => {
    return ApiService.post("MemberCheck.do", data);
};

userService.memberInsert = (data) => {
    return ApiService.post("MemberInsert.do", data);
}

userService.premiumCheck = (data) => {
    return ApiService.post("/payment/premiumCheck.do?email="+data.email);
}

userService.profileSelect = (email) => {
    const data = {
        email
    }
    return ApiService.post("profileSelect.do", data);
}

userService.profileUpdate = (data) => {
    return ApiService.post("profileUpdate.do", data);
}

export default userService;