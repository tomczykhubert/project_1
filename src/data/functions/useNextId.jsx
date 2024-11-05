import { useContext } from "react";
import AppContext from "../AppContext.jsx";

function useNextId() {
  return useContext(AppContext).nextId;
}

export default useNextId;
