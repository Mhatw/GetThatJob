import { Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useData } from "../../../../context/dataContext";
import { useAuth } from "../../../../services/auth";
import { createApplications } from "../../../../services/sessions/applications-services";

export function SendApplyBtn({ id, app }) {
  const toast = useToast();
  const auth = useAuth();
  const data = useData();
  console.log(data.applies, "data.applies", parseInt(id));
  const bool =
    data.applies.filter((apply) => apply.job_id === parseInt(id)).length > 0;
  console.log(bool, "bool");
  const sendApplication = async () => {
    const application = {
      application: {
        follow: false,
        message: app?.message || "no message",
        job_id: parseInt(id),
        status_id: 1,
      },
    };
    try {
      await createApplications(application);
      // auth.indexApplies();
      toast({
        title: "Success",
        description: "You have successfully applied",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Application failed",
        description: `${
          error?.response?.data?.unauthorized || "something went wrong"
        }`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    auth.setIsLoading(false);
  };

  return (
    <Button
      as={Link}
      to={`../job-apply/${id}`}
      colorScheme={"orange"}
      onClick={sendApplication}
      isDisabled={bool}
      isLoading={auth.isLoading}
    >
      {bool ? "Applied" : "Send application"}
    </Button>
  );
}
