import React from "react";
import { BsEmojiDizzy } from "react-icons/bs";

const Page404 = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen">
        <h1 className="text-6xl">
          Page not Found <BsEmojiDizzy className="inline" />
        </h1>
      </div>
    </>
  );
};

export default Page404;
