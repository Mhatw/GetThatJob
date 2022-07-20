import { Center, Spinner } from "@chakra-ui/react";

export const loaderView = (
  <Center h="100vh" w="100vw">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
);
