import React from 'react'
import { useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import Businesses from '../components/Businesses';
import BusinessCard from '../components/BusinessCard';

function Profile() {
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();
    if (!isLoggedIn) {
      router.push("/login");
      return null;
    }
  return (
    <div className='pt-20'>
      <Businesses/>
      <BusinessCard/>
    </div>
  )
}

export default Profile
