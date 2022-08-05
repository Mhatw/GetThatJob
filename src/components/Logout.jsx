import { Button, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/auth";

export function Logout() {
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
        title: "Logout failed",
        description: "something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      auth.setUser(null);
      navigate("/");
    }
    auth.setIsLoading(false);
  }
  return (
    <Button
      colorScheme="red"
      onClick={handleLogout}
      leftIcon={<BiLogOutCircle />}
      type="submit"
      w={"100%"}
      borderRadius={"0"}
      isLoading={auth.isLoading}
    >
      <Text display={["none", "none", "none", "block"]}>Logout</Text>
    </Button>
  );
}
