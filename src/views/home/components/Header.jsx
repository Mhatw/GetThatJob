import React from "react";
import Logo from "../../../assets/logo.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        justifyContent="center"
        background={"white"}
        zIndex={5}
        gap="2"
        px={["0.5rem", "1rem", "2rem"]}
        py={["1rem", "1rem"]}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        position="fixed"
        w={"100%"}
      >
        <Link to="/">
          <Box p="2">
            <Image w="80px" src={Logo} alt="logo" />
          </Box>
        </Link>
        <Spacer />
        {/* button group */}
        <Flex gap="4">
          {/* signup */}
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              fontSize="0.8rem"
              rightIcon={<ChevronDownIcon />}
            >
              Signup
            </MenuButton>
            <MenuList p="1rem">
              <MenuItem
                borderRadius="0.2rem"
                fontWeight="semibold"
                onClick={() => navigate("/signup/recruiter")}
              >
                Recruiter
              </MenuItem>
              <MenuItem
                borderRadius="0.2rem"
                fontWeight="semibold"
                onClick={() => navigate("/signup/professional")}
              >
                Professional
              </MenuItem>
            </MenuList>
          </Menu>
          {/* login */}
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              fontSize="0.8rem"
              colorScheme="blue"
              rightIcon={<ChevronDownIcon />}
            >
              Login
            </MenuButton>
            <MenuList p="1rem">
              <MenuItem
                borderRadius="0.2rem"
                fontWeight="semibold"
                onClick={() => navigate("/login/recruiter")}
              >
                Recruiter
              </MenuItem>
              <MenuItem
                borderRadius="0.2rem"
                fontWeight="semibold"
                onClick={() => navigate("/login/professional")}
              >
                Professional
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
}
