import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export function FindJob() {
  let navigate = useNavigate();
  // const location = useLocation();
  useEffect(() => {
    navigate("/dashboard/professional/find-job/all");
  }, []);
  return (
    <Flex flexDirection={"column"}>
      <Heading px={"2rem"}>Find that job</Heading>
      <Outlet />
    </Flex>
  );
}
