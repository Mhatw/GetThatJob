import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Progress,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../services/auth";
import {
  createProfessional,
  updateProfessional,
} from "../../../services/sessions/professional-services";
import {
  createRecruiter,
  updateRecruiter,
} from "../../../services/sessions/recruiter-services";
import {
  signupProfessional,
  signupRecruiter,
} from "../../../services/sessions/user-services";
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
    label: "Personal",
    label2: "information",
  },
  {
    status: "PENDING",
    label: "Professional",
    label2: "information",
  },
];
let StepProgressDataRecruiter = [
  {
    status: "IN PROGRESS",
    label: "Login",
    label2: "information",
  },
  {
    status: "PENDING",
    label: "Company",
    label2: "information",
  },
];

export function SignupForm() {
  const auth = useAuth();
  const toast = useToast();
  const [step, setStep] = useState(0);
  const [id, setId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const location = useLocation();

  const userType =
    location.pathname.split("/")[2] === "professional"
      ? "Professional"
      : "Company";
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      auth.setIsLoading(true);
      if (location.pathname.split("/")[2] === "professional") {
        await updateProfessional(id, credentials, cvFile);

        // const user = await signupProfessional(credentials);
      } else {
        await updateRecruiter(id, credentials, imageFile);
      }

      toast({
        title: `welcome ${credentials.name || userType}`,
        description: "Your account has been created",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      auth.setIsLoading(false);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      auth.setIsLoading(false);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  async function handleUser() {
    try {
      auth.setIsLoading(true);
      if (location.pathname.split("/")[2] === "professional") {
        const professional = await createProfessional();

        setId(professional.id);
        try {
          await signupProfessional(professional.id, credentials);

          toast({
            title: "Email validation",
            description: "Nice email address",
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          auth.setIsLoading(false);
          setStep(1);
          StepProgressData[0].status = "DONE!";
          StepProgressData[1].status = "IN PROGRESS";
        } catch (error) {
          console.log(error);
          toast({
            title: "Error",
            description:
              error?.response?.data?.errors || "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          auth.setIsLoading(false);
        }
      } else {
        const recruiter = await createRecruiter();

        setId(recruiter.id);
        try {
          await signupRecruiter(recruiter.id, credentials);

          toast({
            title: "Email validation",
            description: "Nice email address",
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          auth.setIsLoading(false);
          setStep(1);
          StepProgressDataRecruiter[0].status = "DONE!";
          StepProgressDataRecruiter[1].status = "IN PROGRESS";
        } catch (error) {
          console.log(error);
          toast({
            title: "Error",
            description:
              error?.response?.data?.errors || "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          auth.setIsLoading(false);
        }
      }

      // setStep(step + 1);

      auth.setIsLoading(false);
    } catch (error) {
      auth.setIsLoading(false);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
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
          isDisabled={
            !credentials.email ||
            !credentials.password ||
            credentials.password !== credentials.password_confirmation
          }
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleUser}
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
      <Stack spacing={5}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"start"}
          justify={"space-between"}
          gap="0"
        ></Stack>
        <Button
          colorScheme={"blue"}
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
        <Button
          colorScheme={"gray"}
          variant="ghost"
          onClick={() => {
            // reload page
            window.location.reload();
          }}
          type="submit"
          isLoading={auth.isLoading}
        >
          Skip
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
      <Stack spacing={5}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"start"}
          justify={"space-between"}
        ></Stack>
        <div className="file-select2">
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setCvFile(e.target.files[0]);
            }}
          />
        </div>
        {cvFile && (
          <Tag colorScheme={"green"} w="100px" mt="-2rem">
            uploaded ✅
          </Tag>
        )}
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleUpdate}
          isLoading={auth.isLoading}
        >
          Next
        </Button>
      </Stack>
    </>
  );

  const step4 = (
    <>
      <Stack as={"form"} spacing={4}>
        <FormControl id="name">
          <FormLabel>Company name</FormLabel>
          <Input
            value={credentials.name}
            name="name"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="My company S.A."
          />
        </FormControl>
        <FormControl id="website">
          <FormLabel>Company website</FormLabel>
          <Input
            value={credentials.website}
            name="website"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="https://www.mycompany.sa"
          />
        </FormControl>
        <FormControl id="description">
          <FormLabel>About the company</FormLabel>
          <Input
            value={credentials.description}
            name="description"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="About the company"
          />
        </FormControl>
        <div className="file-select">
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setImageFile(e.target.files[0]);
            }}
          />
        </div>
        {imageFile && (
          <Tag colorScheme={"green"} w="100px">
            uploaded ✅
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
          onClick={handleUpdate}
          isLoading={auth.isLoading}
        >
          Next
        </Button>
      </Stack>
    </>
  );

  return (
    <>
      <StepProgress
        data={
          userType === "Professional"
            ? StepProgressData
            : StepProgressDataRecruiter
        }
      />
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        {step === 0 && step1}
        {step === 1 && userType === "Professional" && step2}
        {step === 2 && userType === "Professional" && step3}
        {step === 1 && userType === "Company" && step4}
      </Box>
    </>
  );
}
