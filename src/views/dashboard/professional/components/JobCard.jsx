import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { useAuth } from "../../../../services/auth";
import { Link } from "react-router-dom";
import { salaryString } from "../utilities";
import { FollowButton } from "./FollowButton";
export function JobCard({ job }) {
  const auth = useAuth();
  const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const temp_img = randomElement([
    "data:image/png;base64,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",
    "https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg",
    "https://blog.mesa247.pe/wp-content/uploads/2015/12/bcp-logo.jpg",
    "data:image/png;base64,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",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEUAv0QALaMAGqgAt00Awz8AI6YAgHoAen4AxjsAxT0AK6QAJ6UAwUEAIqYAKaQAKKUAHqcAF6kAWpAAHKcAo18AuEsAvUUAAK0AU5MAV5EAGKgAgnkAXo4AmWgATpYAplwAPJ0As1AAjnAAY4sAdIIAhnYARpkAaogANaAAlmsAi3MAnWQAOZ4AiXQAMaEAcIQAkW4AqlkAQJsAZooAdoAArlQApF4AboYASpctw3SJAAADPElEQVR4nO3di07iQABGYegFpjdoKSAUEBVRhBVF13Xf/8m2xWxiNi5Wy1xKznkB8+VvR2LC2GgQEREREREREREREREREREREREREZmR44mhrT5VvFDYy942zizVnakhhqI/SqKu31SfpUTo2OOsq0GnTChmcaDJp0YoJok2nxKhXqACoTPTClQgHERagfKFoqfvkFEiDOd6n1H5QjHW9XtQlXCge0LZQmet+ZyRLvSmms8Z6UKx0vFhW6VwqP0hlS0cWLqBsoU2QoQIESI0XugHbmwd/mxfX2EniNJkNW3N7PbBT4Z1FL4Nd/5wNW8Izwm9tntCwmK49GLR2lw6BW7/M5wTEXby4TJ3dH21a3h/bY1TERbDRReLycYW/+DqL9wP1xxdP+4a4gNbvYVdN06Tp+d8OO+j4WotzB/KOG2Ofz7unP8PV1dhPpwV3dwuPx+ufsJiuKQ5bt+9hKWGe5fxQr8Yzs2H6w8+PCo/zWhhJ0qzVe87w73LZGFntO4P892+jdtnstCdiEq2t4wWtpwj/AyECKuFEGGZECKsFkKEZUKIsFoIEZYJIcJqIURYJoQIq4UQYZkQIqwWQoRlQoiwWggRlgkhwmohRFgmhAirhRBhmRAirBZChGVCiLBaCBGWyeTvAVcWho4nGi8Lc7/LXUGY2zzP3kyen+L08DVGNRQWw4W7x+uRb8Vu0DnIq5uwsDmXm8niIkmjz231Eha44fzq4dzP8uG+cvmU+cLCJi5nremPuPxwNRGGxXEynK8fzmPri8OZL3x744rhrG8NZ7Iw3L9xv9avv4MKwxkq3A/3cteebr9wVNZEGDo5btC/f71x8+GOeym2dmExnJcP19umRxzOGOEyH255e5MdfThThP7TKoulDGeKsOkruBlT/60RCBEiPH1hdvJCa3Dqwkgq0AChvxInLgwW3okLo/Ux/upssjCRe9DoFwY9ua+hfmEyP8JNVCYLg6nkCbULXclvoXZhspF7kGoXJkvZz6hmoQqgTmEQbRQA9Qm7SW8g/R3UJvS7UTKeqxiwEJ4p/5+VVrSd3tvHuHKyJFF9Q+EpeT6JiIiIiIiIiIiIiIiIiIiIiIiIiEr0B43EYJsK/tspAAAAAElFTkSuQmCC",
    "https://mir-s3-cdn-cf.behance.net/projects/404/618e44134903165.Y3JvcCwxMDU0LDgyNSwzMTgsMA.png",
    "https://i.ytimg.com/vi/Ew0cCLyGsgQ/maxresdefault.jpg",
  ]);

  const salary = salaryString(job.salary_min, job.salary_max);
  const posted = (new Date() - new Date(job.created_at)) / (1000 * 60);
  return (
    <Skeleton borderRadius={"lg"} isLoaded={!auth.isLoading} fadeDuration={2}>
      <Center
        transition="all 0.2s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          direction={"column"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"xl"}
          padding={4}
        >
          <Flex
            as={Link}
            to={`/dashboard/professional/find-job/job/${job.id}`}
            gap={"0.5rem"}
            direction={["column", "row", "row", "row"]}
          >
            <Flex flex={1}>
              <Image
                objectFit="cover"
                maxW="130px"
                bg="gray.100"
                w={["60px", "130px", "130px"]}
                h={["60px", "130px", "130px"]}
                borderRadius="lg"
                src={job.logo_url || temp_img}
              />
            </Flex>
            <Box
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Text fontWeight={600} color={"gray.500"} size="sm" m={"0rem"}>
                {job.category}
                {posted < 240 && (
                  <Badge
                    borderRadius={"0.4rem"}
                    fontSize="0.5rem"
                    colorScheme="purple"
                    ml="0.5rem"
                  >
                    New
                  </Badge>
                )}
              </Text>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                lineHeight={"1"}
                m={"0"}
                w={["237px", "200px", "280px", "270px", "200px"]}
                h={["50px"]}
                textOverflow={"ellipsis"}
              >
                {job?.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                mb={"0.4rem"}
                fontSize={"sm"}
                fontWeight={"bold"}
                overflow={"hidden"}
                w="200px"
                h="40px"
                // textOverflow={"ellipsis"}
                // whiteSpace={"nowrap"}
                // bg="#99c3d0"
                // border="1px"
              >
                {job?.company.name}
              </Text>
              <Stack
                justifyContent={["center", "center", "center", "center"]}
                direction={["column", "row", "row", "row"]}
              >
                <Tag
                  size="md"
                  key="typeTag"
                  variant="subtle"
                  colorScheme="blue"
                >
                  <TagLeftIcon boxSize="12px" as={BsFillCalendarFill} />
                  <TagLabel ml={-1} fontSize="0.8rem">
                    {job?.type}
                  </TagLabel>
                </Tag>

                <Tag
                  size="md"
                  key="salaryTag"
                  variant="subtle"
                  colorScheme="green"
                >
                  <TagLeftIcon boxSize="12px" as={AiFillDollarCircle} />
                  <TagLabel ml={-1} fontSize="0.8rem">
                    {salary}
                  </TagLabel>
                </Tag>
              </Stack>
            </Box>
          </Flex>
          {/* buttons */}
          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={["row", "row", "row"]}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <FollowButton job={job} />
            <Button
              as={Link}
              to={`/dashboard/professional/find-job/job/${job.id}`}
              flex={[null, 1]}
              fontSize={"sm"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              See more
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Skeleton>
  );
}
