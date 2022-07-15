import {
  Box,
  Center,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../../../assets/logo.png";
import { DiReact } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";

export function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"100%"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image w="80px" src={Logo} alt="logo" />
        {/* <Text fontSize={"sm"} fontWeight={"semibold"}></Text> */}
        <Center flexDirection={"column"}>
          <Text fontSize={"0.8rem"} mb="0.5rem" fontWeight={"semibold"}>
            Source Code
          </Text>
          <Stack direction={"row"} spacing={6}>
            <Link
              href="https://github.com/Mhatw/GetThatJob"
              isExternal
              fontSize={"0.8rem"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              _hover={{
                color: "blue.500",
              }}
            >
              <DiReact /> React Responsive SPA
            </Link>
            <Link
              href="https://github.com/Mhatw/GetThatJobAPI"
              isExternal
              fontSize={"0.8rem"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              _hover={{
                color: "red.500",
              }}
            >
              <SiRubyonrails /> Ruby on Rails REST API
            </Link>
          </Stack>
        </Center>
        <Text fontSize={"sm"} fontWeight={"semibold"} textAlign="center">
          © 2022 - Get That Job.
          <br /> Codeable - C6 Final Project
        </Text>
      </Container>
    </Box>
  );
}
