import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import LetestNews from "../Components/LetestNews/LetestNews";
import Navbar from "../Components/Navbar/Navbar";

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
      <main className="w-[90%] mx-auto">
        {/* left */}
        <section className="left-aside"></section>
        {/* main */}
        <section className="main">
          <Outlet></Outlet>
        </section>
        {/* right */}
        <section className="right-aside"></section>
      </main>
    </div>
  );
};

export default Home;
