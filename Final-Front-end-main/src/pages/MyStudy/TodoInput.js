import React, { useState } from "react";
import useInput from "../../hooks/useInput";

const TodoInput = ({
  onClickAction,
  closeModal,
  inputTitle,
  inputButtonText,
  defaultTitle,
  defaultContent,
}) => {
  const [content, onChangeContent] = useInput(defaultContent);
  const [title, onChangeTitle] = useInput(defaultTitle);

  return (
    <div className="py-3 sm:max-w-xl sm:mx-auto">
      <div className="px-12 py-5">
        <h2 className="text-gray-800 text-3xl font-semibold">{inputTitle}</h2>
      </div>
      <div className="bg-gray-200 w-full flex flex-col items-center">
        <div className="flex flex-col items-center py-6 space-y-3"></div>
        <div className="w-3/4 flex flex-col">
          <input
            placeholder="할 일의 제목을 입력"
            value={title}
            onChange={onChangeTitle}
            className="p-4 text-gray-500 rounded-xl resize-none"
          />
          <textarea
            rows="3"
            value={content}
            onChange={onChangeContent}
            placeholder="할 일의 내용을 입력"
            className="p-4 my-2 text-gray-500 rounded-xl resize-none"
          />
          <br />
          <button
            onClick={() => onClickAction({ title, content })}
            className="py-3 my-8 text-lg bg-gradient-to-r from-blue-500 to-blue-200 rounded-xl text-white"
          >
            {inputButtonText}
          </button>
        </div>
      </div>
      <div className="h-20 flex items-center justify-center">
        <button onClick={closeModal}>취소</button>
      </div>
    </div>
  );
};

export default TodoInput;
