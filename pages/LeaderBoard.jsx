import React from 'react'
import Collaboration from '../components/Collaboration'
import { useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { getUser } from "./api/auth/[...thirdweb]";
function LeaderBoard() {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();


  
   
  return (
    <>
      <Collaboration />
      <p>Hello world!</p>  {/* Display "hello world" if logged in */}
    </>
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

export default LeaderBoard
