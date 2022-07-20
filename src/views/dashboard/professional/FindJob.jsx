import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useSingleEffect } from "react-haiku";
export function FindJob() {
  let navigate = useNavigate();

  useSingleEffect(() => {
    navigate("/dashboard/professional/find-job/all");
  });
  return (
    <Flex flexDirection={"column"}>
      <Heading px={"2rem"}>Find that job</Heading>
      <Outlet />
    </Flex>
  );
}
