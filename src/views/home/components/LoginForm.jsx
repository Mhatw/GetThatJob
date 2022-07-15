import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../../../services/auth";

function PasswordInput({ ...props }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        {...props}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export function LoginForm() {
  const auth = useAuth();
  const toast = useToast();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  async function handleLogin(e) {
    e.preventDefault();
    auth.setIsLoading(true);
    try {
      await auth.login(credentials);
      toast({
        title: "Success",
        description: "You have successfully logged in",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: `${
          error?.response?.data?.unauthorized || "something went wrong"
        }`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    auth.setIsLoading(false);
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  console.log(credentials);
  return (
    <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Stack as={"form"} spacing={4}>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            value={credentials.email}
            name="email"
            onChange={(e) => handleChange(e)}
            type="email"
            placeholder="some.user@mail.com"
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <PasswordInput
            placeholder="******"
            value={credentials.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <Stack spacing={10}>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          ></Stack>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleLogin}
            type="submit"
            isLoading={auth.isLoading}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
