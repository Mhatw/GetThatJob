import { Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { salaryString } from "../utilities";
import { TagBoxJob } from "./TagsBoxJob";

export function TitleJob({ job }) {
  const posted = (new Date() - new Date(job?.created_at)) / (1000 * 60 * 60);
  return (
    <Center flexDirection={"column"}>
      <Heading fontSize={"4xl"} fontFamily={"body"} m={"0"} color="gray.900">
        {job?.name}
      </Heading>
      <Text fontSize={"0.8rem"} color="gray.400" fontWeight={"400"}>
        {posted < 24
          ? `Posted ${Math.round(posted)} hours ago`
          : `Posted ${Math.round(posted / 24)} days ago`}
      </Text>
      <SimpleGrid
        columns={[3, 3, 3]}
        spacing={["0.5rem", "1rem", "1rem"]}
        mt="1rem"
        p={["0.5rem", "1rem", "1rem"]}
      >
        <TagBoxJob title={job?.category} subtitle="Category" />
        <TagBoxJob title={job?.type} subtitle="Type" />
        <TagBoxJob
          title={salaryString(job?.salary_min, job?.salary_max)}
          subtitle="Salary"
        />
      </SimpleGrid>
    </Center>
  );
}
