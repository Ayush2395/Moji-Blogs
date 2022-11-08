import { useState } from "react";
import useAuth from "./useAuth";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(false);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2500);
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "login", payload: json });
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};

export default useLogin;
