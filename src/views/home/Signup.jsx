import {
  Flex,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

export function Signup() {
  const theme = useTheme();

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
              Good choice!
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"} w="100%">
              Create a new account as...
            </Text>
            <Flex w="100%" gap={2}>
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
            </Flex>
          </Stack>
          <Outlet />
        </Stack>
      </Flex>
    </>
  );
}
