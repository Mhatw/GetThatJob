import { Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";

export function FindJob() {
  return (
    <>
      <Heading px={"2rem"}>Find that job</Heading>

      <Outlet />
    </>
  );
}
