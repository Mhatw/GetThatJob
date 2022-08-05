import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../services/auth";
import { createJob } from "../../../services/sessions/jobs-services";

export function CreateJob() {
  const data = useData();
  const auth = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [profile, setProfile] = React.useState({});
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    auth.setIsLoading(true);
    try {
      const res = await createJob(profile);
      auth.setIsLoading(false);
      data.setJobs([res, ...data.jobs]);

      toast({
        title: "Job created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard/recruiter/post-job/category/all");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error creating job",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      if (error?.response?.data?.unauthorized) {
        auth.setIsLoading(false);

        auth.setUser(null);
      }
    }
  };

  return (
    <>
      <Flex
        flexDirection={"column"}
        bg="white"
        p={"1rem"}
        borderRadius="0.4rem"
      >
        <Heading
          px={"2rem"}
          color="blue.700"
          display={"flex"}
          alignItems="center"
        >
          Create new job posting &nbsp;
        </Heading>
        <Flex
          alignItems="flex-start"
          gap={"1rem"}
          flexDirection={"column"}
          justifyContent="center"
          px={"2rem"}
          py={"1rem"}
        >
          <Heading size="md" color="gray.900">
            Main information
          </Heading>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Job title <span style={{ color: "red" }}>*</span>
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="name"
              type="text"
              value={profile?.name}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Job category <span style={{ color: "red" }}>*</span>
            </Heading>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {data?.cat?.find(
                  (cate) => parseInt(cate.id) === parseInt(profile.category_id)
                )?.name || "Select category"}
              </MenuButton>
              <MenuList>
                {data?.cat.map((catt) => {
                  return (
                    <MenuItem
                      key={catt.id}
                      isDisabled={parseInt(profile.category_id) === catt.id}
                      onClick={handleChange}
                      name="category_id"
                      value={catt.id}
                    >
                      {catt.name}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Type <span style={{ color: "red" }}>*</span>
            </Heading>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {data?.types?.find(
                  (typpe) => parseInt(typpe.id) === parseInt(profile.type_id)
                )?.name || "Select type"}
              </MenuButton>
              <MenuList>
                {data?.types?.map((typpe) => {
                  return (
                    <MenuItem
                      key={typpe.id}
                      isDisabled={parseInt(profile.type_id) === typpe.id}
                      onClick={handleChange}
                      name="type_id"
                      value={typpe.id}
                    >
                      {typpe.name}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Salary Range
            </Heading>
            <Flex gap="1rem">
              <Input
                fontSize="sm"
                fontWeight="500"
                name="salary_min"
                type="number"
                placeholder="Min"
                maxW="sm"
                value={profile.salary_min}
                onChange={handleChange}
              ></Input>
              <Input
                fontSize="sm"
                fontWeight="500"
                name="salary_max"
                type="number"
                placeholder="Max"
                maxW="sm"
                value={profile.salary_max}
                onChange={handleChange}
              ></Input>
            </Flex>
          </Box>
          <Heading
            size="md"
            color="gray.900"
            p="0.2rem"
            borderRadius={"0.2rem"}
          >
            Additional information
          </Heading>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              About the job position <span style={{ color: "red" }}>*</span>
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="description"
              type="text"
              value={profile.description}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Mandatory Requirements
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="mandatory_requirements"
              type="text"
              value={profile.mandatory_requirements}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Optional Requirements
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="optional_requirements"
              type="text"
              value={profile.optional_requirements}
              onChange={handleChange}
            ></Input>
          </Box>
        </Flex>
      </Flex>
      <Center flexDirection={"column"} mx="2rem">
        <Button
          isLoading={auth.isLoading}
          isDisabled={
            !profile.name ||
            !profile.category_id ||
            !profile.type_id ||
            !profile.description
          }
          colorScheme={"blue"}
          mt="1rem"
          mb="4rem"
          onClick={handleSubmit}
        >
          Post this job
        </Button>
        {!profile.name ||
        !profile.category_id ||
        !profile.type_id ||
        !profile.description ? (
          <Alert status="error" mt="-3rem" mb="4rem">
            <AlertIcon />
            Please fill all the fields marked with * to continue
          </Alert>
        ) : (
          <Text> </Text>
        )}
      </Center>
    </>
  );
}
