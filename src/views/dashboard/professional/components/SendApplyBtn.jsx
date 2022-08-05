import {
  Button,
  useDisclosure,
  useToast,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Circle,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../../../context/dataContext";
import { useAuth } from "../../../../services/auth";
import { createApplications } from "../../../../services/sessions/applications-services";

export function SendApplyBtn({ id, app }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bool, setBool] = useState(false);
  const toast = useToast();
  const auth = useAuth();
  const data = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      data.applies.filter((apply) => apply.job_id === parseInt(id)).length > 0
    ) {
      setBool(true);
    }
  }, [data.applies, bool, id]);
  const sendApplication = async () => {
    const application = {
      application: {
        message: app?.message || "no message",
        job_id: parseInt(id),
        status_id: 1,
        experience: app?.experience || "no experience",
      },
    };
    try {
      const res = await createApplications(application);

      data.applies.push(res);
      navigate("/");
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
    onClose();
  };

  return (
    <>
      <Button
        colorScheme={"orange"}
        onClick={onOpen}
        isDisabled={bool}
        isLoading={auth.isLoading}
      >
        {bool ? "Applied" : "Send application"}
      </Button>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent mx="3rem" my="10rem">
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              display={"flex"}
              gap="0.5rem"
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <Circle bg="green" p="0.5rem">
                <FiSend color="white" />
              </Circle>{" "}
              Send application
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to send this application?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                as={Link}
                to={`../job-apply/${id}`}
                colorScheme={"green"}
                onClick={sendApplication}
                isDisabled={bool}
                ml={3}
              >
                Send
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
