import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const hook = useContext(AuthContext);
  if (!hook) throw Error("useAuth must be inside AuthContextProvider");
  return hook;
};

export default useAuth;
