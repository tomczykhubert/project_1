import { useContext } from "react";
import AppContext from "../AppContext.jsx";

function useData() {
  return useContext(AppContext).items;
}

export default useData;
