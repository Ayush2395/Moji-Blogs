import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBlogs = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: { authorization: `Bearer ${user.token}` },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setIsLoading(true);
      }
      if (response.ok) {
        setError(null);
        setIsLoading(false);
        setData(json);
      }
    };
    fetchBlogs();
    return () => abortController;
  }, [url, user]);
  return { data, error, isLoading };
};

export default useFetch;
