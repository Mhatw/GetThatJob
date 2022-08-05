import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useParams, useLocation } from "react-router";
import { useData } from "../../../context/dataContext";
import { PostingCard } from "./components";

export function PostCategory() {
  const params = useParams();
  const data = useData();
  const location = useLocation();

  return (
    <>
      <Flex w={"100%"} justifyContent="center">
        <Center flexDirection={"column"} maxW="xl">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Filter: {params?.category}
            </MenuButton>
            <MenuList>
              <MenuItem
                key={"all"}
                isDisabled={location.pathname.match("all")}
                value={"all"}
              >
                {"All"}
              </MenuItem>
              {data?.status.map((status) => {
                return (
                  <MenuItem
                    key={status.id}
                    isDisabled={location.pathname.match(status.route)}
                    value={status.route}
                  >
                    {status.name}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          {/* future component */}
          <Accordion allowMultiple mt="2rem">
            {data?.jobs.map((job) => {
              return <PostingCard job={job} />;
            })}
          </Accordion>
        </Center>
      </Flex>
    </>
  );
}
