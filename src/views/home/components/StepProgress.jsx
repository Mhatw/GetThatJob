import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export function StepProgress({ data }) {
  return (
    <Center>
      <SimpleGrid columns={data.length} gap="0.5rem" px={"0.2rem"}>
        {data.map((item, index) => (
          <Flex gap="0.4rem" key={index + item.label}>
            <Center
              borderRadius={"100%"}
              color={"whiteAlpha.900"}
              w="22px"
              h="22px"
              fontSize={"0.8rem"}
              background={
                item.status === "PENDING"
                  ? "gray"
                  : item.status === "IN PROGRESS"
                  ? "blue.600"
                  : "gray.900"
              }
            >
              {index + 1}
            </Center>
            <Box>
              <Text fontSize={"0.6rem"}>{item.status}</Text>
              <Text fontSize={"0.8rem"}>{item.label}</Text>
              <Text fontSize={"0.8rem"}>{item.label2}</Text>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Center>
  );
}
