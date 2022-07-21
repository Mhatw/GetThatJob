import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo2.png";
import { Logout } from "./Logout";
import { AiOutlineSearch } from "react-icons/ai";
import { BiListCheck, BiTargetLock, BiUser } from "react-icons/bi";
const professionalNav = [
  {
    name: "Find Job",
    to: "/dashboard/professional/find-job",
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

export function NavBar() {
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
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
        {isLargerThan992 ? (
          <Image w="80px" src={Logo} alt="logo" />
        ) : (
          <Image w="40px" src={Logo2} alt="logo" />
        )}
      </Box>

      {professionalNav.map((nav) => (
        <NavButton key={nav.name} to={nav.to} icon={nav.icon}>
          {nav.name}
        </NavButton>
      ))}

      <Logout />
    </Flex>
  );
}

function NavButton({ children, to, icon }) {
  const location = useLocation();
  const isActive = location.pathname.match(to);
  return (
    <Button
      leftIcon={icon}
      as={NavLink}
      to={to}
      colorScheme={isActive ? "blue" : "gray"}
      variant={isActive ? "solid" : "ghost"}
      w="100%"
      display={"flex"}
      alignItems="center"
      justifyContent={["center", "center", "center", "flex-start"]}
      borderRadius={"0"}
    >
      <Text display={["none", "none", "none", "block"]}>{children}</Text>
    </Button>
  );
}
