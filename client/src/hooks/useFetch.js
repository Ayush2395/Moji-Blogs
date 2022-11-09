import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState({ error: false, msg: "" });
  const { user } = useAuth();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: { authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (!response.ok) {
        setError({ error: true, msg: json.error });
      }
      if (response.ok) {
        setError({ error: false, msg: json.error });
        setData(json);
      }
    };
    fetchBlogs();
  }, [url,user]);
  return { data, error };
};

export default useFetch;
