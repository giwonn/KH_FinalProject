import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import groupStudyService from "../../services/groupStudyService";
import StudyIntroduce from "../../components/StudyIntroduce/StudyIntroduce";
import CalendarGroup from "../Calendar/CalendarGroup";
import MemberList from "../../components/MemberList/MemberList";
import qs from 'qs';

const GroupStudy = (props) => {
    
    // 1. 이 페이지를 볼때 현재 유저가 그룹에 속해있는지 확인해야됨
    // 2. db에서 조회해서 데이터를 띄어줘야됨

    const [role, setRole] = useState("");
    const email = window.localStorage.getItem("email");
    const studyId = props.location.search.slice(1)

    const StudySignIn = async () => {
      // console.log("가입");
      await groupStudyService.postStudySignIn(email,studyId);
      await groupStudyService.getRole(email,studyId).then(
        (res) => {
          // console.log(res.data);
          setRole(res.data)
        }
      );
    }
    
    const StudySignOut = async () => {
      // console.log("탈퇴");
      await groupStudyService.postStudySignOut(email,studyId);
      await groupStudyService.getRole(email,studyId).then(
        (res) => {
          // console.log(res.data);
          setRole(res.data)
        }
      );
    }

    useEffect(() => {
        (async () => {
            const res = await groupStudyService.getRole(email,studyId);
            setRole(res.data);
        })()
      }, []);
    
    

    // 2. studyid 값으로 들어올때
    // props.location.state.studyId 스터디      => id 값
    // window.localStorage.getItem("email")    => user email값 을 받을 수 있음

    // 2-1. 회원일 경우 작성과 수정이 가능하게 하기
    // 2-2. 관리자일 경우 작성, 수정, 관리버튼 나오게하기
    // 2-3. 비회원일 경우 읽기 전용으로 들어가기, 가입신청하기 버튼 만들기
    // 2-3-1. 비공개일 경우 비공개 페이지입니다. 더이상 가입신청불가능


    return(
      <div className=" bg-blue-200">
        <div className="container mx-auto flex flex-col items-center w-full">
          {/* 관리하기 버튼 */}
          {role==="admin" ? <Link
            to={`/groupstudyedit/${studyId}`}
            className="inline-block px-6 py-2 font-medium leading-7 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
            관리하기
          </Link>: ""}


            {/* 가입신청하기 버튼 */}
           {role==="" ? <button
            className="inline-block px-6 py-2 font-medium leading-7 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
            onClick={StudySignIn}
          >
            가입신청하기
          </button>: ""}
          
            {/* 가입신청 취소하기 버튼 */}
          {role ==="waiting" ? <button
            className="inline-block px-6 py-2 font-medium leading-7 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
            onClick={StudySignOut}
          >
            가입신청취소하기
          </button> : ""}



            {/* 회원일 경우 어서오세요 나오게하기 */}
            {role==="user" ? <h1>어서오세요</h1> : ""}
          <div className="shadow-lg w-9/12 p-4 flex flex-col bg-white rounded-lg">
              <StudyIntroduce studyId={studyId} />
              <MemberList studyId={studyId}/>
              <CalendarGroup 
                  studyGroupId={studyId}
                  userEmail={window.localStorage.getItem("email")}
              />
          </div>
        </div>
      </div>
    );
}

export default GroupStudy