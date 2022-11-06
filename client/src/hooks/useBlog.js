import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const useBlog = () => {
  const hook = useContext(BlogContext);
  if (!hook) throw Error("useBlog must be inside BlogContextProvider");
  return hook;
};
