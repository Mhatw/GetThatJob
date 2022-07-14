import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Link,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ReadMore } from "../../../components";

export default function MemberCard({
  name,
  url,
  github,
  linkedin,
  description,
  role,
}) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="0px 0px 14px rgba(0, 0, 0, 0.10)"
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar size={"xl"} src={url} alt={name} mb={4} pos={"relative"} />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text fontWeight={500} color={"gray.500"} mb={4} fontSize="sm">
          {role}
        </Text>
        <Text
          textAlign={"left"}
          fontSize={"sm"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          <ReadMore>{description}</ReadMore>
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <IconButton
            as={Link}
            href={github}
            isExternal
            aria-label="github"
            icon={<AiFillGithub />}
            variant="solid"
            w="fit-content"
          />
          <IconButton
            as={Link}
            href={linkedin}
            isExternal
            aria-label="linkedin"
            icon={<AiFillLinkedin />}
            variant="solid"
            w="fit-content"
            colorScheme="telegram"
          />
        </Stack>
      </Box>
    </Center>
  );
}
