import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useData } from "../../../context/dataContext";
import { JobCard } from "./components";

export function Following() {
  const data = useData();
  const followingJobs = data?.jobs?.filter(
    (mapJob) => mapJob.following === true
  );

  return (
    <Flex flexDirection={"column"}>
      <Box mt={"2rem"}>
        <Heading
          px={"1rem"}
          color="blue.700"
          display={"flex"}
          alignItems="center"
        >
          Following &nbsp;
        </Heading>
      </Box>
      <Flex px={"1rem"}>
        <Text fontSize={"1rem"} color="gray.900" fontWeight={"600"} mt="2rem">
          You are following {followingJobs.length} job
          {followingJobs.length > 1 ? "s" : ""}
        </Text>
      </Flex>
      <Center mt={"1rem"}>
        <SimpleGrid
          columns={[1, 1, 1, 1, 2, 3, 4]}
          px={"3rem"}
          gap="1.5rem"
          maxW={"96em"}
          overflowX={"scroll"}
        >
          {followingJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </SimpleGrid>
      </Center>
    </Flex>
  );
}
