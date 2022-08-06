import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { BackButton } from "../../../components";
import { useData } from "../../../context/dataContext";
import { HeaderCompanyJob, JobCard } from "./components";

export function Company() {
  const params = useParams();
  const data = useData();
  const job = data.jobs.find((job) => job.id === parseInt(params?.id));
  const companiesJobs = data.jobs.filter(
    (mapJob) => mapJob.company.id === job.company.id
  );

  return (
    <Flex flexDirection={"column"}>
      <Box my={"2rem"}>
        <BackButton />
      </Box>

      <HeaderCompanyJob job={job} />
      <Text fontSize={"1rem"} color="gray.900" fontWeight={"600"} mt="2rem">
        {companiesJobs.length} job{companiesJobs.length > 1 ? "s" : ""} openings
      </Text>
      <Center mt={"1rem"}>
        <SimpleGrid
          columns={[1, 1, 1, 1, 2, 3, 4]}
          px={"3rem"}
          gap="1.5rem"
          maxW={"96em"}
          overflowX={"scroll"}
        >
          {companiesJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </SimpleGrid>
      </Center>
    </Flex>
  );
}
