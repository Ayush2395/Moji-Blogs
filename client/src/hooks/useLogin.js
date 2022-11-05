import { useState } from "react";
import useAuth from "./useAuth";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(false);

    await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoading(true);
          throw setError("Wrong credential");
        }
        return response.json();
      })
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: "login", payload: user });
        setIsLoading(false);
      });
  };

  return { login, error, isLoading };
};

export default useLogin;
