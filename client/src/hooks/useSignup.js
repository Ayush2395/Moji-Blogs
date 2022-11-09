import { useState } from "react";
import useAuth from "./useAuth";

const useSignup = () => {
  const { dispatch } = useAuth();
  const [error, setError] = useState({ error: false, msg: null });

  const signup = async (email, password) => {
    if (email === "" || password === "")
      return setError({ error: true, msg: "All Fields are required" });

    const response = await fetch("/api/auth/signup", {
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
  return { signup, error };
};

export default useSignup;
