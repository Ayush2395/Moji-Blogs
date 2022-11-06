import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useDarkMode = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error("useDarkMode can be only use inside AppContextProvider");
  }
  return context;
};

export default useDarkMode;
