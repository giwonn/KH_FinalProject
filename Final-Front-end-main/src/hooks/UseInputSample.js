import React from "react";
import useInput from "../hooks/useInput";

const UseInputSample = () => {
  const [text, onChangeText, setText] = useInput("");

  const onClickButton = () => {
    setText("와우");
  };
  return (
    <>
      <div style={{ border: "1px solid pink", minHeight: "100vh" }}>
        <p>{text}</p>
        <input
          value={text}
          onChange={onChangeText}
          style={{ border: "1px solid #000" }}
        />
        <button onClick={onClickButton}>클릭 button</button>
      </div>
    </>
  );
};

export default UseInputSample;
