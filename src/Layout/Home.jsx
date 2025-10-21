import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import LetestNews from "../Components/LetestNews/LetestNews";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/LeftAside/LeftAside";
import RightAside from "../Components/RightAside/RightAside";

const Home = () => {
  return (
    <div>
      <header className="flex flex-col items-center my-4">
        <Header></Header>
        <div className="letest-news w-11/12 mx-auto ">
          <LetestNews></LetestNews>
        </div>
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-[90%] mx-auto ">
        <div className="grid grid-cols-12 items-start justify-center gap-5">
          {/* left */}
          <aside className="left-aside md:col-span-3 col-span-12 ">
            <LeftAside></LeftAside>
          </aside>
          {/* main */}
          <section className="main md:col-span-6 col-span-12">
            <Outlet></Outlet>
          </section>
          {/* right */}
          <aside className="right-aside md:col-span-3 col-span-12">
            <RightAside></RightAside>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
