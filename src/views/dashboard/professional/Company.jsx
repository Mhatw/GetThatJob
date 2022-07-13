import React from "react";
import { useParams } from "react-router";

export function Company() {
  const params = useParams();

  return (
    <>
      <h1>Company {params?.id}</h1>
    </>
  );
}
