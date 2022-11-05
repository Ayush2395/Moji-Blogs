import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBlogs = async () => {
      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            setError("Cannot find any blog data");
            setIsLoading(true);
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log(err.message);
          }
          setError(err.message);
          setIsLoading(true);
        });
    };
    fetchBlogs();
    return () => abortController;
  }, [url]);
  return { data, error, isLoading };
};

export default useFetch;
