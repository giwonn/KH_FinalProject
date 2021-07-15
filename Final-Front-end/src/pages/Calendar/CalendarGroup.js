import React, { useState, useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ModalInsert from "./ModalInsert";
import ModalUpdate from "./ModalUpdate";
import CalendarService from "../../services/calendarService";
import "./Calendar.css";

const CalendarGroup = ({studyGroupId}) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);

  const [insertModalOpen, setInsertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [selectInfo, setSelectInfo] = useState(null);
  const [clickInfo, setClickInfo] = useState(null);

  const [currentEvents, setCurrentEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (loading) {
       (async () => {
        const res =  await CalendarService.CalendarSelectStudy(studyGroupId);
        // const res =  await CalendarService.CalendarSelectList();
        if(res.data){
          setCurrentEvents(res.data);
          setLoading(false); // ??이건 잘 모르겠음 
        }
      })();
    }

    return () => {
      if (loading) {
        setLoading(false);
      }
    };
  }, [loading]);

  // 왼쪽 사이드바  오른쪽 드로그바
  const renderSidebar = () => {
    return (
      <div className="calendar-app-sidebar">
        <div className="calendar-app-sidebar-section">
          <h2>설명</h2>
          <ul className="calendar-ul">
            <li className="calendar-li">
              날짜를 선택하면 일정을 추가할수 있습니다
            </li>
            <li className="calendar-li">
              추가한 일정을 드래그하여 옮기거나 날짜를 조정할수 있습니다
            </li>
            <li className="calendar-li">
              추가된 일정을 클릭하면 삭제할수 있습니다.
            </li>
          </ul>
        </div>
        <div className="calendar-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            주말 보기/숨기기
          </label>
        </div>
        <div className="calendar-app-sidebar-section">
          <h2>총 일정 ({currentEvents.length})</h2>
          <ul className="calendar-ul">
            {currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    );
  };

  // 주말 표시 토글
  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  function renderSidebarEvent(event) {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  }

  // 요일부분 클릭하면 발생하는 이벤트
  const handleDateSelect = (selectinfo) => {
    // console.log(selectinfo);
    setSelectInfo(selectinfo);
    openInsertModal();
  };

  // 일정을 클릭하면 발생하는 이벤트
  const handleEventClick = (clickInfo) => {
    setClickInfo(clickInfo);
    openUpdateModal();
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  // 모달
  const openInsertModal = () => {
    setInsertModalOpen(true);
  };
  const closeInsertModal = () => {
    setInsertModalOpen(false);
  };

  const openUpdateModal = () => {
    setUpdateModalOpen(true);
  };
  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  return (
    <div className="calendar-app">
      {/*renderSidebar()*/}
      
      <div className="calendar-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          locale="ko"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }} // 캘런더 헤더
          initialView="dayGridMonth"
          editable={true} // 이벤트 드래그, 리사이징 등의 편집여부 (interactionPlugin 필요)
          selectable={true} // 클릭하고 드래그하여 여러 날짜 또는 시간 슬롯을 강조 표시
          selectMirror={true} // 드래그 하는동안 자리표시자 이벤트를 그릴지 여부
          dayMaxEvents={true}
          weekends={weekendsVisible} // 주말표시 or 평일만 표시
          initialEvents={currentEvents} // 캘린더에 일정 표기
          select={handleDateSelect} // 일정 누르면 일정 삽입가능
          eventContent={renderEventContent} //
          eventClick={handleEventClick} // 추가되어있는 일정 클릭시 발생 이벤트
          // eventsSet={handleEvents} // 총 일정
          events={currentEvents}
        />
      </div>
      <ModalInsert
        open={insertModalOpen}
        close={closeInsertModal}
        header="일정 추가"
        currentEvents={currentEvents}
        setCurrentEvents={setCurrentEvents}
        selectInfo={selectInfo}
        userEmail={window.localStorage.getItem("email")}
        studyGroupId={studyGroupId}
      />
      <ModalUpdate
        open={updateModalOpen}
        close={closeUpdateModal}
        header="일정 수정"
        currentEvents={currentEvents}
        setCurrentEvents={setCurrentEvents}
        clickInfo={clickInfo}
        userEmail={window.localStorage.getItem("email")}
        studyGroupId={studyGroupId}
      />
    </div>
  );
};

export default CalendarGroup;
