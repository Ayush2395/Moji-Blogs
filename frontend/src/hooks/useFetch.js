import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBlogData = async () => {
      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            setError("no blogs are posted");
            setIsLoading(true);
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch abort");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    };
    fetchBlogData();
    return () => abortController;
  }, [url]);

  return { data, error, isLoading };
};
