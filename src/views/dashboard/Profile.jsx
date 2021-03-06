import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  Link as ChakraLink,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../../components";
import { useAuth } from "../../services/auth";

export function Profile() {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <>
      {/* proffesional */}
      {auth.user?.user_type === "Professional" && (
        <Flex
          flexDirection={"column"}
          mt={[null, "2rem"]}
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
      )}
      {/* proffesional */}
      {/* company */}
      {auth.user?.user_type !== "Professional" && (
        <Flex
          flexDirection={"column"}
          mt={[null, "2rem"]}
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
            <Box>
              <Heading size="sm" color="gray.900">
                Company Logo
              </Heading>
              <Image
                objectFit="cover"
                maxW="100px"
                bg="gray.100"
                w={[null, null, "100px"]}
                borderRadius="lg"
                src={auth.user?.logo_url}
              />
            </Box>
            <Box w="100%">
              <Heading size="sm" color="gray.900">
                Company Name
              </Heading>
              <Text fontSize="sm" fontWeight="500">
                {auth.user?.name}
              </Text>
            </Box>
            <Box w="100%">
              <Heading size="sm" color="gray.900">
                Company Website
              </Heading>
              <ChakraLink href={auth.user?.website} isExternal>
                {auth.user?.website} <ExternalLinkIcon mx="2px" />
              </ChakraLink>
              {/* <Text fontSize="sm" fontWeight="500">
                {auth.user?.website}
              </Text> */}
            </Box>
            <Box w="100%">
              <Heading size="sm" color="gray.900">
                About the Company
              </Heading>
              <Text fontSize="sm" fontWeight="500">
                {auth.user?.description}
              </Text>
            </Box>
          </Flex>
        </Flex>
      )}

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
      {/* proffesional */}
      <Flex
        flexDirection={"column"}
        bg="white"
        p={"1rem"}
        borderRadius="0.4rem"
      >
        <Box mt={[null, "2rem"]} px={"1rem"}>
          <BackButton />
        </Box>
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

export function EditProfileRecruiter() {
  const auth = useAuth();
  const [profile, setProfile] = React.useState({
    name: auth.user?.name,
    website: auth.user?.website,
    description: auth.user?.description,
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
      <Flex
        flexDirection={"column"}
        mt={[null, "2rem"]}
        bg="white"
        p={"1rem"}
        borderRadius="0.4rem"
      >
        <Box mt="2rem" px={"1rem"}>
          <BackButton />
        </Box>
        <Heading
          px={"2rem"}
          color="blue.700"
          display={"flex"}
          alignItems="center"
        >
          Profile
        </Heading>

        <Flex
          alignItems="flex-start"
          gap={"1rem"}
          flexDirection={"column"}
          justifyContent="center"
          px={"2rem"}
          py={"1rem"}
        >
          <Box>
            <Heading size="sm" color="gray.900">
              Company Logo
            </Heading>
            <Image
              objectFit="cover"
              maxW="100px"
              bg="gray.100"
              w={[null, null, "100px"]}
              borderRadius="lg"
              src={auth.user?.logo_url}
            />
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              Company Name
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
              Company Website
            </Heading>
            <Input
              fontSize="sm"
              fontWeight="500"
              name="website"
              type="text"
              value={profile.website}
              onChange={handleChange}
            ></Input>

            {/* <Text fontSize="sm" fontWeight="500">
                {auth.user?.website}
              </Text> */}
          </Box>
          <Box w="100%">
            <Heading size="sm" color="gray.900">
              About the Company
            </Heading>
            <Textarea
              fontSize="sm"
              fontWeight="500"
              name="description"
              type="text"
              h={"200px"}
              value={profile.description}
              onChange={handleChange}
            ></Textarea>
          </Box>
        </Flex>
      </Flex>
      {/* proffesional */}

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
