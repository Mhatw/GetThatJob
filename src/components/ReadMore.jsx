import { Link } from "@chakra-ui/react";
import { useState } from "react";

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {isReadMore ? text.slice(0, 150) : text}
      <Link
        onClick={toggleReadMore}
        fontWeight="semibold"
        color={"blue.500"}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
      >
        {isReadMore ? " ...read more" : " show less"}
      </Link>
    </>
  );
};
