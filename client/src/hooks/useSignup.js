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

    await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          setError("error in creating account");
          setIsLoading(true);
        }
        return response.json();
      })
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: "login", payload: user });
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(true);
      });
  };

  return { singup, error, isLoading };
};
