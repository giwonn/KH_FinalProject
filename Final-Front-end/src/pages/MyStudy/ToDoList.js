import React, { useState, useEffect, useCallback } from "react";
import { ToDoList, ToDoListItem, AddButton } from "./UI";
import Modal from "../../components/Modal";
import TodoInput from "./TodoInput";
import TodoService from "../../services/todoService";

const ToDos = () => {
  const [loading, setLoading] = useState(false);
  const [cbLoading, setCbLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [modalVal, setModalVal] = useState({
    id: "",
    title: "",
    content: "",
  });
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      (async () => {
        try {
          const { data } = await TodoService.getMyTodos(
            localStorage.getItem("email")
          );
          if (data) {
            setTodos(data);
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      })();
    }

    return () => {
      setLoading(false);
    };
  }, []);

  const closeModal = () => {
    if (insertModalVisible) {
      setInsertModalVisible(false);
    }
    if (updateModalVisible) {
      setUpdateModalVisible(false);
    }
  };

  const toggleTodo = async (tododata) => {
    if (!cbLoading) {
      try {
        setCbLoading(true);
        console.log("tododata = ", tododata);
        const { data } = await TodoService.toggleTodo(tododata);
        if (data.success === "true") {
          const tempArr = todos.map((x) => {
            if (x.todomyid === tododata.todomyid) {
              const temp = x;
              temp.isdone = x.isdone === 0 ? 1 : 0;
              return temp;
            } else {
              return x;
            }
          });
          setTodos(tempArr);
        } else {
          alert("실패!");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setCbLoading(false);
      }
    }
  };
  const onClickAddButton = () => {
    setInsertModalVisible(true);
  };
  const onClickUpdateButton = (id, title, content) => {
    setModalVal({ id, title, content });
    setUpdateModalVisible(true);
  };
  const onInsertTodo = useCallback(
    async (todoData) => {
      try {
        const { data } = await TodoService.insertMyTodo(
          todoData,
          localStorage.getItem("email")
        );
        if (data.success == "true") {
          alert("할일 추가 성공");
          setTodos([...todos, data.todo]);
          setInsertModalVisible(false);
        } else {
          alert("할일을 추가하는 데에 오류발생");
        }
      } catch (err) {
        console.error(err);
      }
    },
    [todos]
  );
  const onUpdateTodo = useCallback(
    async (tododata) => {
      if (!cbLoading) {
        tododata.todomyid = modalVal.id;
        try {
          setCbLoading(true);
          const { data } = await TodoService.updateMyTodo(
            tododata,
            localStorage.getItem("email")
          );
          if (data.success === "true") {
            const tempArr = todos.map((x) => {
              if (x.todomyid === tododata.todomyid) {
                const temp = x;
                temp.title = tododata.title;
                temp.content = tododata.content;
                return temp;
              } else {
                return x;
              }
            });
            setTodos(tempArr);
            setUpdateModalVisible(false);
          } else {
            alert("데이터를 수정하는 데에 오류 발생");
          }
        } catch (err) {
          console.error(err);
        } finally {
          setCbLoading(false);
        }
      }
    },
    [modalVal, cbLoading]
  );

  const onDeleteTodo = async (id) => {
    const okay = confirm("정말로 삭제하시겠습니까?");

    if (!cbLoading && okay) {
      try {
        setCbLoading(true);
        const { data } = await TodoService.deleteMyTodo(id);
        if (data.success === "true") {
          setTodos(todos.filter((x) => x.todomyid !== id));
        } else {
          alert("삭제 실패");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setCbLoading(false);
      }
    }
  };
  return (
    <ToDoList>
      {loading && "loading..."}
      {!loading && !todos.length && "할일이 아직 없습니다."}
      {/* {console.log(todos)} */}
      {todos.map((item, idx) => (
        <ToDoListItem
          key={item.todomyid}
          todoid={item.todomyid}
          checked={item.isdone === 1}
          index={idx}
          taskName={item.title}
          toggleTodo={() => toggleTodo(item)}
          onDeleteTodo={onDeleteTodo}
          onClickUpdateButton={() =>
            onClickUpdateButton(item.todomyid, item.title, item.content)
          }
        />
      ))}
      <br />
      <div className="text-center">
        <AddButton onClickButton={onClickAddButton} />
      </div>
      {insertModalVisible && (
        <Modal
          visible={insertModalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          bgColor={"rgba(0,0,0,0.3)"}
        >
          <TodoInput
            inputTitle={"할 일 추가하기"}
            inputButtonText={"추가하기"}
            onClickAction={onInsertTodo}
            closeModal={closeModal}
            defaultTitle={""}
            defaultContent={""}
          />
        </Modal>
      )}
      {updateModalVisible && (
        <Modal
          visible={updateModalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          bgColor={"rgba(0,0,0,0.3)"}
        >
          <TodoInput
            inputTitle={"할 일 수정하기"}
            inputButtonText={"수정하기"}
            onClickAction={onUpdateTodo}
            closeModal={closeModal}
            defaultTitle={modalVal.title}
            defaultContent={modalVal.content}
          />
        </Modal>
      )}
    </ToDoList>
  );
};

export default ToDos;
