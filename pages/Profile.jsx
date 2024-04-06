import React from 'react'
import { useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useEffect } from 'react';
function Profile() {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);
  return (
    <div className='pt-20'>
      <h1>Hii you </h1>
    </div>
  )
}

export default Profile
