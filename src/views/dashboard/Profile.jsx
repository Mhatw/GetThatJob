import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../services/auth";

export function Profile() {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading
          px={"2rem"}
          color="blue.700"
          display={"flex"}
          alignItems="center"
        >
          Profile &nbsp;
          <IconButton
            as={Link}
            to="../edit-profile"
            aria-label="Add to friends"
            icon={<EditIcon />}
          />
        </Heading>
        <Flex
          alignItems="flex-start"
          gap={"1rem"}
          flexDirection={"column"}
          justifyContent="center"
          px={"2rem"}
          py={"1rem"}
        >
          {/* noOfLines={1} */}
          <Heading size="md" color="gray.900">
            Personal information
          </Heading>
          {/* <Box w="100%">
            <Heading size="sm" color="gray.900">
              Email:
            </Heading>
            <Text fontSize="sm" fontWeight="500">
              {auth.user?.email}
            </Text>
          </Box> */}
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Name:
            </Heading>
            <Text fontSize="sm" fontWeight="500">
              {auth.user?.name}
            </Text>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Phone:
            </Heading>
            <Text fontSize="sm" fontWeight="500">
              {auth.user?.phone}
            </Text>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Birthdate:
            </Heading>
            <Text fontSize="sm" fontWeight="500">
              {auth.user?.birth_date}
            </Text>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Linkedin url:
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="500"
              whiteSpace="wrap"
              // w="80%"
              // wordWrap="break-word"
            >
              {auth.user?.linkedin_url}
            </Text>
          </Box>
          <Heading
            size="md"
            color="gray.900"
            p="0.2rem"
            borderRadius={"0.2rem"}
          >
            Professional information
          </Heading>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Professional Experience
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="500"
              whiteSpace="wrap"
              // w="80%"
              // wordWrap="break-word"
            >
              {auth.user?.experience || "No information"}
            </Text>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Education
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="500"
              whiteSpace="wrap"
              // w="80%"

              // wordWrap="break-word"
            >
              {auth.user?.education || "No information"}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Center>
        <Button
          as={Link}
          to="../edit-profile"
          colorScheme={"blue"}
          mt="1rem"
          mb="4rem"
        >
          Edit Profile
        </Button>
      </Center>
    </>
  );
}

export function EditProfile() {
  const auth = useAuth();
  const [profile, setProfile] = React.useState({
    name: auth.user?.name,
    phone: auth.user?.phone,
    birth_date: auth.user?.birth_date,
    linkedin_url: auth.user?.linkedin_url,
    experience: auth.user?.experience,
    education: auth.user?.education,
  });
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  console.log(profile);
  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading
          px={"2rem"}
          color="blue.700"
          display={"flex"}
          alignItems="center"
        >
          Edit Profile &nbsp;
        </Heading>
        <Flex
          alignItems="flex-start"
          gap={"1rem"}
          flexDirection={"column"}
          justifyContent="center"
          px={"2rem"}
          py={"1rem"}
        >
          {/* noOfLines={1} */}
          <Heading size="md" color="gray.900">
            Personal information
          </Heading>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Name:
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="name"
              type="text"
              value={profile.name}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Phone:
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="phone"
              type="tel"
              value={profile.phone}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Birthdate:
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="birth_date"
              type="date"
              value={profile.birth_date}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Linkedin url:
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="linkedin_url"
              type="text"
              value={profile.linkedin_url}
              onChange={handleChange}
            ></Input>
          </Box>
          <Heading
            size="md"
            color="gray.900"
            p="0.2rem"
            borderRadius={"0.2rem"}
          >
            Professional information
          </Heading>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Professional Experience
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="experience"
              type="text"
              value={profile.experience}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Education
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="education"
              type="text"
              value={profile.education}
              onChange={handleChange}
            ></Input>
          </Box>
        </Flex>
      </Flex>
      <Center>
        <Button
          as={Link}
          to="../edit-profile"
          colorScheme={"blue"}
          mt="1rem"
          mb="4rem"
        >
          Edit Profile
        </Button>
      </Center>
    </>
  );
}
