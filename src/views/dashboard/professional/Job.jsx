import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function Job() {
  const params = useParams();
  const companyId = "22";
  return (
    <>
      <h1>Job {params?.id}</h1>
      <Link to={`../job-apply/${params?.id}`}>apply</Link>
      <br />
      <Link to={`../company/${companyId}`}>company</Link>
    </>
  );
}
