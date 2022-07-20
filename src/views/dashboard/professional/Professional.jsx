import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import { NavBar } from "../../../components";
import { useSingleEffect } from "react-haiku";

export function Professional() {
  let navigate = useNavigate();

  useSingleEffect(() => {
    navigate("/dashboard/professional/find-job/all");
  });
  return (
    <Grid
      templateAreas={`
                  "nav main"
                  `}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={"1fr 6fr"}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem
        bg="gray.50"
        area={"main"}
        p={["1rem", "1rem", "3rem"]}
        overflow="scroll"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
}
