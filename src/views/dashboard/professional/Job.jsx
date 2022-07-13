import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function Job() {
  const params = useParams();
  return (
    <>
      <h1>Job {params?.id}</h1>
      <Link to={`../apply/${params?.id}`}>apply</Link>
    </>
  );
}
