import { Center, Spinner, useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";
const loader = (
  <Center h="100vh" w="100vw">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
);
export function RequireAuth({ children }) {
  const auth = useAuth();
  const toast = useToast();
  let location = useLocation();
  console.log(location);
  if (!auth.user && location.pathname !== "/login/professional") {
    console.log("no hay user");
    toast({
      title: "Login required",
      description: "You must be logged in to view this page",
      status: "warning",
    });
    setTimeout(() => {
      toast.closeAll();
    }, 4000);

    return <Navigate to="/login/professional" />;
  }
  // if (
  //   auth.user &&
  //   location.pathname !== "/dashboard/professional/find-job/all"
  // ) {
  //   console.log("auth.user", auth.user);
  //   return <Navigate to="/dashboard/professional/find-job/all" />;
  // }
  console.log(auth.isLoadingView);
  return auth.isLoadingView ? loader : children;
}
