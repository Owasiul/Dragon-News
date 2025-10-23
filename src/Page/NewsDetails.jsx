import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import RightAside from "../Components/RightAside/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [nDetails, setNDetails] = useState({});
  useEffect(() => {
    const news = data.find((singleNews) => singleNews.id == id);
    setNDetails(news);
  }, [data, id]);

  return (
    <div>
      <Header></Header>
      <main className="w-11/12 mx-auto ">
        <h2 className="font-bold text-lg">Dragon news</h2>
        <section className="grid grid-cols-12 items-start">
          <div className=" md:col-span-9 col-span-12">
            <NewsDetailsCard nDetails={nDetails}></NewsDetailsCard>
          </div>
          <aside className=" md:col-span-3 col-span-12">
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
