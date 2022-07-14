import React from "react";
import { Outlet, useOutlet } from "react-router";
import { Footer, Header } from "./components";
import { Landing } from "./Landing";

export function HomeView() {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      {outlet ? <Outlet /> : <Landing />}
      <Footer />
    </>
  );
}
