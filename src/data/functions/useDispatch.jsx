import { useContext } from "react";
import AppContext from "../AppContext.jsx";

function useDispatch() {
  return useContext(AppContext).dispatch;
}

export default useDispatch;
