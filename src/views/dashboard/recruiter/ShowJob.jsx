import React from "react";
import { useParams } from "react-router";

export function ShowJob() {
  const params = useParams();

  return (
    <>
      <h1>ShowJob: {params?.job}</h1>
    </>
  );
}
