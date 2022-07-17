import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function Professional() {
  return (
    <>
      <Flex
        alignItems="center"
        gap={"1rem"}
        justifyContent="flex-start"
        background={"#f5f5f5"}
        b
        px={"2rem"}
        py={"1rem"}
      >
        <Text fontWeight={"semibold"}>Professional</Text>
        {/* <Image src="https://get-that-jobs-api.herokuapp.com/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhkR1pxWjNrelpEQTVkbVU1WVhSMGRuWjRibXQ2WlRRNGIzZHNZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpV1dsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpFd1gySmpjRjlzYjJkdlh6RXdNSGd4TURBdWNHNW5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWN4TUY5aVkzQmZiRzluYjE4eE1EQjRNVEF3TG5CdVp3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEbWx0WVdkbEwzQnVad1k3QmxRNkVYTmxjblpwWTJWZmJtRnRaVG9LYkc5allXdz0iLCJleHAiOiIyMDIyLTA3LTE1VDE5OjQwOjU3LjQ1NloiLCJwdXIiOiJibG9iX2tleSJ9fQ==--1d527dec63e6f8384df3c28e75e03ef978c1241c/10_bcp_logo_100x100.png" /> */}
        <Button as={Link} to="find-job/all">
          Find Job
        </Button>
      </Flex>

      {/* <br /> */}
      {/* <Link to="applies/all">Your applications</Link>
      <br />
      <Link to="following">following</Link>
      <br />
      <Link to="profile">profile</Link> */}
      <Outlet />
    </>
  );
}
