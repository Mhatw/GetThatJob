import { Button, useToast } from "@chakra-ui/react";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../services/auth";

export function DashboardView() {
  const auth = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  async function handleLogout(e) {
    auth.setIsLoading(true);
    try {
      await auth.logout();
      toast({
        title: "Success",
        description: "You have successfully logged out",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: `${
          error?.response?.data?.unauthorized || "something went wrong"
        }`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    }
    auth.setIsLoading(false);
  }
  // const handleLogout = (e) => {
  //   auth.logout();
  //   // navigate("/dashboard");
  // };
  return (
    <>
      <h1>DashboardView</h1>

      <Button
        colorScheme="red"
        onClick={handleLogout}
        type="submit"
        isLoading={auth.isLoading}
      >
        Logout
      </Button>
      <Outlet />
    </>
  );
}
