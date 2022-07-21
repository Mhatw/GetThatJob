import { createContext, useContext, useState } from "react";
import { indexCategories } from "../services/sessions/category-services";
import { indexReloadedJobs } from "../services/sessions/jobs-services";
import { useSingleEffect } from "react-haiku";
import { useAuth } from "../services/auth";
import { indexTypes } from "../services/sessions/types-services";
const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [cat, setCat] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [types, setTypes] = useState([]);
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
  useSingleEffect(() => {
    handleIndexJobs();
    handleIndexCat();
    handleIndexTypes();
  });
  return (
    <DataContext.Provider
      value={{
        cat,
        setCat,
        jobs,
        setJobs,
        types,
        setTypes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
