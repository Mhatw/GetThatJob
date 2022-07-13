import React from "react";
import { useParams } from "react-router";

export function JobApply() {
  const params = useParams();
  return (
    <>
      <h1>JobApply {params?.id}</h1>
    </>
  );
}
