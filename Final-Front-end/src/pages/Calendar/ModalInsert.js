import React, { useState, useRef } from "react";
import { TextField } from "@material-ui/core";
import "./modal.css";
import CalendarService from "../../services/calendarService";

const ModalInsert = ({
  currentEvents,
  setCurrentEvents,
  open,
  close,
  header,
  selectInfo,
  userEmail,
  studyGroupId,
}) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  // const { open, close, header } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const insert = async () => {
    const selectInfoApi = selectInfo.view.calendar;
    selectInfoApi.unselect(); // clear date selection
    const newSchedule = {
      member_email: userEmail,
      study_group_id: studyGroupId,
      title,
      content,
      start: selectInfo.startStr.split("T")[0] + "T09:00",
      end: selectInfo.endStr.split("T")[0] + "T09:00",
    };

    // selectInfoApi.addEvent(newSchedule); // 이거랑
    //console.log("events = ", [...currentEvents, newSchedule]);
    setCurrentEvents([...currentEvents, newSchedule]); // 이거 둘 중 하나만 써야함!
    alert("일정이 등록 되었습니다!");

    close(true);

    const res = await CalendarService.CalendarInsert(newSchedule);
    //console.log(res);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main align="center">
            <TextField
              id="standard-basic"
              label="일정을 입력해주세요."
              onChange={(e) => {
                // console.log(e.target.value);
                setTitle(e.target.value);
              }}
            />

            <br />
            <br />

            <TextField
              label="Start"
              type="datetime-local"
              defaultValue={selectInfo.startStr + "T09:00"}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                // console.log(e.target.value.length);
                selectInfo.startStr = e.target.value;
              }}
            />

            <TextField
              label="End"
              type="datetime-local"
              defaultValue={selectInfo.endStr + "T09:00"}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                selectInfo.endStr = e.target.value;
              }}
            />

            <br />
            <br />

            <TextField
              id="standard-basic"
              label="내용을 입력해주세요."
              multiline={true}
              rows={5}
              rowsMax={50}
              onChange={(e) => {
                // console.log(e.target.value);
                setContent(e.target.value);
              }}
            />
          </main>
          <footer>
            <button className="insert" onClick={insert}>
              {" "}
              insert{" "}
            </button>
            &nbsp;
            <button className="close" onClick={close}>
              {" "}
              close{" "}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ModalInsert;
