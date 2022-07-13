import React from "react";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <Link to="../edit-profile">Edit Profile</Link>
    </>
  );
}

export function EditProfile() {
  return (
    <>
      <h1>EditProfile</h1>
    </>
  );
}
