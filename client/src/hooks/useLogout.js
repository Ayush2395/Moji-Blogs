import useAuth from "./useAuth";

const useLogout = () => {
  const { dispatch } = useAuth();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  };

  return { logout };
};

export default useLogout;
