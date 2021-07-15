import React, { useState, useEffect } from "react";
import {
  Box,
  Profile,
  LeftContainer,
  NavigaionLink,
  Navigation,
  Header,
  SearchBar,
} from "./UI";
import Calendar from "../Calendar/Calendar";
import ToDoList from "./ToDoList";
import StudyService from "../../services/studyService";
import Payment from "../Iamport/Payment";
const MyStudy = () => {
  const [mystudyLoading, setMystudyLoading] = useState(true);
  const [myStudies, setMyStudies] = useState([]);
  const [premium, setPremium] = useState(localStorage.getItem("premium"));
  const email = localStorage.getItem("email");
  useEffect(() => {
    (async () => {
      const { data } = await StudyService.getMyStudies(email);
      if (data && data.length) {
        setMyStudies(data);
      }
    })();
    return () => {
      if (mystudyLoading) {
        setMystudyLoading(false);
      }
    };
  }, []);
  return (
    <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
      <div className="flex items-start justify-between ">
        <LeftContainer>
          <Navigation>
            <NavigaionLink
              pathUrl={"/study/generate"}
              pathName={"스터디 만들기"}
            />
            <NavigaionLink pathUrl={"#"} pathName={"스터디 관리"} />
          </Navigation>
        </LeftContainer>
        {/* end left */}
        {/* start right */}
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header>
            <SearchBar />
          </Header>
          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row">
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <Box>
                  {/* {console.log(myStudies)} */}
                  {myStudies &&
                    myStudies.length > 0 &&
                    myStudies.map((x) => (
                      <Profile
                        studyname={x.studygroupname}
                        studyId={x.studygroupid}
                        key={x.studygroupid}
                        isAdmin={
                          x.studygroupadmin && x.studygroupadmin === email
                        }
                        isOffline={x.studygroupoffline}
                      />
                    ))}
                  {!myStudies.length && <p>가입한 스터디가 없습니다. </p>}
                </Box>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <Box>
                  <p className="font-bold text-md p-4 text-black dark:text-white">
                    My To Do List
                    <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                      (할일 전체 갯수)
                    </span>
                  </p>
                  <ToDoList />
                </Box>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <Box>
                  {console.log("premium",premium)}
                    {
                    (premium === "true")  ? <Calendar userEmail={window.localStorage.getItem("email")} />   : 
                      <Payment setPremium={setPremium}>
                        <Calendar userEmail={window.localStorage.getItem("email")} />
                      </Payment>
                    }
                </Box>
              </div>
            </div>
          </div>
        </div>
        {/* end right */}
      </div>
    </main>
  );
};

export default MyStudy;
