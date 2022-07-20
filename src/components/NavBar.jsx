import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../services/auth";
import Logo from "../assets/logo.png";
import { Logout } from "./Logout";

const professionalNav = [
  {
    name: "Find Job",
    to: "/dashboard/professional/find-job",
    icon: "search",
  },
  {
    name: "Your Applications",
    to: "/dashboard/professional/applies/all",
    icon: "list",
  },
  {
    name: "Following",
    to: "/dashboard/professional/following",
    icon: "user",
  },
  {
    name: "Profile",
    to: "/dashboard/professional/profile",
    icon: "user",
  },
];

export function NavBar() {
  const auth = useAuth();
  console.log(auth.user, "auth");
  return (
    <Flex
      alignItems="center"
      flexDirection={"column"}
      gap={"1rem"}
      justifyContent="flex-start"
      // px={"2rem"}
      py={"2rem"}
      // border="2px"
      height="100%"
      width="100%"
    >
      <Box as={Link} to="/" mb={"1rem"}>
        <Image w="80px" src={Logo} alt="logo" />
      </Box>

      {professionalNav.map((nav) => (
        <NavButton key={nav.name} to={nav.to}>
          {nav.name}
        </NavButton>
      ))}
      <Spacer />
      <Logout />
    </Flex>
  );
}

function NavButton({ children, to }) {
  const location = useLocation();
  console.log(location, "location");
  const isActive = location.pathname.match(to);
  return (
    <Button
      as={NavLink}
      to={to}
      colorScheme={isActive ? "blue" : "gray"}
      variant={isActive ? "solid" : "ghost"}
      w="100%"
      borderRadius={"0"}
    >
      {children}
    </Button>
  );
}
