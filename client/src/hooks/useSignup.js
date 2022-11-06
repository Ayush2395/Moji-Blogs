import { useState } from "react";
import useAuth from "./useAuth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuth();

  const singup = async (email, password) => {
    setError(null);
    setIsLoading(false);

    if (!email || !password) {
      throw setError("All Field are required");
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setIsLoading(true);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "login", payload: json });
    }
  };

  return { singup, error, isLoading };
};
