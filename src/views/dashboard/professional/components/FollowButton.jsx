import { Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { useAuth } from "../../../../services/auth";
import {
  followJob,
  unfollowJob,
} from "../../../../services/sessions/follow-services";
import { useSingleEffect } from "react-haiku";
import { useData } from "../../../../context/dataContext";
export function FollowButton({ job }) {
  const auth = useAuth();
  const data = useData();
  const [isFollowing, setIsFollowing] = useState(false);
  const toast = useToast();
  const handleFollow = async () => {
    auth.setIsLoading(true);
    try {
      await followJob(job.id);
      auth.setIsLoading(false);
      setIsFollowing(!isFollowing);
      data.jobs?.forEach((e) => {
        if (e.id === job.id) {
          e.following = !isFollowing;
        }
      });
      console.log(data.jobs, "asdfasdfasdfa");
    } catch (error) {
      console.log(error);
      auth.setIsLoading(false);
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
    auth.setIsLoading(true);
    try {
      await unfollowJob(job.id);
      auth.setIsLoading(false);
      setIsFollowing(!isFollowing);
      data.jobs?.forEach((e) => {
        if (e.id === job.id) {
          e.following = !isFollowing;
        }
      });

      console.log(data.jobs, "asdfasdfasdfa");
    } catch (error) {
      console.log(error);
      auth.setIsLoading(false);
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
      isLoading={auth.isLoading}
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
