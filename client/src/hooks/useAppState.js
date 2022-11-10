import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error("useAppState must be used inside AppContextProvider");
  }
  return context;
};

export default useAppState;
