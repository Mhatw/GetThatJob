import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiMessageAltDots } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { postedString, salaryString } from "../utilities";

export function ApplyCard({ apply }) {
  return (
    <AccordionItem bg={"white"} key={apply?.id}>
      <AccordionButton key={apply?.created_at}>
        <Box flex="1">
          <Flex flex={1} gap="0.5rem">
            <Flex gap="0.5rem" direction={["column", "column", "row", "row"]}>
              <Image
                objectFit="cover"
                maxW="100px"
                bg="gray.100"
                w={[null, null, "100px"]}
                borderRadius="lg"
                src={apply?.job?.logo_url}
              />
              <Box
                display={["flex"]}
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                maxW="100px"
              >
                <Text
                  color="gray.900"
                  fontFamily={"body"}
                  fontWeight="bold"
                  m={"0"}
                  transition={"all 0.1s ease-in"}
                  textAlign="left"
                >
                  {apply?.job?.name}
                </Text>
                <Text
                  color="gray.900"
                  fontSize={"0.6rem"}
                  fontFamily={"body"}
                  m={"0"}
                  transition={"all 0.1s ease-in"}
                  textAlign="left"
                >
                  {apply?.job?.company?.name.replaceAll("\\s+", " ")}
                </Text>
              </Box>
            </Flex>
            {/* tags */}
            <Stack direction={["column", "row", "row"]} py="0.5rem">
              <Stack direction={"column"} mr={[null, "5.5rem", "5rem", "5rem"]}>
                <Badge colorScheme="blue" fontSize={"0.6rem"}>
                  {apply?.job?.category}
                </Badge>
                <Badge fontSize={"0.6rem"}>{apply?.job?.type}</Badge>
                <Badge colorScheme="green" fontSize={"0.6rem"}>
                  {salaryString(apply?.job?.salary_min, apply?.job?.salary_max)}
                </Badge>
                <Badge colorScheme="purple" fontSize={"0.6rem"}>
                  {postedString(apply?.created_at)}
                </Badge>
              </Stack>
              <Box>
                <Text fontSize={"0.8rem"} display="flex" alignItems="center">
                  <FiSend />
                  &nbsp; Sent {postedString(apply?.created_at)}
                </Text>
                <Text fontSize={"0.8rem"} display="flex" alignItems="center">
                  <BiMessageAltDots />
                  &nbsp;{apply?.status?.name}
                </Text>
              </Box>
            </Stack>
            <Stack direction="row" py="0.5rem"></Stack>
          </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4} key={apply?.created_at + "2"}>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap="1rem"
          px={"1rem"}
          py={"1rem"}
        >
          <Heading fontSize={"xl"} fontFamily={"body"} m={"0"} color="blue.500">
            Professional experience
          </Heading>
          <Text fontSize={"1rem"} color="gray.900" fontWeight={"400"}>
            {apply?.experience || "No description"}
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap="1rem"
          px={"1rem"}
          py={"1rem"}
        >
          <Heading fontSize={"xl"} fontFamily={"body"} m={"0"} color="blue.500">
            Why are you interested in working at {apply?.job?.company?.name}
          </Heading>
          <Text fontSize={"1rem"} color="gray.900" fontWeight={"400"}>
            {apply?.message || "No description"}
          </Text>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}
