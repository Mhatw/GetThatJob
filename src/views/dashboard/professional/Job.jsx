import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { useData } from "../../../context/dataContext";
import {
  ApplyButton,
  DescriptionJob,
  HeaderCompanyJob,
  TitleJob,
} from "./components";
import { BackButton } from "../../../components";
export function Job() {
  const params = useParams();
  const data = useData();
  const job = data.jobs.find((job) => job.id === parseInt(params?.id));

  return (
    <Flex pt="1rem" pb="3rem" minH="100vh" justifyContent={"center"}>
      <Box maxW={"60em"}>
        <BackButton />
        {/* company */}
        <Flex
          gap={"0.5rem"}
          direction={["column", "column", "row", "row"]}
          px={"2rem"}
          py={"1rem"}
        >
          <HeaderCompanyJob job={job} isLink />
          <ApplyButton id={params?.id} />
        </Flex>
        {/* title */}
        <TitleJob job={job} />
        {/* description */}
        <Flex flexDirection={"column"} mt="1rem">
          <DescriptionJob job={job} />
        </Flex>
        <Center mt="2rem">
          <ApplyButton id={params?.id} />
        </Center>
      </Box>
    </Flex>
  );
}
