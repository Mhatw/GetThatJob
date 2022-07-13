import React from "react";
import { useParams } from "react-router";

export function Applies() {
  const params = useParams();
  return (
    <>
      <h1>Applies: {params?.category}</h1>
    </>
  );
}
