import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function FilterJob() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>FilterJob: {params?.filter}</h1>
      <Link to="../job/2">All</Link>
    </>
  );
}
