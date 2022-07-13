import React from "react";
import { useParams } from "react-router";

export function FilterJob() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>FilterJob: {params?.filter}</h1>
    </>
  );
}
