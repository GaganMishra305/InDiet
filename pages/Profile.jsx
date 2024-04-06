import React from "react";
import Businesses from "../components/Businesses";
import Worker from "../components/Worker";
import { getUser } from "./api/auth/[...thirdweb]";
function Profile() {
  return (
    <div className="pt-40">
      <h1 className="h1 mb-6 text-center">User Profile NFT </h1>
        <Worker />
        <Businesses />
    </div>
  );
}
export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  // Redirect to login if not logged in
  if(!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Profile;