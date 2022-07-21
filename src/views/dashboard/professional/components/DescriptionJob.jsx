import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export function DescriptionJob({ job, data }) {
  if (!data)
    data = [
      {
        title: `About ${job?.company.name}`,
        content: job?.company.description,
      },
      {
        title: "About the job position",
        content: job?.description,
      },
    ];
  return (
    <>
      {data.map((item, index) => (
        <Flex
          key={index}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap="1rem"
          px={"1rem"}
          py={"1rem"}
        >
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            m={"0"}
            color="blue.500"
          >
            {item.title}
          </Heading>
          <Text fontSize={"1rem"} color="gray.900" fontWeight={"400"}>
            {item.content || "No description"}
          </Text>
        </Flex>
      ))}
    </>
  );
}
