import { Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { JobCard } from "./components";

import { useData } from "../../../context/dataContext";
export function FilterJob() {
  const params = useParams();
  // const [jobs, setJobs] = useState([]);
  // const [cat, setCat] = useState([]);
  // const auth = useAuth();
  const data = useData();
  // async function handleIndexJobs() {
  //   auth.setIsLoading(true);
  //   try {
  //     await indexReloadedJobs().then((res) => {
  //       console.log(res, "jobs");
  //       setJobs(res);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async function handleIndexCat() {
  //   try {
  //     await indexCategories().then((res) => {
  //       console.log(res, "cats");
  //       setCat(res);
  //       jobs?.forEach((job) => {
  //         job["category"] = cat.find((cat) => cat.id === job.category_id).name;
  //       });
  //       setTimeout(() => {
  //         auth.setIsLoading(false);
  //       }, 500);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useSingleEffect(() => {
  //   handleIndexJobs();
  //   handleIndexCat();
  // });

  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading px={"2rem"}>Find that job</Heading>
        <Flex
          alignItems="center"
          gap={"1rem"}
          justifyContent="flex-start"
          px={"2rem"}
          py={"1rem"}
        >
          <h1>FilterJob: {params?.filter}</h1>
          {/* <Button onClick={handleIndexJobs}>index</Button> */}
        </Flex>
        <Center>
          <SimpleGrid
            columns={[1, null, 1, 2, 2, 3, 4]}
            px={"4rem"}
            gap="1.5rem"
            maxW={"96em"}
            overflowX={"scroll"}
          >
            {data?.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </SimpleGrid>
        </Center>
      </Flex>

      <Link to="../job/2">All</Link>
    </>
  );
}
