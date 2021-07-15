import React, { useState, useEffect ,useRef } from "react";
import { TextField } from "@material-ui/core";
import "./modal.css";
import CalendarService from "../../services/calendarService";

const ModalUpdate = ({
  currentEvents,
  setCurrentEvents,
  open,
  close,
  header,
  clickInfo,
  userEmail,
  studyGroupId,
}) => {

  const [title, setTitle] = useState(title); //clickInfo.event.title
  const [content, setContent] = useState(content);

  const [start, setStart] = useState(start);
  const [end, setEnd] = useState(end);

  // UPDATE
  const update = async () => {

    const clickInfoApi = clickInfo.view.calendar;

    clickInfoApi.unselect();
    const newSchedule = {
      calendar_id: clickInfo.event._def.extendedProps.calendar_id,
      member_email: userEmail,
      study_group_id: studyGroupId,
      title,
      content,
      start: clickInfo.startStr,
      end: clickInfo.endStr,
    };

    if(newSchedule.title == undefined){
      newSchedule.title = clickInfo.event.title;
    }
    if(newSchedule.content == undefined){
      newSchedule.content = clickInfo.event.extendedProps.content;
    }
    if(newSchedule.start == undefined){
      newSchedule.start = clickInfo.event.startStr.split("+")[0];
    }
    if(newSchedule.end == undefined){
      newSchedule.end = clickInfo.event.endStr.split("+")[0];
    }

    // clickInfoApi.addEvent(newSchedule);
    setCurrentEvents([...currentEvents, newSchedule]);
    
    alert("일정이 수정 되었습니다!");
    close(true);

    const res = await CalendarService.CalendarUpdate(newSchedule);
    
    const tmp = currentEvents;
    setCurrentEvents(tmp.map(x => x.calendar_id === newSchedule.calendar_id ? newSchedule : x));

    setStart(newSchedule.start);
    setEnd(newSchedule.end);

    //console.log(res);
  };


  // DELETE
  const remove = async () => {

    const calendar_id = clickInfo.event._def.extendedProps.calendar_id;

    if (confirm(`'${clickInfo.event.title}' 일정을 정말 삭제 하시겠습니까?`)) {
      const res = await CalendarService.CalendarDelete({"calendar_id" : calendar_id});

      const tmp = currentEvents;
      setCurrentEvents(tmp.filter(x => x.calendar_id !== calendar_id));
      // console.log(res);
    }
    close(true);
  };

  return (
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
              label="일정"
              defaultValue={clickInfo.event.title}
              onChange={(e) => {
                //console.log(e.target.value);
                setTitle(e.target.value);
              }}
            />


            <br />
            <br />


            <TextField
              label="Start"
              type="datetime-local"
              defaultValue={clickInfo.event.startStr.split("+")[0]}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                //console.log(e.target.value);
                clickInfo.startStr = e.target.value;
              }}
            />
            
            <TextField
              label="End"
              type="datetime-local"
              defaultValue={clickInfo.event.endStr.split("+")[0]}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                //console.log(e.target.value);
                clickInfo.endStr = e.target.value;
              }}
            />


            <br />
            <br />


            <TextField
              id="standard-basic"
              label="내용"
              defaultValue={clickInfo.event.extendedProps.content}
              multiline={true}
              rows={5}
              rowsMax={50}
              onChange={(e) => {
                //console.log(e.target.value);
                setContent(e.target.value);
              }}
            />
          </main>
          <footer>
            <button className="update" onClick={update}>
              {" "}
              update{" "}
            </button>
            &nbsp;
            <button className="remove" onClick={remove}>
              {" "}
              remove{" "}
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

export default ModalUpdate;
