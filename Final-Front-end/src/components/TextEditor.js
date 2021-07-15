import React, { useRef, useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import { backUrl } from "../config/config";

const TextEditor = ({ setText, text, placeholder = "내용을 입력해주세요" }) => {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob, callback) => {
          (async () => {
            let formData = new FormData();
            formData.append("file", blob);

            axios.defaults.withCredentials = true;
            const { data: url } = await axios.post(
              `${backUrl}image.do`,
              formData,
              {
                header: { "content-type": "multipart/formdata" },
              }
            );
            callback(url, "alt text");
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

  return (
    <div>
      <Editor
        usageStatistics={false}
        initialValue={text}
        placeholder={placeholder}
        previewStyle="tab"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => {
          const innerTxt = editorRef.current.getInstance().getMarkdown();
          setText(innerTxt);
        }}
        ref={editorRef}
      />
    </div>
  );
};

export default TextEditor;
