import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiListCheck, BiTargetLock, BiUser } from "react-icons/bi";
import { Outlet } from "react-router";
import { NavBar } from "../../../components";

const professionalNav = [
  {
    name: "Find Job",
    to: "/dashboard/professional/find-job/all",
    icon: <AiOutlineSearch />,
  },
  {
    name: "Your Applications",
    to: "/dashboard/professional/applies/all",
    icon: <BiListCheck />,
  },
  {
    name: "Following",
    to: "/dashboard/professional/following",
    icon: <BiTargetLock />,
  },
  {
    name: "Profile",
    to: "/dashboard/professional/profile",
    icon: <BiUser />,
  },
];

export function Professional() {
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
        <NavBar data={professionalNav} />
      </GridItem>
      <GridItem
        bg="gray.50"
        area={"main"}
        p={["0rem", "1rem", "3rem"]}
        pt="2rem"
        overflow="scroll"
        className="withScrollbar"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
}
