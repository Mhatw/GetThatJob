import { Box, Heading, ScaleFade, Text } from "@chakra-ui/react";
import React from "react";

export function TagBoxJob({ title, subtitle }) {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box
        display={["flex"]}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg={"white"}
        borderColor={"blue.500"}
        borderRadius="0.4rem"
        px={["0.5rem", "1rem", "1rem"]}
        py={"0.2rem"}
        boxShadow="lg"
      >
        <Text fontSize={"0.6rem"} color="gray.400" fontWeight={"400"}>
          {subtitle}
        </Text>
        <Heading fontSize={["sm", "sm", "md"]} m={"0"} color="gray.900">
          {title}
        </Heading>
      </Box>
    </ScaleFade>
  );
}
