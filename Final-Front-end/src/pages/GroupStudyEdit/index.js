import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TextEditor from "../../components/TextEditor";
import useInput from "../../hooks/useInput";
import StudyService from "../../services/studyService";
import { Container, Input, Button } from "./UI";
import MemberListWaiting from "../../components/MemberList/MemberListWaiting";
const GroupStudyEdit = ({ match }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [studyData, setStudyData] = useState({});

  const [name, onChangeName, setName] = useInput("");
  const [description, setDescription] = useState("");

  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await StudyService.getStudy(id);
        if (data && data.study) {
          setStudyData(data.study);
          setName(data.study.studygroupname);
          setDescription(data.study.studygroupdesc);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      setLoading(false);
    };
  }, []);

  const onClickEditButton = async () => {
    const edited = {
      ...studyData,
      studygroupname: name,
      studygroupdesc: description,
    };

    try {
      const { data } = await StudyService.updateStudy(edited);

      if (data.success === "true") {
        alert("수정 성공!");
        history.goBack();
      } else {
        alert("실패");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Container>
        {loading && "loading...."}
        <h1>스터디 정보 수정하기 </h1>
        <label>스터디 이름 : </label>
        <Input value={name} onChange={onChangeName} />
        <br />
        <label>스터디 정보</label>
        {!loading && <TextEditor setText={setDescription} text={description} />}
        <Button onClick={onClickEditButton} text="수정완료" />
      </Container>
      <MemberListWaiting studyId={id} />
    </>
  );
};

export default GroupStudyEdit;
