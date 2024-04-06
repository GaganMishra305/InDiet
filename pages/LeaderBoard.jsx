import React from 'react'
import Collaboration from '../components/Collaboration'
import { useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useEffect } from 'react';

function LeaderBoard() {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();


  
    useEffect(()=>{
      if(!isLoading && !isLoggedIn){
        router.push("/login");
      }
    },[])
  return (
    <div className='mt-16' >
      <Collaboration />
    </div>
  )
}

export default LeaderBoard
