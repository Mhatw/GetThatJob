import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { useAuth } from "../../../../services/auth";
import {
  followJob,
  indexfollow,
  unfollowJob,
} from "../../../../services/sessions/follow-services";
import { useSingleEffect } from "react-haiku";
import { useData } from "../../../../context/dataContext";
export function FollowButton({ job }) {
  const auth = useAuth();
  const data = useData();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleFollow = async () => {
    setIsLoading(true);
    try {
      await followJob(job.id);
      setIsLoading(false);
      setIsFollowing(!isFollowing);
      data.jobs?.forEach((e) => {
        if (e.id === job.id) {
          e.following = !isFollowing;
        }
      });
      console.log(data.jobs, "asdfasdfasdfa");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "Error following job",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      if (error?.response?.data?.unauthorized) {
        auth.setUser(null);
      }
    }
  };
  const handleUnfollow = async () => {
    setIsLoading(true);
    try {
      const follows = await indexfollow();
      console.log(follows, "follows");
      console.log(job.id, "job.id");
      console.log(follows?.find((e) => e.job_id === job.id).id, "aaaaaaaaa");
      try {
        const followId = follows?.find((e) => e.job_id === job.id).id;
        await unfollowJob(followId);
        setIsLoading(false);
        setIsFollowing(!isFollowing);
        data.jobs?.forEach((e) => {
          if (e.id === job.id) {
            e.following = !isFollowing;
          }
        });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        toast({
          title: "Error unfollowing job",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

      console.log(data.jobs, "asdfasdfasdfa");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "Error following job",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      // if (error?.response?.data?.unauthorized) {
      //   auth.setUser(null);
      // }
    }
  };

  useSingleEffect(() => {
    setIsFollowing(job?.following);
  });

  // useEffect(() => {

  // }, [isFollowing, data.jobs, job.id]);

  return (
    <Button
      isLoading={isLoading}
      fontSize={"sm"}
      colorScheme={isFollowing ? "orange" : "gray"}
      variant={isFollowing ? "solid" : "ghost"}
      leftIcon={<BiTargetLock />}
      onClick={isFollowing ? handleUnfollow : handleFollow}
    >
      {isFollowing && <span>Following</span>}
      {!isFollowing && <span>Follow job</span>}
    </Button>
  );
}
