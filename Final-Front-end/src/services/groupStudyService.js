import ApiService from "./.apiservice";

const groupStudyService = () => {

};

groupStudyService.getRole = (email, studyId) => {
    const data = {
        email,
        studyId,
    }

    return ApiService.post("/groupstudy/groupStudySelectRole.do",data);
}

// 인트로 정보를 가지고 온다.
groupStudyService.getStudyIntro = (studyId) => {
    
    return ApiService.post("studyIntroduceSelectOne.do",studyId);
}

// 멤버리스트에대한 정보를 가지고 온다.
groupStudyService.getStudyMemberList = (studyId) => {
    const data = {
        studyId
    }

    return ApiService.post("/groupstudy/groupStudygetList.do",data);
}

// 가입신청
groupStudyService.postStudySignIn = (email,studyId) => {
    const data = {
        email,
        studyId
    }
    console.log("서비스작동",data);
    return  ApiService.post("/groupstudy/groupStudySignIn.do",data);
}

// 가입취소
groupStudyService.postStudySignOut = (email,studyId) => {
    const data = {
        email,
        studyId
    }
    return  ApiService.post("/groupstudy/groupStudySignOut.do",data);;
}

// waiting list 출력
groupStudyService.getStudyWaitingMemberList = (studyId) => {
    const data = {
        studyId
    }

    return ApiService.post("/groupstudy/groupStudyWaitingList.do",data);
}

// 가입승인
groupStudyService.groupStudyJoin = (email,studyId) => {
    const data = {
        email,
        studyId
    }
    return  ApiService.post("/groupstudy/groupStudyJoin.do",data);;
}

export default groupStudyService;