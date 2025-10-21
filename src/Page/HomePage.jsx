import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard/NewsCard";
const HomePage = () => {
  const { id } = useParams();
  const convertedId = parseFloat(id.replace(/[^0-9]/g, ""));

  const data = useLoaderData();
  const [breakingNews, setBreakingNews] = useState([]);
  useEffect(() => {
    if (convertedId == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      return setBreakingNews(filteredNews);
    } else {
      setBreakingNews([]);
    }
  }, [data, convertedId]);
  return (
    <div>
      <h2 className="font-bold">Dragon News Home</h2>
      <div className="my-5 grid grid-cols-1 gap-5 items-center">
        {
          breakingNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default HomePage;
