import React from 'react'
import Collaboration from '../components/Collaboration'
import { useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useEffect } from 'react';

function LeaderBoard() {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();


  
    if (!isLoggedIn) {
      router.push("/login");
      return null;
    }
  return (
    <>
      <Collaboration />
      <p>Hello world!</p>  {/* Display "hello world" if logged in */}
    </>
  )
}

export default LeaderBoard
