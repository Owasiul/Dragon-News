import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard/NewsCard";

const CaterogyNews = () => {
  const { id } = useParams();
  const convertedId = parseFloat(id.replace(/[^0-9]/g, ""));
  const data = useLoaderData();
  const [caterogyNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (convertedId == "0") {
      return setCategoryNews(data);
    } else if (convertedId == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      return setCategoryNews(filteredNews);
    } else {
      const filtedData = data.filter(
        (news) => news.category_id === convertedId
      );
      return setCategoryNews(filtedData);
    }
  }, [data, convertedId]);

  return (
    <div>
      <h3 className="font-semibold">
        <span>{caterogyNews.length} news found </span>
      </h3>
      <div className="my-5 grid grid-cols-1 gap-5 items-center">
        {
            caterogyNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CaterogyNews;
