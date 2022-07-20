import { Button, Flex, Heading, useToast } from "@chakra-ui/react";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Logout } from "../../components";
import { useAuth } from "../../services/auth";

export function DashboardView() {
  // const auth = useAuth();
  // const toast = useToast();
  // const navigate = useNavigate();
  // async function handleLogout(e) {
  //   auth.setIsLoading(true);
  //   try {
  //     await auth.logout();
  //     toast({
  //       title: "Success",
  //       description: "You have successfully logged out",
  //       status: "success",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   } catch (error) {
  //     toast({
  //       title: "Logout failed",
  //       description: "something went wrong",
  //       status: "error",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //     auth.setUser(null);
  //     navigate("/");
  //   }
  //   auth.setIsLoading(false);
  // }
  // const handleLogout = (e) => {
  //   auth.logout();
  //   // navigate("/dashboard");
  // };
  return (
    <>
      <Flex
        justifyContent="space-between"
        px={"2rem"}
        py={"1rem"}
        background={"#f0f0f0"}
      >
        <Heading>Dashboard</Heading>
        <Logout />
      </Flex>

      <Outlet />
    </>
  );
}
