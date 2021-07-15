import { data } from "autoprefixer";
import React, {useState, useEffect} from "react";
import groupStudyService from "../../services/groupStudyService";
import ReactMarkdown from "react-markdown";

const StudyIntroduce = ({studyId}) => {

    const [studyName, setStudyName ] = useState(null);
    const [studyIsOnline, setStudyIsOnline] = useState(null);
    const [studyLocation, setStudyLocation] = useState(null);
    const [studyCount, setStudyCount] = useState(null);
    const [studyIntro, setStudyIntro] = useState(null)
    const [groupStudyList, setGroupStudyList] = useState([]);
    const [loading, setLoading] = useState(true);
  
    
    useEffect(() => {
      if (loading) {
         (async () => {
          const res =  await groupStudyService.getStudyIntro(studyId);
          if(res.data){
            // console.log(res.data);
            setGroupStudyList(res.data);
            setStudyName(res.data[0]?.studygroupname);
            setStudyLocation(res.data[0]?.studygroupaddr);
            setStudyIntro(res.data[0]?.studygroupdesc);
            setStudyCount(res.data[0]?.study_member_count);
            setLoading(false);

            if(res.data[0]?.studygroupoffline == "N"){
                setStudyIsOnline("온라인 스터디");
            } else {
                setStudyIsOnline("오프라인 스터디");
            }

            if(studyLocation == null || studyLocation == "" || studyLocation == undefined){
                setStudyLocation("-");
            }
          }
        })();
      }
  
      return () => {
        if (loading) {
          setLoading(false);
        }
      };
    }, [loading]);

    return (
        <>
            <header className="bg-white dark:bg-gray-800 items-center justify-center">
                <div className="container flex flex-col px-6 py-4 mx-auto  md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                    {/* <div className="flex flex-col items-center w-full md:flex-row md:w-1/2"> */}
                    <div className="container mx-auto flex flex-col items-center w-full md:w-1/2">
                                
                        <div className="max-w-lg md:mx-12 md:order-2 container mx-auto flex flex-col items-center">
                            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">{studyName}</h1>
                            <br />

                            <div className="relative max-w-full min-w-full rounded-2xl shadow-lg overflow-hidden mr-8">
                                <div className="flex flex-col">

                                    <div className="flex justify-between px-4 text-gray-100 z-30 mb-10 mt-10">
                                        <div className="flex flex-col items-start">
                                            <span className="font-thin text-black">스터디 방식</span>
                                            <span className="font-thin text-black">스터디 지역</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="tracking-widest text-xl text-black">{studyIsOnline}</span>
                                            <span className="tracking-widest text-xl text-black">{studyLocation}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between px-4 h-16 z-30 text-white bg-blue-600">
                                        <div className="flex flex-col items-start">
                                            <span className="text-2xl">스터디 인원</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl">{studyCount}명</span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute opacity-90 top-0 left-0 h-full blur w-full bg-blue-200 rounded-2xl">
                                    </div>
                                </div>
                            </div>


                            <br />
                            <ReactMarkdown>
                                {studyIntro}
                            </ReactMarkdown>
                        </div>
                    </div>

                    {/* <div className="flex items-center justify-center w-full h-96 md:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120912_172%2Fhappycoupon7_1347436251652qyuav_JPEG%2F93652504.jpg&type=sc960_832" alt="apple watch photo" />
                    </div> */}
                </div>
            </header>
        </>
    );
}

export default StudyIntroduce;

