import React from "react";
import Businesses from "../components/Businesses";
import Worker from "../components/Worker";

function Profile() {
  return (
    <div className="pt-40">
      <h1 className="h1 mb-6 text-center">User Profile</h1>
        <Worker />
        <Businesses />
    </div>
  );
}

export default Profile;
