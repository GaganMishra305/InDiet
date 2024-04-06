import React from 'react'
import { useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { getUser } from "./api/auth/[...thirdweb]";
function Profile() {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();
  
  return (
    <div className='pt-20'>
      <h1>Hii you </h1>
    </div>
  )
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

export default Profile
