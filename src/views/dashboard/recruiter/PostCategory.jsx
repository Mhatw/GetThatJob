import React from "react";
import { useParams } from "react-router";

export function PostCategory() {
  const params = useParams();
  return (
    <>
      <h1>PostCategory: {params?.category} </h1>
    </>
  );
}
