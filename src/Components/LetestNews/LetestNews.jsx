import React from "react";
import Marquee from "react-fast-marquee";
import allNews from "../../../public/news.json";

const LetestNews = () => {
  return (
    <div className="bg-base-200 p-2 flex gap-3">
      <button className="btn bg-secondary text-white">Latest</button>
      <Marquee className="flex gap-5 whitespace-nowrap">
        {allNews.map((news) => (
          <p className="font-semibold mx-2"> {news.title} </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LetestNews;
