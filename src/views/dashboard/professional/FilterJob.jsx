import { Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { JobCard } from "./components";

export function FilterJob() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>FilterJob: {params?.filter}</h1>
      <Center>
        <SimpleGrid
          columns={[1, null, 2, 3, 3, 4]}
          // px={"4rem"}
          gap="1.5rem"
          maxW={"96em"}
        >
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </SimpleGrid>
      </Center>
      <Link to="../job/2">All</Link>
    </>
  );
}
