import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useData } from "../../../../context/dataContext";

export function ApplyButton({ id }) {
  const data = useData();
  const bool =
    data.applies.filter((apply) => apply.job_id === parseInt(id)).length > 0;
  return (
    <Button
      as={Link}
      isDisabled={bool}
      to={`../job-apply/${id}`}
      colorScheme={"blue"}
    >
      {bool ? "Applied" : "Apply now"}
    </Button>
  );
}
