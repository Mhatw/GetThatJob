import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { BiBriefcase, BiListPlus, BiUser } from "react-icons/bi";
import { Outlet } from "react-router";

import { NavBar } from "../../../components";

const professionalNav = [
  {
    name: "Job Postings",
    to: "/dashboard/recruiter/post-job/category/all",
    icon: <BiBriefcase />,
  },
  {
    name: "Create New Job",
    to: "/dashboard/recruiter/create-job",
    icon: <BiListPlus />,
  },

  {
    name: "Profile",
    to: "/dashboard/recruiter/profile",
    icon: <BiUser />,
  },
];

export function Recruiter() {
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
