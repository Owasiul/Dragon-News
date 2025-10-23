import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../Components/Header/Header";
import LetestNews from "../Components/LetestNews/LetestNews";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/LeftAside/LeftAside";
import RightAside from "../Components/RightAside/RightAside";
import LoadingPage from "../Page/LoadingPage";

const Home = () => {
  const { state } = useNavigate();
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
          <aside className="left-aside md:col-span-3 col-span-12 sticky h-fit top-0 ">
            <LeftAside></LeftAside>
          </aside>
          {/* main */}
          <section className="main md:col-span-6 col-span-12">
            {state == "Loading" ? (
              <LoadingPage></LoadingPage>
            ) : (
              <Outlet></Outlet>
            )}
          </section>
          {/* right */}
          <aside className="right-aside md:col-span-3 col-span-12 sticky h-fit top-0">
            <RightAside></RightAside>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
