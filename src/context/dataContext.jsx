import { createContext, useContext, useEffect, useState } from "react";
import { indexCategories } from "../services/sessions/category-services";
import { indexReloadedJobs } from "../services/sessions/jobs-services";
import { useSingleEffect } from "react-haiku";
import { useAuth } from "../services/auth";
import { indexTypes } from "../services/sessions/types-services";
import { indexStatus } from "../services/sessions/status-services";
import { indexApplications } from "../services/sessions/applications-services";
const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [cat, setCat] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [types, setTypes] = useState([]);
  const [applies, setApplies] = useState([]);
  const [status, setStatus] = useState([]);
  const auth = useAuth();

  async function handleIndexJobs() {
    auth?.setIsLoading(true);
    try {
      await indexReloadedJobs().then((res) => {
        console.log(res, "jobs");
        setJobs(res);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleIndexCat() {
    try {
      await indexCategories().then((res) => {
        console.log(res, "cats");
        setCat(res);
        jobs?.forEach((job) => {
          job["category"] = cat.find((cat) => cat.id === job.category_id).name;
        });
        setTimeout(() => {
          auth.setIsLoading(false);
        }, 500);
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.unauthorized) {
        auth.setIsLoading(false);
        auth.setUser(null);
      }
    }
  }
  async function handleIndexTypes() {
    try {
      await indexTypes().then((res) => {
        console.log(res, "types");
        setTypes(res);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleIndexStatus() {
    try {
      await indexStatus().then((res) => {
        console.log(res, "status");

        setStatus(res);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleIndexApplies() {
    // handleIndexJobs();
    try {
      await indexApplications().then((res) => {
        console.log(res, "Applies");

        auth.setIsLoading(false);

        setApplies(res);
      });
    } catch (error) {
      console.log(error);
      auth.setIsLoading(false);
    }
  }

  useSingleEffect(() => {
    let promises = [
      handleIndexJobs(),
      handleIndexCat(),
      handleIndexTypes(),
      handleIndexStatus(),
      handleIndexApplies(),
    ];
    Promise.all(promises).then(() => {
      auth.setIsLoading(false);
      console.log("all promises resolved");
    });
  });
  useEffect(() => {
    console.log(applies, "applies");
    console.log(applies, "applies after");
    applies.forEach((apply) => {
      apply["job"] = jobs.find((job) => job?.id === apply?.job_id);
      console.log(jobs, "jobs");
      apply["status"] = status.find((status) => status.id === apply.status_id);
      console.log(status, "status");
      console.log(applies, "applies after");
    });
  }, [applies, jobs, status]);
  useEffect(() => {
    status.forEach((status) => {
      status["route"] = status.name.toLowerCase().replace(/ /g, "-");
    });
    console.log(status, "status222");
  }, [status]);
  return (
    <DataContext.Provider
      value={{
        cat,
        setCat,
        jobs,
        setJobs,
        types,
        setTypes,
        applies,
        setApplies,
        status,
        setStatus,
        indexStatus: handleIndexStatus,
        indexApplies: handleIndexApplies,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
