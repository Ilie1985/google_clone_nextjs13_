"use client";

import React, { Fragment, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }

    router.push(`/search/web?searchTerm=${input}`);
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    console.log(data);
    const result = data[0];
    if (!response) {
      return;
    }
    router.push(`/search/web?searchTerm=${result}`);
    setRandomSearchLoading(false);
  };

  return (
    <Fragment>
      <form
        onSubmit={submitHandler}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200  px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={changeHandler}
          value={input}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={submitHandler} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png"
              alt="url of spinner from google"
              className="h-6 text-center "
            />
          ) : (
            " I Am Feeling Lucky"
          )}
        </button>
      </div>
    </Fragment>
  );
};

export default HomeSearch;
