import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";

export function FindJob() {
  return (
    <Flex flexDirection={"column"}>
      <Heading px={"2rem"}>Find that job</Heading>

      <Outlet />
    </Flex>
  );
}
