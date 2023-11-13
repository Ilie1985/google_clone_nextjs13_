import React from "react";
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

const WebSearchResults = ({ data }) => {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 ">
      <p className="text-gray-600 text-sm mb-5 mt-3 ">
        About {data.searchInformation?.formattedTotalResults} results /(
        {data.searchInformation?.formattedSearchTime} seconds)
      </p>

      {data.items.map((item) => {
        return (
          <div key={item.link} className="mb-8 max-w-xl">
            <div className="group flex flex-col">
              <Link href={item.link} className="text-sm truncate">
                {item.formattedUrl}
              </Link>
              <Link
                href={item.link}
                className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              >
                {item.title}
              </Link>
            </div>
            <p className="text-gray-600">{Parser(item.htmlSnippet)}</p>
          </div>
        );
      })}
      <PaginationButtons />
    </div>
  );
};

export default WebSearchResults;
