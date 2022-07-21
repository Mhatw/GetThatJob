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
import { useParams, useNavigate, useLocation } from "react-router";
import { useSingleEffect } from "react-haiku";
import { useData } from "../../../context/dataContext";

import { ApplyCard } from "./components";

export function Applies() {
  const params = useParams();
  const navigate = useNavigate();
  const data = useData();
  const location = useLocation();

  useSingleEffect(() => {
    data.indexApplies();
    data.indexStatus();
  });
  const selectApplies =
    params?.category !== "all"
      ? data?.applies.filter((apply) => apply.status.route === params?.category)
      : data?.applies;
  console.log(selectApplies, "selectApplies");
  const HandleFilter = (e) => {
    navigate(`/dashboard/professional/applies/${e.target.value}`);
  };
  console.log(selectApplies[0]?.created_at, "selectApplies[0]");
  return (
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
              onClick={HandleFilter}
              value={"all"}
            >
              {"All"}
            </MenuItem>
            {data?.status.map((status) => {
              return (
                <MenuItem
                  key={status.id}
                  isDisabled={location.pathname.match(status.route)}
                  onClick={HandleFilter}
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
          {selectApplies?.map((apply) => {
            return <ApplyCard apply={apply} />;
          })}
        </Accordion>
      </Center>
    </Flex>
  );
}
