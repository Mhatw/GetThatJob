import { Center, Spinner } from "@chakra-ui/react";
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
export function NoRequireAuth({ children }) {
  const auth = useAuth();
  let location = useLocation();
  console.log(location);

  if (
    auth.user &&
    location.pathname !== "/dashboard/professional/find-job/all"
  ) {
    console.log("auth.user", auth.user);
    return <Navigate to="/dashboard/professional/find-job/all" />;
  }
  console.log(auth.isLoadingView);
  return auth.isLoadingView ? loader : children;
}
