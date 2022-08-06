import { Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { JobCard } from "./components";

import { useData } from "../../../context/dataContext";
export function FilterJob() {
  const params = useParams();
  const data = useData();

  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading px={"2rem"}>Find that job</Heading>
        <Flex
          alignItems="center"
          gap={"1rem"}
          justifyContent="flex-start"
          px={"2rem"}
          py={"1rem"}
        >
          <h1>FilterJob: {params?.filter}</h1>
        </Flex>
        <Center>
          <SimpleGrid
            columns={[1, 1, 1, 1, 2, 3, 4]}
            px={"3rem"}
            gap="1.5rem"
            maxW={"96em"}
            overflowX={"scroll"}
          >
            {data?.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </SimpleGrid>
        </Center>
      </Flex>
    </>
  );
}
