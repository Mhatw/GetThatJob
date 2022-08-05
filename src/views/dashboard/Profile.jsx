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
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../../components";
import { useAuth } from "../../services/auth";
import { updateProfessional } from "../../services/sessions/professional-services";
import { updateRecruiter } from "../../services/sessions/recruiter-services";

export function Profile() {
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Heading size="md" color="gray.900">
              Personal information
            </Heading>

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
              <Text fontSize="sm" fontWeight="500" whiteSpace="wrap">
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
              <Text fontSize="sm" fontWeight="500" whiteSpace="wrap">
                {auth.user?.experience || "No information"}
              </Text>
            </Box>
            <Box w="100%">
              <Heading size="sm" color="gray.900">
                Education
              </Heading>
              <Text fontSize="sm" fontWeight="500" whiteSpace="wrap">
                {auth.user?.education || "No information"}
              </Text>
            </Box>
            {auth.user?.cv_url && (
              <Box w="100%" display="flex" gap="1rem" alignItems="center">
                <Button onClick={onOpen} colorScheme="green">
                  View CV
                </Button>

                <iframe
                  title="cv"
                  className="withoutScrollbar"
                  src={auth.user?.cv_url}
                  frameborder="0"
                  style={{
                    width: "90px",
                    height: "90px",
                    border: "none",
                  }}
                ></iframe>
                <Modal
                  isCentered
                  onClose={onClose}
                  isOpen={isOpen}
                  motionPreset="slideInBottom"
                  size="full"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Curriculum vitae</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                      display="flex"
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <iframe
                        title="cv"
                        src={auth.user?.cv_url}
                        frameborder="0"
                        style={{
                          width: "90vw",
                          height: "90vh",
                          border: "none",
                        }}
                      ></iframe>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Box>
            )}
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
              <Heading size="sm" color="gray.900" mb="2rem">
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
  const toast = useToast();
  const navigate = useNavigate();
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

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      auth.setIsLoading(true);
      await updateProfessional(auth?.user?.id, profile);

      auth.user.name = profile.name;
      auth.user.phone = profile.phone;
      auth.user.birth_date = profile.birth_date;
      auth.user.linkedin_url = profile.linkedin_url;
      auth.user.experience = profile.experience;
      auth.user.education = profile.education;

      toast({
        title: `data updated`,
        description: "your data has been updated",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      auth.setIsLoading(false);
      navigate("/dashboard/professional/profile");
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
          onClick={handleUpdate}
        >
          Edit Profile
        </Button>
      </Center>
    </>
  );
}

export function EditProfileRecruiter() {
  const auth = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
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

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      auth.setIsLoading(true);
      await updateRecruiter(auth?.user?.id, profile);

      auth.user.name = profile.name;
      auth.user.website = profile.website;
      auth.user.description = profile.description;

      toast({
        title: `data updated`,
        description: "your data has been updated",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      auth.setIsLoading(false);
      navigate("/dashboard/recruiter/profile");
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
            <Heading size="sm" color="gray.900" mb="2rem">
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
              value={profile.description || ""}
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
          onClick={handleUpdate}
        >
          Edit Profile
        </Button>
      </Center>
    </>
  );
}
