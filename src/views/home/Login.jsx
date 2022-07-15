import {
  Flex,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  useTheme,
  // Hide,
} from "@chakra-ui/react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import { LoginSvg } from "./components/svg/LoginSvg";

export function Login() {
  const theme = useTheme();
  const userType = useLocation().pathname.split("/")[2];

  console.log(userType);

  console.log(userType);

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"flex-start"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={["6rem", "6rem", "6rem", "6rem"]}
          px={6}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} w="100%">
              Welcome back ✌️
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"} w="100%">
              Login to you account as...{" "}
            </Text>
            <Flex w="100%" gap={2}>
              <NavLink
                as={Link}
                to="professional"
                style={({ isActive }) =>
                  isActive
                    ? { borderBottom: `4px solid ${theme.colors.blue[400]}` }
                    : { borderBottom: `4px solid ${theme.colors.gray[300]}` }
                }
              >
                Professional
              </NavLink>
              <NavLink
                as={Link}
                to="recruiter"
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: `4px solid ${theme.colors.blue[400]}`,
                      }
                    : {
                        borderBottom: `4px solid ${theme.colors.gray[300]}`,
                      }
                }
              >
                Recruiter
              </NavLink>
            </Flex>
          </Stack>
          <Outlet />
        </Stack>
      </Flex>
      {/* <Hide below="md">
        <Flex w={"full"}>
          <LoginSvg
            height={{ sm: "24rem", lg: "20rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Hide> */}
    </>
  );
}
