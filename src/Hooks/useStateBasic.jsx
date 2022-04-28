import { useState } from "react";

const useStateBasic = (initialState) => {
  const [state, setState] = useState(initialState);
  return [state, setState];
};

export default useStateBasic;
