import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { postedString, salaryString } from "../../professional/utilities";

export function PostingCard({ job }) {
  return (
    <AccordionItem bg={"white"}>
      <AccordionButton>
        <Box flex="1">
          <Flex flex={1} gap="0.5rem">
            <Flex gap="0.5rem" direction={["column", "column", "row", "row"]}>
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
                  {job?.name}
                </Text>
              </Box>
            </Flex>
            {/* tags */}
            <Stack direction={["column", "row", "row"]} py="0.5rem">
              <Stack direction={"column"} mr={[null, "5.5rem", "5rem", "5rem"]}>
                <Badge colorScheme="blue" fontSize={"0.6rem"}>
                  {job?.category}
                </Badge>
                <Badge fontSize={"0.6rem"}>{job?.type}</Badge>
                <Badge colorScheme="green" fontSize={"0.6rem"}>
                  {salaryString(job?.salary_min, job?.salary_max)}
                </Badge>
                <Badge colorScheme="purple" fontSize={"0.6rem"}>
                  {postedString(job?.created_at)}
                </Badge>
              </Stack>
            </Stack>
            <Stack direction="row" py="0.5rem"></Stack>
          </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4}>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap="1rem"
          px={"1rem"}
          py={"1rem"}
        >
          <Heading fontSize={"xl"} fontFamily={"body"} m={"0"} color="blue.500">
            About the job position
          </Heading>
          <Text fontSize={"1rem"} color="gray.900" fontWeight={"400"}>
            {job?.description || "No description"}
          </Text>
          <Center>
            <Button>Show</Button>
          </Center>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}
