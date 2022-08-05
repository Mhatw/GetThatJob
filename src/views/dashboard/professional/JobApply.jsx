import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { BackButton } from "../../../components";
import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../services/auth";
import { HeaderCompanyJob, SendApplyBtn, TitleJob } from "./components";

export function JobApply() {
  const params = useParams();
  const data = useData();
  const auth = useAuth();
  const [apply, setApply] = React.useState({
    experience: auth.user?.experience,
    message: "",
  });
  const job = data.jobs.find((job) => job.id === parseInt(params?.id));
  const handleChange = (e) => {
    setApply({
      ...apply,
      [e.target.name]: e.target.value,
    });
  };

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
          <SendApplyBtn id={params?.id} app={apply} />
        </Flex>
        {/* title */}
        <TitleJob job={job} />
        {/* description */}
        <Flex flexDirection={"column"} m="1rem">
          <FormControl>
            <FormLabel>
              Professional experience (taken from your profile)
            </FormLabel>
            <Textarea
              placeholder="Here is a sample placeholder"
              size="sm"
              resize={"vertical"}
              name="experience"
              id={"experience"}
              value={apply.experience || ""}
              bg="white"
              onChange={(e) => handleChange(e)}
            />
            <FormLabel>
              Why are you interested in working at The company name SA
            </FormLabel>
            <Textarea
              placeholder="Mention things about The Company Name SA that excite you. Why would you be a good candidate?"
              size="sm"
              resize={"vertical"}
              name="message"
              id={"message"}
              bg="white"
              value={apply.message}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
        </Flex>
        <Center mt="2rem">
          <SendApplyBtn id={params?.id} app={apply} />
        </Center>
      </Box>
    </Flex>
  );
}
