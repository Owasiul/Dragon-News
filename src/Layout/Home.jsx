import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
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
