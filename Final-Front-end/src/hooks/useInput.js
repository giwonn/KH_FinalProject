import React, { useState, useCallback } from "react";

const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
/**
 * ================== 사용법 ==================
 * array로 리턴되는 값 3개를 구조 분해 할당으로 가져옴
 *
 * 0번째 : value
 * 1번째 : onChange : ( onChange 될 때 value가 변화되는 값을 세팅해줌)
 * 2번째 : setValue : value를 세팅할 수 있는 setter : onChange 가 단순히 값만 세팅할 때에는 사용이 편리한데 세심하게 다뤄줘야 할 때는 약간 힘들어서..
 *
 *  ====================================
 *  useInputSample.js을 예시로 두었습니다 한 번 봐주세요~!
 *
 */
