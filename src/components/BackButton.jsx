import { Button } from "@chakra-ui/react";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      leftIcon={<MdKeyboardArrowLeft />}
      variant="link"
      onClick={() => navigate(-1)}
      mx="0.5rem"
    >
      back
    </Button>
  );
}
