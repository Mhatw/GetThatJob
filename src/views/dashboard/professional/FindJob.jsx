import { Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";

export function FindJob() {
  return (
    <>
      <Heading>Find that job</Heading>

      <Outlet />
    </>
  );
}
