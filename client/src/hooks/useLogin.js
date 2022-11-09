import { useState } from "react";
import useAuth from "./useAuth";

const useLogin = () => {
  const { dispatch } = useAuth();
  const [error, setError] = useState({ error: false, msg: null });

  const login = async (email, password) => {
    if (email === "" || password === "")
      return setError({ error: true, msg: "All Fields are required" });

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setError({ error: true, msg: json.error });
    }
    if (response.ok) {
      setError({ error: false, msg: null });
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "login", payload: json });
    }
  };
  return { login, error };
};

export default useLogin;
