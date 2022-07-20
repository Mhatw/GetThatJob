import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";
import { NavBar } from "../../../components";

export function Professional() {
  return (
    <Grid
      templateAreas={`
                  "nav main"
                  `}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={"1fr 6fr"}
      h="100vh"
      gap="1"
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
