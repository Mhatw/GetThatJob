import React from "react";
import { Outlet, useOutlet } from "react-router";
import { Header } from "./components";
import { Landing } from "./Landing";

export function HomeView() {
  const outlet = useOutlet();
  console.log(outlet);
  return (
    <>
      <Header />
      {outlet ? <Outlet /> : <Landing />}
    </>
  );
}
