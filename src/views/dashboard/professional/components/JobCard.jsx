import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
export function JobCard({ job }) {
  // funtion for transform money to abbreviated
  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
  };

  const salary = `${formatCash(job.salary_min)} - ${formatCash(
    job.salary_max
  )}`;
  return (
    <Center
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        // borderColor="red.500"
        // w={{ sm: "100%", md: "540px" }}
        // height={{ sm: "476px", md: "20rem" }}
        direction={"column"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex gap={"0.5rem"}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              w={"110px"}
              h={"110px"}
              src={
                "data:image/png;base64,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"
              }
            />
          </Flex>
          <Box
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            // border={"1px"}

            // p={1}
            // pt={2}
          >
            <Text fontWeight={600} color={"gray.500"} size="sm" m={"0rem"}>
              {job.category}
              <Badge
                borderRadius={"0.4rem"}
                fontSize="0.5rem"
                colorScheme="purple"
                ml="0.5rem"
              >
                New
              </Badge>
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} m={"0"}>
              {job?.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              mb={"0.4rem"}
              fontSize={"sm"}
              fontWeight={"bold"}
            >
              {job?.company.name}
            </Text>
            <Stack align={"center"} justify={"center"} direction={"row"}>
              <Tag size="md" key="typeTag" variant="subtle" colorScheme="blue">
                <TagLeftIcon boxSize="12px" as={BsFillCalendarFill} />
                <TagLabel ml={-1} fontSize="0.8rem">
                  Full-time
                </TagLabel>
              </Tag>

              <Tag
                size="md"
                key="salaryTag"
                variant="subtle"
                colorScheme="green"
              >
                <TagLeftIcon boxSize="12px" as={AiFillDollarCircle} />
                <TagLabel ml={-1} fontSize="0.8rem">
                  {salary}
                </TagLabel>
              </Tag>
            </Stack>
          </Box>
        </Flex>
        <Stack
          width={"100%"}
          mt={"2rem"}
          direction={"row"}
          padding={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button fontSize={"sm"} leftIcon={<BiTargetLock />}>
            follow
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            See more
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}
