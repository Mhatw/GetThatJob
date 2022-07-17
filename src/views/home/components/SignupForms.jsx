import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Progress,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import { useAuth } from "../../../services/auth";
import FileUpload from "./FileUpload";
import { PasswordInput } from "./PasswordInput";
import { StepProgress } from "./StepProgress";

let StepProgressData = [
  {
    status: "IN PROGRESS",
    label: "Login",
    label2: "information",
  },
  {
    status: "PENDING",
    label: "Password",
    label2: "information",
  },
  {
    status: "PENDING",
    label: "Professional",
    label2: "information",
  },
];

export function SignupForm() {
  const auth = useAuth();
  const toast = useToast();
  const [step, setStep] = useState(0);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  async function handleLogin(e) {
    e.preventDefault();
    auth.setIsLoading(true);
    console.log(credentials);
    // try {
    //   await auth.login(credentials);
    //   toast({
    //     title: "Success",
    //     description: "You have successfully logged in",
    //     status: "success",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // } catch (error) {
    //   toast({
    //     title: "Login failed",
    //     description: `${
    //       error?.response?.data?.unauthorized || "something went wrong"
    //     }`,
    //     status: "error",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // }
    auth.setIsLoading(false);
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const value =
    credentials.password.length * 5 +
    (credentials.password.match(/[^a-zA-Z0-9]/g) ? 15 : 0) +
    (credentials.password.match(/[0-9]/g) ? 15 : 0) +
    (credentials.password.match(/[A-Z]/g) ? 15 : 0);
  const progressColor = value < 30 ? "red" : value < 60 ? "yellow" : "green";
  console.log(credentials);

  const step1 = (
    <>
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
        <PasswordInput
          key="password"
          name="password"
          id={"password"}
          value={credentials.password}
          onChange={(e) => handleChange(e)}
        />
        {credentials.password && (
          <Progress value={value} size="xs" colorScheme={progressColor} />
        )}
        <PasswordInput
          key="confirmPassword"
          name="password"
          id={"password_confirmation"}
          value={credentials.password_confirmation}
          onChange={(e) => handleChange(e)}
        />
        {credentials.password_confirmation &&
          credentials.password_confirmation !== credentials.password && (
            <Tag colorScheme="red">
              <TagLeftIcon boxSize="12px" as={AiFillAlert} />
              <TagLabel>Passwords do not match</TagLabel>
            </Tag>
          )}
      </Stack>
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
          onClick={() => {
            setStep(1);
            StepProgressData[0].status = "DONE!";
            StepProgressData[1].status = "IN PROGRESS";
          }}
          type="submit"
          isLoading={auth.isLoading}
        >
          Next
        </Button>
      </Stack>
    </>
  );
  const step2 = (
    <>
      <Stack as={"form"} spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            value={credentials.name}
            name="name"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="John Doe"
          />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <Input
            value={credentials.phone}
            name="phone"
            onChange={(e) => handleChange(e)}
            type="tel"
            placeholder="+xxxxxxxxx"
          />
        </FormControl>
        <FormControl id="birthdate">
          <FormLabel>Birthdate</FormLabel>
          <Input
            value={credentials.birthdate}
            name="birthdate"
            onChange={(e) => handleChange(e)}
            type="date"
            placeholder="Pick a date"
          />
        </FormControl>
        <FormControl id="linkedin">
          <FormLabel>Linkedin url</FormLabel>
          <Input
            value={credentials.linkedin}
            name="linkedin"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="https://www.linkedin.com/in/username"
          />
        </FormControl>
      </Stack>
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
          onClick={() => {
            setStep(2);
            StepProgressData[1].status = "DONE!";
            StepProgressData[2].status = "IN PROGRESS";
          }}
          type="submit"
          isLoading={auth.isLoading}
        >
          Next
        </Button>
      </Stack>
    </>
  );

  const step3 = (
    <>
      <Stack as={"form"} spacing={4}>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input
            value={credentials.title}
            name="title"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Mechanical administrator..."
          />
        </FormControl>
        <FormControl id="experience">
          <FormLabel>Experience</FormLabel>
          <Input
            value={credentials.experience}
            name="experience"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
          />
        </FormControl>

        <FormControl id="education">
          <FormLabel>Education</FormLabel>
          <Input
            value={credentials.education}
            name="education"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Major in life experiences with a PHD in procrastination..."
          />
        </FormControl>
      </Stack>
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
          onClick={() => setStep(2)}
          type="submit"
          isLoading={auth.isLoading}
        >
          Next
        </Button>
      </Stack>
    </>
  );

  return (
    <>
      <StepProgress data={StepProgressData} />
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        {step === 0 && step1}
        {step === 1 && step2}
        {step === 2 && step3}
      </Box>
    </>
  );
}
