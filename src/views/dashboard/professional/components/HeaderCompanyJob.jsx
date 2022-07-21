import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { Link } from "react-router-dom";

export function HeaderCompanyJob({ job, isLink }) {
  return (
    <Flex flex={1} gap="1rem">
      <Image
        objectFit="cover"
        maxW="130px"
        bg="gray.500"
        // maxH="130px"
        w={["30%", "30%", "130px"]}
        // h={["100px", "130px", "130px"]}
        borderRadius="lg"
        src={job?.logo_url}
      />
      <Box
        display={["flex"]}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="0.5rem"
        w={["70%", "70%", "50%"]}
      >
        <Heading
          as={isLink ? Link : ""}
          to={`../company/${job?.company.id}`}
          color="gray.900"
          fontSize={"2xl"}
          fontFamily={"body"}
          m={"0"}
          w="100%"
        >
          {job?.company.name}
        </Heading>
        <Button fontSize={"sm"} leftIcon={<BiTargetLock />} border="2px">
          follow
        </Button>
      </Box>
    </Flex>
  );
}
